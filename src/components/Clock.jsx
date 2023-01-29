import React, { Component, useState, useEffect } from 'react';
import clockHand from '../assets/img/minute-hand-mitchell-joh- (2).svg';
import './Clock.scss';

const places = ['Home', 'In transit', 'Work', 'fgjtf'];
// const family = [{name: 'Kate', location: 'Work'}, {name: 'Danil', location: 'In transit'}];

const placesParameters = places.map((place, id, placesArr) => {
  return {
    name: place,
    deg: 360 / placesArr.length * id
  }
})


const Clock = () => {
  const [family, setFamily] = useState([{name: 'Kate', location: 'Home'}, {name: 'Danil', location: 'Work'}]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       'https://hn.algolia.com/api/v1/search?query=redux',
  //     );

  //     setFamily(result.data);
  //   };

  //   fetchData();
  // }, [])

  useEffect(() => {
    placesParameters.map((place, i) => {
      let divider = document.querySelector('#divider' + i);
      let placeName = document.querySelector('#place' + i);
      divider.style.transform = `rotateZ(${place.deg}deg) translate(0px, 97px)`;
      placeName.style.transform = `rotateZ(${places.length % 2 ? place.deg : place.deg + 360 / places.length / 2}deg) translate(0px, -20px)`;
    });

    family.map((person, i) => {
      let placeid = places.findIndex((place, id) => place === person.location);

      let personArrow = document.querySelector('#arrow' + i);
      let personName = document.querySelector('#person' + i);
      personArrow.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2}deg) translate(0px, -72px)`;
      //personArrow.style.transition = `all 2s ease-in-out;`;
      personName.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2 + 90}deg) translate(-70px, 0px)`;
    })
  }, [])

  useEffect(() => {
    family.map((person, i) => {
      let placeid = places.findIndex((place, id) => place === person.location);

      let personArrow = document.querySelector('#arrow' + i);
      let personName = document.querySelector('#person' + i);
      personArrow.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2}deg) translate(0px, -72px)`;
      personArrow.style.transition = `all 2s ease-in-out;`;
      personName.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2 + 90}deg) translate(-70px, 0px)`;
      personName.style.transition = `all 2s ease-in-out;`;
    })
  }, [family])

  const handleClick = () => {
    setFamily([{name: 'Kate', location: 'Home'}, {name: 'Danil', location: 'In transit'}])
  }

  console.log(family);


  return (
    <div>
        <div className="clock">
            {family.map((person, id) => 
              <div key={id} className='arrow'>
                <img id={`arrow${id}`} className='arrowImg' src={clockHand} alt='clockhand' />
                <div id={`person${id}`} className='arrowName'>{person.name}</div>
              </div>
            )}
            
            
            {places.map((place, i) => 
              <div key={i} className='place'>
                <div className='start' id={`divider${i}`}></div>
                <div className='placeName' id={`place${i}`}>{place}</div>
              </div>
            )}

        </div>

        <button onClick={handleClick}> Change</button>
      </div>
  )
}

// export class Clock1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date(),
//       family: [{name: 'Kate', location: 'Wo'}, {name: 'Danil', location: 'Work'}]
//     }
//   }

  // timeMath() {
  //   this.setState({
  //     time: new Date()
  //   })

  //   const deg = 6;
  //   const hourLine = document.querySelector('#hr');
  //   const minuteLine = document.querySelector('#mn');
  //   const secondLine = document.querySelector('#sc');

  //   var hour = this.state.time.getHours() * 30;
  //   //console.log(hour);
  //   var minute = this.state.time.getMinutes() * deg;
  //   var second = this.state.time.getSeconds() * deg;

  //   hourLine.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`;
  //   minuteLine.style.transform = `rotateZ(${minute}deg)`;
  //   secondLine.style.transform = `rotateZ(${second}deg)`;
  // }

  // componentWillMount() {
  //   setInterval(() => this.timeMath(), 1000);
  // }

  // componentDidMount() {
  //   //setInterval(() => this.timeMath(), 1000);
  //   placesParameters.map((place, i) => {
  //     let divider = document.querySelector('#divider' + i);
  //     let placeName = document.querySelector('#place' + i);
  //     divider.style.transform = `rotateZ(${place.deg}deg) translate(0px, 97px)`;
  //     placeName.style.transform = `rotateZ(${places.length % 2 ? place.deg : place.deg + 360 / places.length / 2}deg) translate(0px, -20px)`;
  //   });

  //   family.map((person, i) => {
  //     let placeid = places.findIndex((place, id) => place === person.location);

  //     let personArrow = document.querySelector('#arrow' + i);
  //     let personName = document.querySelector('#person' + i);
  //     personArrow.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2}deg) translate(0px, -72px)`;
  //     personArrow.style.transition = `all 2s ease-in-out;`;
  //     personName.style.transform = `rotateZ(${places.length % 2 ? placesParameters[placeid].deg : placesParameters[placeid].deg + 360 / places.length / 2 + 90}deg) translate(-70px, 0px)`;
  //   })
  // }

  // componentWillUnmount() {
  //   clearInterval(() => this.timeMath(), 1000);
  // }

//   render() {
    
//     return (
//       <div>
//         <div className="clock">
//             {family.map((person, id) => 
//               <div key={id} className='arrow'>
//                 <img id={`arrow${id}`} className='arrowImg' src={clockHand} alt='clockhand' />
//                 <div id={`person${id}`} className='arrowName'>{person.name}</div>
//               </div>
//             )}
            
            
//             {places.map((place, i) => 
//               <div key={i} className='place'>
//                 <div className='start' id={`divider${i}`}></div>
//                 <div className='placeName' id={`place${i}`}>{place}</div>
//               </div>
//             )}

//         </div>


//       </div>
//     )
//   }
// }

export default Clock