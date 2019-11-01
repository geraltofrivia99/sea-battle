import React from 'react';

interface ISlideControl {
  type: string,
  title: string,
  handleClick: () => void;
}

export const SliderControl: React.SFC<ISlideControl> = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}