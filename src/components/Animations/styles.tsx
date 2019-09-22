import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled('div')<{show: boolean}>`
    animation: ${({ show }) => show ? fadeIn : fadeOut};
    animation-duration: 1s;
`;