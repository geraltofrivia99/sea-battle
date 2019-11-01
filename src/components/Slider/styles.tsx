import styled from 'styled-components';

const colorPrimary: string = '#6B7A8F';
const colorSecondary: string = '#101118';
const colorAccent: string = '#1D1F2F';
const colorFocus: string = '#6D64F7';
const baseDuration: string = '600ms';
const baseEase: string = 'cubic-bezier(0.25, 0.46, 0.45, 0.84)';
const sizeBtn = '3rem';
const slideMargin = '4vmin';

export const Wrapper = styled.div``;

export const Visuallyhidden = styled.h3`
  clip: rect(1px, 1px, 1px, 1px);  
  height: 1px; 
  overflow: hidden;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
`;

export const Icons = styled.svg`
  fill: ${colorPrimary};
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${colorPrimary};
  border: none;
  border-radius: 0.125rem;
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2.5rem 1.125rem;
  
  &:focus {
    outline-color: ${colorFocus};
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 3px;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 1rem);
  width: 100%;
  & ${Button} {
    align-items: center;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 100%;
    display: flex;
    height: ${sizeBtn};
    padding: 0;
    width: ${sizeBtn};
    
    &:focus {
      border-color: ${colorFocus};
      outline: none;
    }
  }
`;

export const Slider = styled('div')<{ size: string }>`
  height: ${({ size }) => size};
  margin: 0 auto;
  position: relative;
  width: ${({ size }) => size};
`;

export const SliderWrapper = styled.div`
  display: flex;
  margin: 0 calc(4vmin * -1);
  position: absolute;
  transition: transform ${baseDuration} cubic-bezier(0.25, 1, 0.35, 1);
`;

export const Slide = styled.div