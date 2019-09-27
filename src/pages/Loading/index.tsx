import React from 'react';
import './styles.css';

const LoadScreen = () => (
  <div className="wrapper">
    <input className="retrigger" type="radio" name="rerun" id="retrigger--1" />
    <input className="retrigger" type="radio" name="rerun" id="retrigger--2" checked={true} />
    <div className="bg"></div>
    <div className="buttons">
      <label className="button button--1" htmlFor="retrigger--1">PLAY AGAIN</label>
      <label className="button button--2" htmlFor="retrigger--2">PLAY AGAIN</label>
    </div>
    <div className="pane">
        <div className="rotate">
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
            <div className="logo">MARVEL</div>
        </div>
    </div>
  </div>
)

export default LoadScreen;