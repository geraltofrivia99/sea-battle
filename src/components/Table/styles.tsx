import styled from 'styled-components';

export const Wrapper = styled('div')<{isVisible: boolean}>`
  position: relative;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'}
`;

export const Cell = styled.td`
  width: 30px;
  height: 30px;
  /* border: 1px solid black; */
  background-color: #fff;
`;

export const Table = styled.table`
  position: relative;
  background-color: #000;
  border-spacing: 1px;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 33px);
  grid-template-rows: repeat(10, 33px);
  /* border: 1px solid black; */
  /* box-sizing: border-box; */
  position: relative;
`;

export const HorizontalRow = styled('div')<{top: number}>`
  width: 330px;
  height: 1px;
  background-color: #000;
  opacity: .5;
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ top }) => `${top}px`};
`;

export const VerticalRow = styled('div')<{left: number}>`
  width: 1px;
  height: 330px;
  background-color: #000;
  opacity: .5;
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: 0;
  bottom: 0;
`;