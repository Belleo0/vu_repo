import { useEffect, useState } from 'react';

export default (condition = true) => {
  // const scrollPosition = window.pageYOffset;

  // function preventDefault(e: any) {
  //   e.preventDefault();
  // }

  // function disableScroll() {
  //   document.body.addEventListener('touchmove', preventDefault, {
  //     passive: false,
  //   });
  // }
  // function enableScroll() {
  //   document.body.removeEventListener('touchmove', preventDefault);
  // }

  useEffect(() => {
    if (condition) {
      // disableScroll();
      document.body.style.overflow = 'hidden';
      // document.body.style.position = 'fixed';
      // document.body.style.width = '100%';
      // document.body.style.top = `-${scrollPosition}px`;
    }
    return () => {
      // enableScroll();
      document.body.style.overflow = 'unset';
      // document.body.style.position = 'unset';
      // document.body.style.width = '100%';
      // document.body.style.top = '0';
      // window.scrollTo(0, scrollPosition);
    };
  }, [condition]);

  return null;
};
