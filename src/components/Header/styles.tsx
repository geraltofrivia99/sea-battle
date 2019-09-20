import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 3em;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;