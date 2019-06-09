import styled from 'styled-components';

interface IShipInColl {
  decks: number,  isDragging: boolean, isVisible: boolean
}

export const ShipCollection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

export const ShipInCollection = styled('div')<IShipInColl>`
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 5px;
  height: 35px;
  width: ${({ decks }) => `${33 * decks}px`};
  margin: 10px;
  opacity: ${({ isDragging }) => isDragging ? .5 : 1};
  visibility: ${({ isVisible }) => !isVisible ? 'hidden' : 'visible'};
`;
