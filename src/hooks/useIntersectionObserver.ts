import { useState, useEffect } from "react";

const useIntersectionObserver = (ref, { threshold, root, rootMargin }) => {
  // configure the state
  let observer = null;
  const [state, setState] = useState({
    inView: false,
    triggered: false,
    entry: undefined
  });

  if (process.browser) {
    observer = new IntersectionObserver(
      (entries, observerInstance) => {
        // checks to see if the element is intersecting
        if (entries[0].intersectionRatio > 0) {
          // if it is update the state, we set triggered as to not re-observe the element
          setState({
            inView: true,
            triggered: true,
            entry: observerInstance
          });
          // unobserve the element
          observerInstance.unobserve(ref.current);
        }
        return;
      },
      {
        threshold: threshold || 0,
        root: root || null,
        rootMargin: rootMargin || "0%"
      }
    );
  }

  useEffect(() => {
    // check that the element exists, and has not already been triggered
    if (observer && ref.current && !state.triggered) {
      observer.observe(ref.current);
    }
  });

  return [state.inView, state.entry];
};

export default useIntersectionObserver;
