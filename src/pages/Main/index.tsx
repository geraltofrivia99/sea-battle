import React from 'react';
import { Slider } from '../../components/Slider';

import { seaBattle } from '../../images';
import { Card } from '../../components/Cards';
import * as S from './styles';


const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]

export default () => {
  return (
    <S.Wrapper>
      <S.FullImageWrapper>
        <S.FullImage src={seaBattle} />
      </S.FullImageWrapper>
      <S.ContentWrapepr>
        <Card />
      </S.ContentWrapepr>
      <S.SliderWrapper>
        <Slider heading="Example Slider" slides={slideData}/>
      </S.SliderWrapper>
    </S.Wrapper>
  )
}