import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { setDragging, setFakeShip, addSingleShipStart } from '../../redux/Field/actions';
import { IState } from '../../redux/Field/reducer';
import { checkLocationShip } from '../../redux/Field/saga';

import { getCloneCoords, getCoord } from '../../utils';

import * as S from './styles';

const arr = [4,3,3,2,2,2,1,1,1,1];

interface Props {
  setDragging: any;
  setFakeShip: any;
  addSingleShipStart: any;
  isDragging: boolean;
  fakeShip: any;
  fieldX: number;
  fieldY: number;
  fieldRight: number;
  fieldBtm: number;
  shipSide: number | null;
  fieldSide: number;
  matrix: any;
}

class ShipsCollectionUnconnected extends PureComponent<Props> {
  SC = createRef<HTMLDivElement>();
  x: number = 0;
  y: number = 0;

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    if(this.SC && this.SC.current) this.SC.current.addEventListener('mousedown', this.onShipClick);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    if(this.SC && this.SC.current) this.SC.current.removeEventListener('mousedown', this.onShipClick);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  // onMouseMoveStart = (e: any) => {
  //   const { isDragging, fakeShip } = this.props;
  //   if (!isDragging && !fakeShip) return;
  //   if (Math.abs(e.clientX - this.x) > 3 || Math.abs(e.clientY - this.y) > 3) {
  //     this.onMouseMove(e);
  //   }
  //   this.x = e.clientX;
  //   this.y = e.clientY;
  // }

  onMouseMove = (e: any) => {
    const { isDragging, setFakeShip, fakeShip, fieldX, fieldY, fieldRight, fieldBtm, matrix } = this.props;
    if (!isDragging && !fakeShip) return;
    const { shiftX, shiftY, decks, kx, ky } = fakeShip;
    const clone = fakeShip.ref;
    if (!clone) return;
    const { bottom, right } = getCoord(clone);
    const left = e.clientX - shiftX;
    const top = e.clientY - shiftY;
    const { x, y } = getCloneCoords(fakeShip, this.props);
    const result = checkLocationShip(x, y, kx, ky, decks, matrix);
    setFakeShip({
      ...fakeShip,
      x,
      y,
      left,
      top,
      bottom,
      right,
      isSuccess: result && left >= fieldY - 14 && right <= fieldRight + 14 && top >= fieldX - 14 && bottom <= fieldBtm + 14,
    });
  }

  onShipClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.which !== 1) return;
    const { setDragging, setFakeShip } = this.props;
    setDragging(true);
    const el = e.target.closest('.ship');
    if (!el) return;
    const coords = getCoord(el);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;
    const fake = {
      left: e.pageX - shiftX,
      top: e.pageY - shiftY,
      decks: el.dataset.decks,
      shiftX: shiftX,
      shiftY: shiftY,
      isSuccess: false,
      kx: 0,
      ky: 1,
      defaultCoord: {
        downX: e.pageX,
        downY: e.pageY,
      },

    }
    setFakeShip(fake);
  }

  onMouseUp = () => {
    const { setDragging, fakeShip, setFakeShip, addSingleShipStart } = this.props;
    setDragging(false);
    if (!fakeShip) return;
    const { isSuccess } = fakeShip;
    if (!isSuccess) {

    } else {
      addSingleShipStart(fakeShip);
    }
    setFakeShip(null);
  }

  render() {
    return (
      <S.ShipCollection ref={this.SC}>
        {arr.map((decks, index) =>
          <S.ShipInCollection
          decks={decks}
          key={`fakedecks${index}-${decks}`}
          className='ship'
          data-decks={decks}
          />
        )}
      </S.ShipCollection>
    )
  }
};

const mapStateToProps = (state: IState) => ({
  fakeShip: state.field.fakeShip,
  isDragging: state.field.isDragging,
  fieldX: state.field.fieldX,
  fieldY: state.field.fieldY,
  fieldRight: state.field.fieldRight,
  fieldBtm: state.field.fieldBtm,
  fieldSide: state.field.fieldSide,
  shipSide: state.field.shipSide,
  matrix: state.field.matrix,
});

const mapDispatchToProps = {
  setDragging,
  setFakeShip,
  addSingleShipStart
}

export const ShipsCollection = connect(mapStateToProps, mapDispatchToProps)(ShipsCollectionUnconnected);
