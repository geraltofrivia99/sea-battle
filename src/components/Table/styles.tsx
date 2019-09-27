import styled from 'styled-components';

export const Container = styled('div')<{isVisible: boolean}>`
  display: flex;
  flex-direction: column;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
`;

export const Wrapper = styled.div`
  position: relative;
  border-width: 5px 3px 3px 5px;
  border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
  border: solid #596164;
  overflow: hidden;
  z-index: 10;
  &::before {
    content: "";
    border-radius: inherit;
		position: absolute;
		top: -3px;
		bottom: -3px;
		left: -3px;
		right: -3px;
		box-shadow: inset 0 0 20px rgba(0,0,0,.95);
    z-index: 100;
  }
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
  /* z-index: 1; */
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