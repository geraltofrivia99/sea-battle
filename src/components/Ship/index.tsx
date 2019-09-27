import React, { useCallback } from 'react';
import * as S from './styles';

export const Ship = React.memo(({ ship, onContextMenu }: any) => {
  const onRightClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onContextMenu) onContextMenu(ship);
  }, [ship]);
  return (
   <S.Wrapper
    left={`${ship.y0 * 33}px`}
    top={`${ship.x0 * 33}px`}
   >
      <S.Ship
      // onMouseDown={onShipDown}
      className='ship'
      decks={ship.decks}
      isVertical={!!ship.kx}
      data-decks={ship.decks}
      data-shipname={ship.shipname}
      onContextMenu={onRightClick}
      isVisible={ship.isVisible}
    >
      <S.Deck />
    </S.Ship>
   </S.Wrapper>
  )
});