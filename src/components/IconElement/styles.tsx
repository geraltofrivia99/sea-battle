import styled, { keyframes } from 'styled-components';
import { xMark } from '../../images';

const borderAnim = keyframes `
  0% {
    border-width: 1px;
  }
  100% {
    box-shadow: none;
    border-width: 4px;
  }
`

export const IconWrapper = styled('div')<{left: number, top: number, isShaded: boolean}>`
  width: 33px;
  height: 33px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  box-shadow: ${({ isShaded }) => isShaded ? 'inset 0 0 5px rgba(0,0,0,.95)' : ''};
`;

export const DotWrapper = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: inset 0 0 5px;
    border-radius: 100%;
  }
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px;
  transition: border-width .3s, box-shadow .3s;
  animation: ${borderAnim} .2s linear forwards;
  background-color: black;
`;

export const Cross = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const XMark = styled.img`
  width: 90%;
  height: 82%;
  margin: 3px;
`;

export const Shaded = styled.span`
  width: 29px;
  height: 28px;
  background: 
  /* On "top" */
  repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 2px,
    #ccc 2px,
    #ccc 3px
  );
  opacity: .8;
`;