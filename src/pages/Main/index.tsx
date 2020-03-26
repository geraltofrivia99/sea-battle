import React from 'react';
import { Slider } from '../../components/Slider';

import { seaBattle, sB, cells, github } from '../../images';
import * as S from './styles';


const slideData = [
  {
    index: 0,
    headline: 'Sea Battle',
    button: 'Play',
    src: sB
  },
  {
    index: 1,
    headline: 'Conway GOL',
    button: 'Play',
    src: cells
  },
  // {
  //   index: 2,
  //   headline: 'For Your Current Mood',
  //   button: 'Listen',
  //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  // },
  // {
  //   index: 3,
  //   headline: 'Focus On The Writing',
  //   button: 'Get Focused',
  //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  // }
]

export default () => {
  return (
    <S.Wrapper>
      <S.FullImageWrapper>
        <S.FullImage src={seaBattle} />
      </S.FullImageWrapper>
      <S.ContentWrapepr>
        <S.GH  href="https://github.com/geraltofrivia99/sea-battle">
          <img src={github} alt="github"/>
        </S.GH>
        Mini Games Library
      </S.ContentWrapepr>
      <S.SliderWrapper>
        <Slider heading="Example Slider" slides={slideData}/>
      </S.SliderWrapper>
    </S.Wrapper>
  )
}