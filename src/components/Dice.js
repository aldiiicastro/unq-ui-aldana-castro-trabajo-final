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
    const [dice, setDice] = useState([])
    const diceRepeat1 = (dice) => {
        let count = {};
        dice.forEach(function(i) { count[i] = (count[i]||0) + 1;});
        return count
    }

    const keysObject = Object.keys(diceRepeat1(dice))
    const valuesObject = Object.values(diceRepeat1(dice))
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
            console.log('Escalera')
            isHiden(false);
            isStraightToScore(straight + 1);
        }
    }
    
    const isFull = (actualDice) => {
        if (diceRepeat(actualDice).includes(3) && diceRepeat(actualDice).includes(2)) {
            console.log('Full')
            isHiden(false);
            isFullToScore(full + 1);
        }
    }

    const isPoker = (actualDice) => {
        if (diceRepeat(actualDice).includes(4)) {
            console.log('Poquer')
            isHiden(false);
            isPokerToScore(poker + 1);
        }
    }

    const isGenerala = (actualDice) => {
        if (diceRepeat(actualDice).includes(5)) {
            console.log('Full')
            isHiden(false);
            isGeneralaToScore(generala + 1);
        }
    }
    const scoringNumber = (key,value, event) =>{
        event.preventDefault();
        if (document.getElementById(`${key}`).innerHTML == 0) {
            let total = key * value
            console.log('key ' + key + 'value '+ value)
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
        setDice([d1,d2,d3,d4,d5])
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

    return(
        <div className='row row-cols-2'>
            <div className='col'>
                <div id="die1" className="dice">1</div>
                <div id="die2" className="dice">1</div>
                <div id="die3" className="dice">1</div>
                <div id="die4" className="dice">1</div>
                <div id="die5" className="dice">1</div>
            
            
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