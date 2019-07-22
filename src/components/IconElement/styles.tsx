import styled from 'styled-components';

export const IconWrapper = styled('div')<{left: number, top: number}>`
  width: 33px;
  height: 33px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: blue;
  border-radius: 5px;
`;

export const Cross = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: red;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Shaded = styled.span`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
  opacity: .8;
`;