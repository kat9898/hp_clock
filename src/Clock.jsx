import React, { Component } from 'react';
import clockImg from './clock.png';
import './Clock.scss';

const places = ['Home', 'In transit', 'Home'];
const placesParameters = places.map((place, id, placesArr) => {
  return {
    name: place,
    deg: 360 / placesArr.length * id
  }
})

export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
  }

  timeMath() {
    this.setState({
      time: new Date()
    })

    const deg = 6;
    const hourLine = document.querySelector('#hr');
    const minuteLine = document.querySelector('#mn');
    const secondLine = document.querySelector('#sc');

    var hour = this.state.time.getHours() * 30;
    //console.log(hour);
    var minute = this.state.time.getMinutes() * deg;
    var second = this.state.time.getSeconds() * deg;

    hourLine.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`;
    minuteLine.style.transform = `rotateZ(${minute}deg)`;
    secondLine.style.transform = `rotateZ(${second}deg)`;
  }

  // componentWillMount() {
  //   setInterval(() => this.timeMath(), 1000);
  // }

  componentDidMount() {
    //setInterval(() => this.timeMath(), 1000);
    placesParameters.map((place, i) => {
      let divider = document.querySelector('#divider' + i);
      let placeName = document.querySelector('#place' + i);
      divider.style.transform = `rotateZ(${place.deg}deg) translate(0px, 97px)`;
      placeName.style.transform = `rotateZ(${places.length % 2 ? place.deg : place.deg + 360 / places.length / 2}deg) `;
      console.log(divider);

    })
  }

  componentWillUnmount() {
    clearInterval(() => this.timeMath(), 1000);
  }

  render() {
    
    return (
      <div>
        <div className="clock">
            <div className="hour">
                <div className="hr" id="hr"></div>
            </div>

            <div className="min">
                <div className="mn" id="mn"></div>
            </div>

            <div className="sec">
                <div className="sc" id="sc"></div>
            </div>
            {places.map((place, i) => 
              <div key={i} className='place'>
                <div className='start' id={`divider${i}`}></div>
                <div className='placeName' id={`place${i}`}>{place}</div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Clock