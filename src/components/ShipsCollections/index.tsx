import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { setDragging, setFakeShip, addSingleShipStart, setDraggableShipCollection } from '../../redux/Field/actions';
import { IState, IdraggbleShip, IDragableCollections } from '../../types';
import { checkLocationShip } from '../../utils';

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
  shipCollection: IDragableCollections;
  setDraggableShipCollection: any;
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
    const { setDragging, setFakeShip, setDraggableShipCollection } = this.props;
    setDragging(true);
    const el = e.target.closest('.ship');
    if (!el) return;
    const coords = getCoord(el);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;
    const { dataset: { decks, shipname } } = el;
    const defaultShip = {
      isVisible: false,
      shipname,
      decks,
      isDragging: true
    }
    const fake = {
      left: e.pageX - shiftX,
      top: e.pageY - shiftY,
      decks,
      shiftX: shiftX,
      shiftY: shiftY,
      isSuccess: false,
      kx: 0,
      ky: 1,
      defaultElement: {
        downX: e.pageX,
        downY: e.pageY,
        ...defaultShip
      },

    }
    setDraggableShipCollection({
      [shipname]: {
        ...defaultShip
      }
    })
    setFakeShip(fake);
  }

  onMouseUp = () => {
    const { setDragging, fakeShip, setFakeShip, addSingleShipStart, setDraggableShipCollection } = this.props;
    if (!fakeShip || !fakeShip.defaultElement) return;
    setDragging(false);
    const { isSuccess, defaultElement } = fakeShip;
    const { shipname, decks } = defaultElement;
    if (!isSuccess) {
      setDraggableShipCollection({
        [shipname]: {
          isVisible: true,
          shipname,
          decks,
          isDragging: false
        }
      })
    } else {
      addSingleShipStart(fakeShip);
      setDraggableShipCollection({
        [shipname]: {
          isVisible: false,
          shipname,
          decks,
          isDragging: false
        }
      })
    }
    setFakeShip(null);
  }

  render() {
    const { shipCollection } = this.props;
    return (
      <S.ShipCollection ref={this.SC}>
        {Object.values(shipCollection).map((ship: IdraggbleShip, index: number) => {
          const { decks, shipname, isVisible, isDragging } = ship;
          return (
            <S.ShipInCollection
            decks={decks}
            key={`${ship.shipname}${index}`}
            className='ship'
            data-decks={decks}
            data-shipname={shipname}
            isVisible={isVisible}
            isDragging={isDragging}
            />
          )
        })}
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
  shipCollection: state.field.draggableShipCollection
});

const mapDispatchToProps = {
  setDragging,
  setFakeShip,
  addSingleShipStart,
  setDraggableShipCollection
}

export const ShipsCollection = connect(mapStateToProps, mapDispatchToProps)(ShipsCollectionUnconnected);
