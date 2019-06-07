import styled from 'styled-components';

export const ShipCollection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

export const ShipInCollection = styled('div')<{decks: number}>`
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: ${({ decks }) => `${33 * decks}px`};
  margin: 10px;
`;
