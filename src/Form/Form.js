import React from 'react';
import './Form.css';
import Select from 'react-select';
import 'tachyons';
const options = [
    { value: 'Annihilation', label: 'Annihilation' },
    { value: 'AWrinkleInTime', label: 'A Wrinkle In Time' },
    { value: 'BlackPanther', label: 'Black Panther' },
    { value: 'Coco', label: 'Coco' },

    { value: 'Ferdinad', label: 'Ferdinad' },
    { value: 'Gods not Dead', label: 'Gods Not Dead' },
    { value: 'Jumanji', label: 'Jumanji' },
    { value: 'LoveSimon', label: 'Love Simon' },

    { value: 'PaulApostlesOfChrist', label: 'Paul Apostles Of Christ' },
    { value: 'PeterRabbit', label: 'Peter Rabbit' },
    { value: 'ReadyPlayerOne', label: 'Ready Player One' },
    { value: 'SherlockGnomes', label: 'Sherlock Gnomes' },
    
    { value: 'TheLastJedi', label: 'The Last Jedi' },
    { value: 'TheDeathOfStalin', label: 'The Death Of Stalin' },
    { value: 'TheShapeOfWater', label: 'The Shape Of Water' },
    { value: 'TombRaider', label: 'Tomb Raider' }

  ];

class Form extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            selectedOption: null,
          };
    }
    selectMovie=(selectedOption)=>{
        this.setState({ selectedOption });
        console.log(selectedOption.value);
        console.log("JJSJJ");
    }
    onSubmit=()=>{
        fetch('https://limitless-forest-87695.herokuapp.com/movie',{
          method:'post',
          headers:{  'Content-Type':'application/json' },
          body:JSON.stringify({
            mname:this.state.selectedOption.value
          })
        }).then(response=>response.json())
        .then(movie=>{
          console.log('GGG')
          }
          )
      }
    render(){
    return(
        <div className="FF br4 ba b--black shadow-5 zz center">
            <p className="f3 center ">This XXX will do YYY</p>
            <div className="pa2">
            <Select options={options} onChange={this.selectMovie} className="bg-light-pink black"/>
            <button className="bg-yellow b--gold link" >Apply</button>
            </div>
        </div>
    );
    }
}

export default Form;