import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  font-family: Mansalva, cursive;
  font-size: 1em;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 1em 3em; */
  padding: 0.2em .5em;
  border-radius: 10px;
  cursor: pointer;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 89% 4% 89% 5%/34% 95% 34% 95%;
  box-shadow: -1px 2px 3px;
  transform: rotate(2deg);
  &:hover {
    color: blue;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;