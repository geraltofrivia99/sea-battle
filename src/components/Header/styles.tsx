import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  width: 5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 3em;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;