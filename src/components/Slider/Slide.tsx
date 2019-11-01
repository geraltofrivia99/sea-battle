import React, { useRef, useCallback } from 'react';

interface ISlide {
  onHandleClick: (data: any) => void,
  data: {
    src: string,
    button: any,
    headline: any,
    index: number
  },
  current: any
}

export const Slide: React.SFC<ISlide> = React.memo(({ onHandleClick, data, current }) => {
  const slide: any = useRef(null);
  const { src, button, headline, index } = data;
  let classNames = 'slide';
  const handleMouseMove = useCallback((event:  any) => {
    const el: any = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));

  }, []);
  const handleMouseLeave = useCallback(() => {
      slide.current.style.setProperty('--x', 0);
      slide.current.style.setProperty('--y', 0);
  }, [])

  const handleSlideClick = () => {
    onHandleClick(index);
  }

  const imageLoaded = (event: any) => {
    event.target.style.opacity = 1;
  }
  if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
    return (
      <li 
        ref={slide}
        className={classNames} 
        onClick={handleSlideClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img 
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={imageLoaded}
          />
        </div>
        
        <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
          <button className="slide__action btn">{button}</button>
        </article>
      </li>
    )
});