import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

/**
 * Helper function that gets the scroll position
 * @param param0
 */
const getScrollPosition = ({element, useWindow}) => {
    /**
     * Check if it runs inside of browser
     */
    if (!isBrowser) return {x: 0, y: 0}

    /**
     * Checks if the user requested the scroll position of the entire page or any specific element inside it
     */
    const target = element ? element.current : document.body;
    /**
     * Gets the current scrolling position
     */
    const position = target.getBoundingClientRect();

    return useWindow ? {x: window.scrollX, y: window.scrollY} : {x: position.left, y: position.top};

}

export const useScrollPosition = (effect, deps, element useWindow, wait) {
    const position = useRef(getScrollPosition({useWindow}))
}