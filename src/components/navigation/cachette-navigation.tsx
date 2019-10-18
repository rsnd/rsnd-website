// This component uses the Render Prop Pattern to add the 'Cachette'
// Component Behaviour to the Navigation Component...

import React, { Component } from "react";
import Styled from "styled-components";
import _ from "lodash";

interface CachetteWrapperProps {
  ref: HTMLDivElement;
  height?: string;
  isNavVisible?: boolean;
  navComponent?: (() => React.ReactNode) | React.ReactNode;
}
export const CachetteWrapper = Styled.div<CachetteWrapperProps | any>`
	transition: all 0.5s ease-in;
	width: 100%;
	position: fixed;
  background-color: #FFF;
	top: 0;
    left: 0;
    z-index: 10;
    transform: translate3d(0, ${props =>
      props.isNavVisible ? `0px` : `-100%`}, 0);
    @media screen and (max-width: 990px){
        transform: none;
    }
`;

interface Props {
  initVisible: Boolean;
  navHeight: string;
  navComponent: (() => React.ReactNode) | React.ReactNode;
}
interface State {
  lastScrollTop: Number;
  isNavVisible: Boolean;
  shouldNavVisible: Boolean;
  isScrolling: Boolean;
}

export default class CachetteNavigation extends Component<Props, State> {
  state = {
    lastScrollTop: 0,
    delta: 5,
    isNavVisible: this.props.initVisible ? true : false,
    shouldNavVisible: this.props.initVisible ? true : false,
    isScrolling: false
  };

  visibleCheckInterval = 0;

  // Declare Refs...
  cachetteNode = React.createRef<HTMLDivElement>();

  /**
   * @function startScroll - Function to update state whenever the
   * user starts scrolling...
   */
  startScroll = () => {
    this.setState(() => ({
      isScrolling: true
    }));
  };

  /**
   * @function stopScroll - Function to update state whenever the
   * user stops scrolling
   */
  stopScroll = () => {
    this.setState(() => ({
      isScrolling: false
    }));
  };

  /**
   * @function scrollTimerFn - Timer function to handle scroll dampening and
   * timeouts.
   */
  scrollTimerFn = timer => {
    if (timer !== null) {
      clearTimeout(timer);
      if (!this.state.isScrolling) {
        this.startScroll();
      }
    }
    timer = setTimeout(() => {
      if (this.state.isScrolling) {
        this.stopScroll();
      }
    }, 250);
  };

  /**
   * @function checkNavVisibility - Function to check if the window is scrolling.
   * Calls @function hasScrolled
   */
  checkNavVisibility = () => {
    this.checkPageScrolledPastTop();
    if (this.state.isScrolling) {
      this.hasScrolled();
    }
    this.visibleCheckInterval = window.requestAnimationFrame(
      this.checkNavVisibility
    );
  };

  /**
   * @function checkPageScrolledPastTop - Function to check if the scroll Action has passed the top...
   */
  checkPageScrolledPastTop = () => {
    let navHeight = parseInt(this.props.navHeight, 10);

    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body).scrollTop;
    if (scrollTop >= navHeight + 100) {
      this.setState({
        shouldNavVisible: true
      });
    } else if (this.props.initVisible) {
      this.setState({
        shouldNavVisible: false
      });
    } else {
      this.setState({
        shouldNavVisible: false,
        isNavVisible: false
      });
    }
  };

  /**
   * @function hasScrolled - Function to make state updates once the scroll action
   * has been performed...
   */
  hasScrolled() {
    let navHeight = parseInt(this.props.navHeight, 10);
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body).scrollTop;
    if (Math.abs(this.state.lastScrollTop - scrollTop) <= this.state.delta) {
      return;
    }
    // If User scrolled down and are past the navbar, set Visible to false
    // This is necessary so you never see what is "behind" the navbar.
    if (scrollTop > this.state.lastScrollTop && scrollTop > navHeight) {
      // Scrolling Down
      this.setState({
        isNavVisible: false
      });
    } else {
      // Scrolling Up
      if (
        scrollTop + window.innerHeight < document.body.clientHeight &&
        this.state.shouldNavVisible
      ) {
        this.setState({
          isNavVisible: true
        });
      }
    }
    // Reset the LastScrollTop state to The current Scroll Position
    this.setState({
      lastScrollTop: scrollTop
    });
  }

  componentDidMount() {
    // Add an Event Listener to listen for scroll Action

    window.addEventListener("scroll", timer => {
      this.scrollTimerFn(timer);
    });

    // Check the NavVisibility...
    window.requestAnimationFrame(this.checkNavVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", timer => {
      this.scrollTimerFn(timer);
    });

    window.cancelAnimationFrame(this.visibleCheckInterval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.lastScrollTop === nextState.lastScrollTop) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { isNavVisible, isScrolling } = this.state;
    const { navHeight } = this.props;
    return (
      <CachetteWrapper
        className="cachette-wrapper"
        ref={this.cachetteNode}
        height={navHeight}
        isNavVisible={isNavVisible}>
        {this.props.navComponent}
      </CachetteWrapper>
    );
  }
}
