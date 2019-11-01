import styled from 'styled-components';

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
`;

export const ContentWrapepr = styled.div`
  flex: 2;
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