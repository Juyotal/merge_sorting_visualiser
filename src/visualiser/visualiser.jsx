
import React from 'react';
import './visualiser.css';
import { getMergeSortAnimations } from '../algorithms/merge_Sort';


const ANIM_SPEED = 10;

const NUM_BARS = 120;

const PRIM_COL = 'black';

const SEC_COL = 'red';

export default class Svisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i<NUM_BARS; i++){
            array.push(randomizer(20,800));
        } 
        this.setState({array});
    }

    mergeSort (){
        const anim = getMergeSortAnimations (this.state.array);
        for (let i = 0; i < anim.length; i++){
            const arraybars = document.getElementsByClassName('array-bar');
            const iscolorchange = i % 3 !== 2;
            if (iscolorchange){
                const [barOI, barTI] = anim[i];
                const barOIstyle = arraybars[barOI].style;
                const barTIstyle = arraybars[barTI].style;
                const color = i % 3 === 0? SEC_COL: PRIM_COL;

                setTimeout(() =>{
                    barOIstyle.backgroundColor = color;
                    barTIstyle.backgroundColor = color;

                }, i * ANIM_SPEED);

            }else{
                setTimeout(() =>{
                    const [barO, newH] = anim[i];
                    const barOstyle = arraybars[barO].style;
                    barOstyle.height =  `${newH}px` ;
                }, i * ANIM_SPEED)
            }
        }
    }

    
    render(){
        const {array} = this.state;
    

        return (
            <div>{array.map ((value, idx) => (
                <div className="array-bar" 
                key={idx}
                style = {{ height: `${value}px` }}></div> 
            )) } 
            <p></p>
            <button onClick = {()=> this.resetArray()}>Generate new Array.</button>
            <button onClick = {()=> this.mergeSort()}>MergeSort.</button>
           
             </div> 

       

        )}


}

function randomizer(minn, maxx) {
return Math.floor(Math.random() * (maxx - minn+1) + minn);
}
        