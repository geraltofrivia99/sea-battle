import styled from 'styled-components';

export const Wrapper = styled('div')<{top: string, left: string,}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Ship = styled('div')<{decks: number, isVertical: boolean, isVisible: boolean}>`
  position: relative;
  /* border: 1px solid red; */
  background: linear-gradient(to right, #868f96 , #596164);
  box-sizing: border-box;
  /* border-width: 3px 3px 5px 5px; */
  border-radius:10% 95% 20% 95%/95% 4% 92% 5%;
  height: 35px;
  width: ${({ decks }) => `${33 * decks}px`};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: ${({ isVertical }) => isVertical ? 'rotate(90deg)' : ''};
  transform-origin: ${({ isVertical }) => isVertical ? '17.5px 17.5px' : ''};
`;

export const Deck = styled.div`
  background-color: #fff;
  padding: 3px 3px 5px 5px;
  position: absolute;
  top: 3px;
  right: 3px;
  bottom: 5px;
  left: 5px;
  border-radius: 1px 3px 1px 3px;
  opacity: .9;
  /* box-shadow: inset 0 0 2px rgba(0,0,0,.6);
		-moz-box-shadow: inset 0 0 2px rgba(0,0,0,.6);
		-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); */
`;