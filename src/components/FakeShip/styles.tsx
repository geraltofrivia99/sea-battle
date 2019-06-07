import styled from 'styled-components';

export const FakeShip = styled('div')<{top: string, left: string, decks: number, isSuccess: boolean}>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  border: ${({ isSuccess }) => isSuccess ? '1px solid green' : '1px solid red'};
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: ${({ decks }) => `${33 * decks}px`};
  opacity: 0.8;
  z-index: 1000;
`;
