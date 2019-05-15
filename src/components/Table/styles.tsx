import styled from 'styled-components';

export const Cell = styled.td`
  width: 33px;
  height: 33px;
  /* border: 1px solid black; */
  background-color: #fff;
`;

export const Table = styled.table`
  position: relative;
  background-color: #000;
  border-spacing: 1px;
`;

export const Ship = styled('div')<{top: string, left: string, decks: number}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border: 1px solid red;
  height: 33px;
  width: ${({ decks }) => `${33 * decks}px`}
  
`;