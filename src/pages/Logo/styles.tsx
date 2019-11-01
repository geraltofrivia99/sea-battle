import styled, { css, keyframes } from 'styled-components';
import { spheres } from './constants';
const { main, orbit, circles } = spheres;

const spinX = keyframes`
  0% {
    transform: rotateX(0deg) scale(1);
    box-shadow: 0px 2px 0px 1px red;
  }
  25% {
    transform: rotateX(90deg) scale(0.7);
    box-shadow: 0px 2px 0px 1px red;
  }
  50% {
    transform: rotateX(180deg) scale(0.5);
    box-shadow: 0px -2px 0px 1px red;
  }
  75% {
    transform: rotateX(270deg) scale(0.7);
    box-shadow: 0px -2px 0px 1px red;
  }
  100% {
    transform: rotateX(360deg) scale(1);
    box-shadow: 0px 2px 0px 1px red;
  }
`;

const spinY = keyframes`
  0% {
    transform: rotateY(0deg) scale(1);
    box-shadow: 2px 0px 0px 1px red;
  }
  25% {
    transform: rotateY(90deg) scale(0.7);
    box-shadow: 2px 0px 0px 1px red;
  }
  50% {
    transform: rotateY(180deg) scale(0.5);
    box-shadow: -2px 0px 0px 1px red;
  }
  75% {
    transform: rotateY(270deg) scale(0.7);
    box-shadow: -2px 0px 0px 1px red;
  }
  100% {
    transform: rotateY(360deg) scale(1);
    box-shadow: 0px 2px 0px 1px red;
  }
`;

const spinY2 = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg) scale(1);
    box-shadow: 2px 0px 0px 1px #5bcaff;
  }
  25% {
    transform: rotateY(90deg) rotateX(90deg) scale(0.7);
    box-shadow: 2px 0px 0px 1px red;
  }
  50% {
    transform: rotateY(180deg) rotateX(180deg) scale(0.4);
    box-shadow: -2px 0px 0px 1px red;
  }
  75% {
    transform: rotateY(270deg) rotateX(270deg) scale(0.7);
    box-shadow: -2px 0px 0px 1px red;
  }
  100% {
    transform: rotateY(360deg) rotateX(360deg) scale(1);
    box-shadow: 0px 2px 0px 1px red;
  }
`;

const spinb = keyframes`
  0% {
    transform: rotateY(0deg) scale(1);
  }
  25% {
    transform: rotateY(180deg) scale(0.8);
  }
  50% {
    transform: rotateY(270deg) scale(0.5);
  }
  75% {
    transform: rotateY(360deg) scale(0.8);
  }
  100% {
    transform: rotateY(450deg) scale(1);
  }
`;

const spinc = keyframes`
  0% {
    transform: rotateY(-90deg) scale(1);
  }
  25% {
    transform: rotateY(-180deg) scale(0.8);
  }
  50% {
    transform: rotateY(-270deg) scale(0.5);
  }
  75% {
    transform: rotateY(-360deg) scale(0.8);
  }
  100% {
    transform: rotateY(-450deg) scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background: linear-gradient(1f1f21, #000);
`;

export const Main = styled.div`
  transform-style: preserve-3d;
  transform: rotateX(30deg) rotateY(30deg);
  position: relative;
  width: ${main};
  height: ${main};
`;

const v = css`
  z-index: 10;
  background-color: transparent;
  border: 1px solid rgba(102,51,153, 0.6);
  animation: ${spinb} 6.5s linear infinite forwards;
`;

const o = css`
  background-color: #000;
  border: 1px solid rgba(91, 202, 255, 0.05);
  box-shadow: inset -35px -5px 0px 0px rgba(91, 202, 255 , 0.05);
`;

const h = css`
  z-index: 10;
  background-color: transparent;
  border: 1px solid rgba(102,51,153, 0.6);
  animation: ${spinc} 6.5s linear infinite forwards;
`;

const getStyle = (type: string) => {
  switch(type) {
    case 'v':
      return v;
    case 'o':
      return o;
    case 'h':
      return h;
  }
}

export const Circle = styled('div')<{type: string}>`
  display: block;
  position: absolute;
  top: 25%;
  left: 25%;
  height: ${circles};
  width: ${circles};
  border-radius: 50%;
  z-index: 4;
  ${({ type }) => getStyle(type)};
`;

export const Center = styled.div`
  display: block;
  position: absolute;
  height: 60px;
  width: 60px;
  z-index: 4;
`;

export const Orbit = styled.span`
  display: block;
  position: absolute;
  height: ${orbit};
  width: ${orbit};
  border-radius: 50%;
  z-index: 22;
  animation: ${spinX} 6.5s linear infinite forwards;
`;

export const Orbit2 = styled(Orbit)`
  animation: ${spinY} 6.5s linear infinite forwards;
`;
export const Orbit3 = styled(Orbit)`
  animation: ${spinY2} 6.5s linear infinite forwards;
`;