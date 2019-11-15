import React, { useEffect, useRef, useLayoutEffect } from 'react';
import * as S from './styles';
import './styles.css';

export default React.memo(() => {
  let ufo: any = useRef(null);
  let eyes: any = useRef(null);
  let eyesLid: any = useRef(null);
  let eyeCoords: any = {};
  useEffect(() => {
    const { left, right, top, bottom } = eyesLid.current.getBoundingClientRect();
    eyeCoords.left = left;
    eyeCoords.right = right;
    eyeCoords.top = top;
    eyeCoords.bottom = bottom;
  }, [])

  const onMouseMove = (e: any) => {
    let mouseX = (eyes.current.getBoundingClientRect().left);
    let mouseY = (eyes.current.getBoundingClientRect().top);
    // console.log(`page X: ${e.pageX}, mouseX: ${- mouseX},  pageY: ${e.pageY}, mouseY: ${mouseY}`);
    if (e.pageX >= eyeCoords.left && e.pageX <= eyeCoords.right && e.pageY >= eyeCoords.top && e.pageY <= eyeCoords.bottom) {
        
    }
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    eyes.current.style.transform = `rotate(${rotationDegrees}deg)`;
  }
  return (
    <S.Wrapper onMouseMove={onMouseMove} ref={ufo}>
      <div className="ufo">
      <div className="monster" style={{color: "#7cb342"}}>
        <div className="body">
          <div className="ear"></div>
          <div className="ear"></div>
          <div className="vampi-mouth">
            <div className="vampi-tooth"></div>
          </div>
        </div>
        <div className="eye-lid" ref={eyesLid}>
          <div className="eyes"  ref={eyes}>
            <div className="eye"></div>
          </div>
        </div>
      </div>
    </div>
      {/* <S.Main>
        <S.Circle type='h' />
        <S.Circle type='v' />
        <S.Center>
          <S.Orbit />
          <S.Orbit2 />
          <S.Orbit3 />
        </S.Center>
      </S.Main> */}
    </S.Wrapper>
  )
})