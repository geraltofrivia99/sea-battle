import styled from 'styled-components';
import { github } from '../../images';


export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: #303f9f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SliderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(2,0,36);
  background: linear-gradient(180deg,rgba(44, 65, 85,0) 0%,rgba(44, 65, 85,0.7) 33%,rgba(44, 65, 85,1) 100%);
  z-index: 10;
`;

export const ContentWrapepr = styled.div`
  --title-font-size: 64px;
  --title-line-height: 1.25;
  position: relative;
  flex: 2;
<<<<<<< HEAD
  width: 100%;
  color: white;
  font-size: 50px;
  z-index: 10;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: var(--title-font-size);
  font-weight: 900;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
  text-indent: 1rem;
  white-space: nowrap;
  line-height: var(--title-line-height);
=======
  background-color: #1a1616;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
>>>>>>> 2a5c735f364a6ecacd4c4356a621056ea525974b
`;

export const FullImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const GH = styled.a`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 1rem;
  & img {
    width: 40px;
    height: 40px;
  }
`;