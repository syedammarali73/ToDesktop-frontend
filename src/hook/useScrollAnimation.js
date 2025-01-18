
export const setUpIntersectionObserver = (element, isLTR, speed, isLg) => {
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = isLg ? 0 * 4 : 36 * 4;
    const scrollHandler = () => {
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      let totalTranslate = 0;
      if (isLTR) {
        totalTranslate = translateX + initialTranslateLTR;
      } else {
        totalTranslate = -(translateX + initialTranslateRTL);
      }
      element.style.transform = `translateX(${totalTranslate}px)`;
    };
  
    const intersectionCallback = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      // console.log(element, isIntersecting);
      if (isIntersecting) {
        document.addEventListener("scroll", scrollHandler);
      } else {
        document.removeEventListener("scroll", scrollHandler);
      }
    };
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
  };
  