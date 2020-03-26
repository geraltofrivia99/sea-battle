import React, { useState, useCallback, useRef } from 'react';
import * as S from './styled';

export const Card: React.FC = React.memo(() => {
  const [anim, setAnim] = useState<any>('card');
  const card: any = useRef(null);
  const onFlip = useCallback(() => {
    const { current } = card;
    if(current.classList.contains('card--flipped')) {
      current.classList.add('card--unflip');
      setTimeout(function(){
        current.classList.remove('card--flipped', 'card--unflip');
      }, 500);
    }
    else { 
      current.classList.add("card--flipped");
    }
    },[])
  return (
    <S.CardScene className="card-sceene" onClick={onFlip}>
      <S.Card className="card" side={anim} ref={card}>
        <S.CardBacking className="card-face card-backing">
          <S.Overlay />
          <S.Header></S.Header>
          <S.Bump className="bump"/>
          {/* <S.TopBanner className="top-banner"/>
          <S.BackMain className="back-main">
            <S.PipBoy className="pipboy">
              <S.TwelvePointStar className="twelve-point-star"/>
              <S.Img src="https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235" alt=""/>
            </S.PipBoy>
            <S.VaultTec className="vault-tec">
              <S.Center className="center"/>
              <S.Lines className="lines">
                <S.Line direction="left" className="line line--left">
                  <S.LineInner className="line-inner"/>
                  <S.LineInner className="line-inner"/>
                  <S.LineInner className="line-inner"/>
                </S.Line>
                <S.Line direction="right" className="line line--right">
                  <S.LineInner className="line-inner"/>
                  <S.LineInner className="line-inner"/>
                  <S.LineInner className="line-inner"/>
                </S.Line>
              </S.Lines>
            </S.VaultTec>
          </S.BackMain> */}
        </S.CardBacking>
        <S.CardFront className="card-face card-front">
          <S.Bump className="bump"/>
          {/* <h1>
            <S.Bump className="bump">
              <S.Outer className="outer">
                <S.Inner className="inner">1</S.Inner>
              </S.Outer>
            </S.Bump>
            Slugger
          </h1>
          <S.MainPane className="main-pane">
            <S.Slugger src="https://vignette.wikia.nocookie.net/fallout/images/6/69/Fo76_Slugger.png/revision/latest/scale-to-width-down/353?cb=20181125171021" className="slugger"/>
          </S.MainPane>
          <S.Desc className="desc">
            <p>Your two-handed melee weapons now do +10% damage.</p>
            <S.Special className="special">S</S.Special>
            <S.Level className="level"/>
          </S.Desc> */}
          {/* <div class="grain-overlay"></div> */}
        </S.CardFront>
      </S.Card>
    </S.CardScene>
  )
})