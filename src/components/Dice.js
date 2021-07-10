import React, { useState } from 'react';
import '../css/Dice.css'
const Dice = () => {
    const [straight, isStraightToScore] = useState(0);
    const [poker, isPokerToScore] = useState(0);
    const [full, isFullToScore] = useState(0);
    const [generala, isGeneralaToScore] = useState(0);
    const [hide, isHiden] = useState(true);
    const [amountDiceRoll, setAmountDiceRoll] = useState(0);
    const [maximusDiceRoll, setMaximusDiceRoll] = useState(false);
    const dice = new Map()
    const diceRepeat1 = () => {
        let count = {};
        console.log(dice);
        dice.forEach(function(i) {  count[i] = (count[i]||0) + 1;});
        return count
    }

    const keysObject = Object.keys(diceRepeat1())
    const valuesObject = Object.values(diceRepeat1())
    const diceRepeat = (dice) => {
        let count = {};
        dice.forEach(function(i) { count[i] = (count[i]||0) + 1;});
        return Object.values(count)
    }
    

    const isStraight1to5 = (actualDice) =>  {
        return actualDice.includes(1) && actualDice.includes(2) && actualDice.includes(3) && actualDice.includes(4) && actualDice.includes(5)
    }
    
    const isStraight2to6 = (actualDice) => {
        return actualDice.includes(2) && actualDice.includes(3) && actualDice.includes(4) && actualDice.includes(5) && actualDice.includes(6)
    }
    
    const isStraight = (actualDice) => {
        if (isStraight1to5(actualDice) || isStraight2to6(actualDice)) {
            isHiden(false);
            isStraightToScore(straight + 1);
        }
    }
    
    const isFull = (actualDice) => {
        if (diceRepeat(actualDice).includes(3) && diceRepeat(actualDice).includes(2)) {
            isHiden(false);
            isFullToScore(full + 1);
        }
    }

    const isPoker = (actualDice) => {
        if (diceRepeat(actualDice).includes(4)) {
            isHiden(false);
            isPokerToScore(poker + 1);
        }
    }

    const isGenerala = (actualDice) => {
        if (diceRepeat(actualDice).includes(5)) {
            isHiden(false);
            isGeneralaToScore(generala + 1);
        }
    }
    const scoringNumber = (key,value, event) =>{
        event.preventDefault();
        if (document.getElementById(`${key}`).innerHTML == 0) {
            let total = key * value
            document.getElementById(`${key}`).innerHTML = total
        }
        setAmountDiceRoll(0);
        setMaximusDiceRoll(false);
    }
    const scoring = () => {
        if (straight === 1 && document.getElementById("straight").innerHTML !== 20) {
            document.getElementById("straight").innerHTML = 20
            isStraightToScore(2)
        }
        if (full === 1 && document.getElementById("full").innerHTML !== 30) {
            document.getElementById("full").innerHTML = 30
            isFullToScore(2)
        }
        if (poker === 1 && document.getElementById("poquer").innerHTML !== 40){
            document.getElementById("poquer").innerHTML = 40
            isPokerToScore(2)
        }
        if (generala === 1 && document.getElementById("generala").innerHTML !== 50) {
            document.getElementById("generala").innerHTML = 50
        }
        isHiden(true);
        setAmountDiceRoll(0);
        setMaximusDiceRoll(false);
    }

   const rollDice = () => {
        isHiden(true);
        let die1 = document.getElementById("die1");
        let die2 = document.getElementById("die2");
        let die3 = document.getElementById("die3");
        let die4 = document.getElementById("die4");
        let die5 = document.getElementById("die5");
        // let status = document.getElementById("status");
        let d1 = Math.floor(Math.random() * 6) + 1;
        let d2 = Math.floor(Math.random() * 6) + 1;
        let d3 = Math.floor(Math.random() * 6) + 1;
        let d4 = Math.floor(Math.random() * 6) + 1;
        let d5 = Math.floor(Math.random() * 6) + 1;
        dice.set(die1.id, d1)
        dice.set(die2.id, d2)
        dice.set(die3.id, d3)
        dice.set(die4.id, d4)
        dice.set(die5.id, d5)
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        die3.innerHTML = d3;
        die4.innerHTML = d4;
        die5.innerHTML = d5;
        let actualDice = [d1,d2,d3,d4,d5]
        
        isPoker(actualDice);
        isFull(actualDice);
        isStraight(actualDice);
        isGenerala(actualDice);
        setAmountDiceRoll(amountDiceRoll + 1);
        if (amountDiceRoll === 2){
            setMaximusDiceRoll(true);
        }
    }
    const diceToIgnore= new Map();
    const ignoreDice = (e) => {
        e.target.setAttribute('class','btn btn-light dice selected'); 
        diceToIgnore.set(e.target.id, e.target.innerHTML);
    }
    const notIgnoreDice = (e)  => {
        e.target.setAttribute('class','btn btn-light dice btnDice');
        diceToIgnore.delete(e.target.id);
    }
    const handleClick = (e)=> {
        !e.target.className.includes('selected') ? ignoreDice(e) : notIgnoreDice(e)
    }
    
    return(
        <div className='row row-cols-2'>
            <div className='col'>
                
                <button id="die1" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die2" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die3" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die4" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die5" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                
                {hide && !maximusDiceRoll && <button type="button" className="btn btn-dark" onClick={ rollDice }>Tirar los dados</button>}
                {!hide &&
                    <div>
                        <button className="btn btn-dark" onClick={rollDice}>Volver a tirar</button>
                        <button className="btn btn-dark buttonScore" onClick={scoring}>Anotar juego</button>
                    </div>
                }
                {
                    maximusDiceRoll && 
                    <div>
                        <p>Debes anotar para volver a tirar</p>
                    
                        {keysObject.map((key, index) => {
                            return (
                            <button className="btn btn-dark buttonScore" key={index} onClick={(event) => scoringNumber(key, valuesObject[index], event)}>Anotar {valuesObject[index] * key}  al {key} </button>
                            )
                        }) }
                    </div>
                }
            </div>
            <div className='col'></div>
        </div>
    );
};

export default Dice;