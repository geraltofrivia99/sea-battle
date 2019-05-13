import styled from 'styled-components';

export const Cell = styled.td`
  width: 28px;
  height: 28px;
  /* border: 1px solid black; */
  background-color: #fff;
`;

export const Table = styled.table`
  position: relative;
  background-color: #000;
  border-spacing: 1px;
`;

export const Ship = styled.div`
  position: absolute;
  ${({ top, left, right, bottom }) => ({
    top, left, right, bottom
  })}
  border: 1px solid red;
`;