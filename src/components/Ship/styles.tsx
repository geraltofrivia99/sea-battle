import styled from 'styled-components';

export const Ship = styled('div')<{top: string, left: string, decks: number, isVertical: boolean, isVisible: boolean}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: ${({ decks }) => `${33 * decks}px`};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: ${({ isVertical }) => isVertical ? 'rotate(90deg)' : ''};
  transform-origin: ${({ isVertical }) => isVertical ? '17.5px 17.5px' : ''};
`;