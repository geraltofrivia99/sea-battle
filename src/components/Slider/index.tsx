import React, { useState } from 'react';
import { Slide } from './Slide';
import { SliderControl } from './SlideControls'
// import * as S from './styles';
import './styles.css';

interface ISlider {
  slides: object[],
  heading: any
}

export const Slider: React.SFC<ISlider> = React.memo(({ slides, heading }) => {
  const [current, setCurrent] = useState(0);
  // const [direction, setDirection] = useState(null);
  // const handlePreviousClick = () => {
  //   const previous = current - 1;
  //   setCurrent((previous < 0) ? slides.length - 1 : previous);
  // }
  // const handleNextClick = () => {
  //   const next = current + 1;
  //   setCurrent((next === slides.length) ? 0 : next);
  // }
  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }
  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / slides.length)}%)`
  }
  return (
    <div className='slider' aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        
        {slides.map((slide: any) => {
          return (
            <Slide
              key={slide.index}
              data={slide}
              current={current}
              onHandleClick={handleSlideClick}
            />
          )
        })}
      </ul>
{/*       
      <div className="slider__controls">
        <SliderControl 
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        
        <SliderControl 
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div> */}
    </div>
  )
})
