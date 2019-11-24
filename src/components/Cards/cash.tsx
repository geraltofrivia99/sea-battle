import styled, { keyframes, css } from 'styled-components';
// https://codepen.io/jonnowitts/pen/YdYjmd
const cardAppear = keyframes`
  0% {
    transform: rotate3d(0,0,1,15deg) translate3d(0,-100vh,0);
  }
  30% {
    transform: rotate3d(0,0,0,0deg) translate3d(0,0,0);
  }
  65% {
    transform: rotate3d(0,0,0,0deg) translate3d(0,0,0) scale3d(1,1,1);
  }
  80% {
    transform: rotate3d(0,0,1,-5deg) scale3d(1.05,1.05,1);
  }
`;

const cardFlip = keyframes`
  0% {
    transform: rotateZ(0deg) rotateY(180deg);
  } 
  50% {
    transform: rotateZ(-10deg) rotateY(90deg);
  }
  100% {
    transform: rotateZ(0deg) rotateY(0deg);
  }
`;

const cardUnFlip = keyframes`
  0% {
    transform: rotateZ(0deg) rotateY(0deg);
  } 
  50% {
    transform: rotateZ(-10deg) rotateY(90deg);
  }
  100% {
    transform: rotateZ(0deg) rotateY(180deg);
  }
`;

export const CardScene = styled.div`
  width: 27rem;
  height: 35rem;
  perspective: 600px;
  animation: ${cardAppear} 1.4s forwards;
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  &.card--flipped {
    animation: ${cardFlip} .275s forwards linear;
  }
  &.card--unflip {
    animation: ${cardUnFlip} .275s forwards linear;
  }
`;

export const Bump = styled.div`
  display: block;
  position: absolute;
  top: -2rem;

  height: 8.4rem;
  width: 8.4rem;
  border: 5px solid var(--color-bone);
  border-radius: .8rem;

  &:before, &:after {
    content: '';
    position: absolute;
  }

  &:before {
    z-index: 2;
    background-color: var(--color-bone);
  }

  &:after {
    background-color: var(--color-bone);
  }
`;

export const TopBanner = styled.div``;
export const BackMain = styled.div``;
export const PipBoy = styled.div``;
export const TwelvePointStar = styled.div``;
export const Img = styled.img``;
const CardFace = styled.div`
  position: absolute;
  backface-visibility: hidden;
  
  box-shadow: 0 0 3px 2px #4e4e4e;
  width: 27rem;
  height: 35rem;
  border-radius: 9px;
  border: .5rem solid var(--color-bone);
`;

export const CardBacking = styled(CardFace)`
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  ${TopBanner} {
    position: relative;
    z-index: 1;
    background-color: var(--color-backing-top);
    width: 100%;
    height: 5.85rem;
    border-radius: 3px 3px 0 0;
  }
  ${BackMain} {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background: var(--color-backing-light1);
    background: linear-gradient(135deg, var(--color-backing-light1) 0% 25%,var(--color-backing-light2) 25% 50%,var(--color-backing-light3) 50% 75%,var(--color-backing-light4) 75%);
    z-index: 1;
    border-radius: 0 0 3px 3px;
  }
  ${PipBoy} {
    width: 50%;
    margin: 3rem auto 0;
    position: relative;
    opacity: .7;
    ${TwelvePointStar}, ${TwelvePointStar}:before, ${TwelvePointStar}:after {
      height: 17rem;
      width: 17rem;
      background-color: #9bbfde;
      position: absolute;
    }
    ${TwelvePointStar} {
      left: 1rem;
      top: 1rem;
      transform: rotateZ(20deg);
      &:before, &:after {
        content: '';
      }
      &:before {
        transform: rotate(30deg);
      }
      &:after {
        transform: rotate(-30deg);
      }
    }
    ${Img} {
      height: auto;
      width: 100%;
      filter: grayscale(50%);
      overflow: hidden;
    }
  }
  ${Bump} {
    right: -2rem;
    &:before {
      left: -2rem;
      top: 1rem;
      height: 0.3rem;
      width: 1.5rem;
      background-color: var(--color-bone);
    }
    
    &:after {
      background-color: var(--color-backing-top);
      right: 0;
      height: 100%;
      width: 100%;
      border-radius: .3rem;
    }
  }
`;

export const Slugger = styled.img`
  margin-top: -4rem;
  clip-path: polygon(24% 33%, 50% 14.5%, 54% 15%, 62% 17%, 70% 14%, 73% 18%, 72.5% 20%, 62% 24%, 64% 36%, 60% 40%, 61% 45%, 70% 60%, 69.5% 64.5%, 63% 65%, 63% 61%, 51% 54%, 44% 65%, 36% 62%, 40% 42%, 31% 36%, 25.5% 37%);
`;
export const MainPane = styled.div`
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    position:absolute;
    top: -42rem;
    left: -32rem;
    height: 69.5rem;
    width: 100rem;

    background: repeating-conic-gradient(
      from 90deg, 
      var(--color-main-lighten2) 0 25deg, var(--color-bone) 0 35deg, var(--color-main) 0 40deg, var(--color-bone) 0 47deg, var(--color-main-lighten) 0 50deg, var(--color-bone) 0 55deg,
      var(--color-main) 0 127deg, 
      var(--color-bone) 0 132deg, var(--color-main-lighten) 0 135deg, var(--color-bone) 0 140deg, var(--color-main) 0 145deg, var(--color-bone) 0 155deg, var(--color-main-lighten2) 0 360deg
    );
    
    border-radius: 50%;
  }
`;
export const Desc = styled.div``;
export const Outer = styled.b``;
export const Inner = styled.b``;
export const Special = styled.div``;
export const Level = styled.div``;
export const Star = styled.div``;

export const CardFront = styled(CardFace)`
  grid-template-rows: 4.4rem 1fr auto;
  > h1,
  > ${MainPane},
  > ${Desc} {
    grid-column-start: 0;
    grid-column-end: 1;
    grid-column-gap: 0;
  }
  
  h1, ${MainPane} {
    grid-row-start: 1;
  }
  
  ${MainPane} {
    grid-row-end: 4;
    z-index: 1;
    border-radius: 0 0 25% 25%;
  }
  position: relative;
  display: grid;
  grid-template-rows: 3;
  background-color: var(--color-bone);

  h1 {
    position: relative;
    color: var(--color-white);
    font-size: 3.6rem;
    text-align: center;
    letter-spacing: 1px;
    line-height: 135%;
    
    background-color: var(--color-main-dark);
    
    width: 100%;
    padding-left: 4rem;
    border-top-right-radius: 1rem;
    
    &:before, &:after {
      content: '';
      position: absolute;
    }
    
    &:after {
      left: 5.1rem;
      background-color: var(--color-main-dark);
      height: 100%;
      width: 2rem;
    }
    ${Bump} {
      color: #4e4943;
      font-size: 5.5rem;
      line-height: 170%;
      vertical-align: middle;
    }
    ${Outer} {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      padding: .3rem;
      background-color: var(--color-main-dark);

      border-radius: .3rem;
      z-index:2;
    }
    ${Inner} {
      display: block;
      background-color: var(--color-white);
      height: 100%;
      width: 100%;
      border-radius: 3px;
    }
  }
  ${Desc} {
    grid-row-start: 3;
    z-index: 2;
    align-self: end;
    width: 100%;
    background: #d3c297;
    background: linear-gradient(to bottom, #b8cbad, #ede8d4 15% 65%, #a5bc9e 100%);    
    text-align: center;
    min-height: 32%;
    max-height: 80%;
    padding: 2rem;
    border: 2px solid var(--color-off-black);
    border-radius: 1rem;
    
    p {
      font-size: 2rem;
      line-height: 125%;
      color: var(--color-off-black);
    }
  }
  ${Special} {
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    color: var(--color-off-black);
    font-size: 4.2rem;
    text-shadow: 0 0 2px white, 0 0 2px white;
    line-height: 130%;

    background-color: var(--color-main);
    height: 4.5rem;
    padding: .5rem;
    border: .2rem solid white;
    border-radius: .2rem;
    vertical-align: top;
    transform: skew(-7deg, -10deg);
    overflow:hidden;
  }
  ${Level} {
    position: absolute;
    bottom: 7px;
    right: -3px;
    height: 3rem;
    font-size: 2.6rem;
    color: var(--color-off-black);
    background-color: var(--color-main-dark);
    padding: 2px 7px 2px 0;
    border-top: 2px solid var(--color-off-black);
    border-bottom: 2px solid var(--color-off-black);
    border-left: 2px solid var(--color-off-black);
    border-right: 1px solid var(--color-grey);
    border-radius: 3px;
    &:before, &:after {
      content:'';
      position: absolute;
    }
    &:before {
      top: -8px;
      right: -1px;
      border-width: 0 3px 7px 0;
      border-color: transparent transparent darken(#84a782, 20%) transparent;
      border-style: solid;
      display: block;
    }
    
    &:after {
      right: -3px;
    }
    ${Star}, ${Star}:before, ${Star}:after {
      border-color: transparent var(--color-off-black) transparent transparent;
        border-width: 1rem .5rem 1rem 0;
        border-style: solid;
    }
    ${Star}.current-level, ${Star}.current-level:before, ${Star}.current-level:after {
      border-right-color: var(--color-white);
    }
    ${Star} {
      display: inline-block;
      width: 1.5rem;
      transform: rotate3d(0,0,1,270deg);
      margin-top: .5rem;
      margin-left: .9rem;
      &:before, &:after {
        content: '';
        position: absolute;
        left: .9rem;
      }

      &:before {
        transform: rotate3d(0,0,1,68deg);
        top: -.9rem;
      }

      &:after {
        transform: rotate3d(0,0,1,-68deg);
        top: -1.1rem;
      }
    }
  }
  ${Bump} {
    left: -2rem;
    box-shadow: 0 0 4px 2px #4e4e4e;
    &:before {
      left: 5rem;
      top: 1rem;
      height: .45rem;
      width: 4rem;
    }
    &:after {
      top: 1rem;
      left: 1rem;
      height: 100%;
      width: 6.5rem;
    }
  }
`;

export const Center = styled.div`
   background-color: var(--color-bone);
`;
export const Lines = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 1fr 40%;
  grid-template-rows: 1fr;
`;
export const LineInner = styled.div``;
type Line = {
  direction: 'left' | 'right'
}

function getLineStyle(direction: 'left' | 'right') {
  if (direction === 'left') {
    return css`
      align-items: flex-end;
      ${LineInner}:before {
        left: -5%;
        border-radius: 50% 0 0 50%;
      }
      ${LineInner}:nth-child(2) {
          margin-right: .5rem;
      }
    `;
  }
  return css`
    grid-column-start: 3;
    ${LineInner}:before {
      right: -5%;
      border-radius: 0 50% 50% 0;
    }
    ${LineInner}:nth-child(2) {
      margin-left: .5rem;
    }
  `;
}

export const Line = styled('div')<Line>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-bone);
  ${LineInner} {
    background-color: var(--color-bone);          
    height: 10px;
    width: 60%;
    &:nth-child(2) {
      width: 75%;
      margin-top: .6rem;
      margin-bottom: .6rem;
    }
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 10%;
      background-color: var(--color-bone);
    }
  }
  ${({ direction }) => getLineStyle(direction)}
`;

export const VaultTec = styled.div`
  position: relative;
  justify-self: end;
  height: 8rem;
  width: 80%;
  margin: 0 auto 2rem;
  ${Center} {
    border: 1rem solid var(--color-bone);
    height: 8rem;
    width: 8rem;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
      content: '';
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
    }
  }
`;






