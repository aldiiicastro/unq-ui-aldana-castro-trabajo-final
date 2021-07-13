import React, { useState } from 'react';
import ScoreTable from './ScoreTable'
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
    const [total, setTotal] = useState(0)
    const [actualGame, setActualGame] = useState('')
    
    const diceRepeat = (dice) => {
        let count = {};
        dice.forEach(function(i) { count[i] = (count[i]||0) + 1;});
        return count
    } 
    
    const keysObject = Object.keys(diceRepeat(dice))
    const valuesObject = Object.values(diceRepeat(dice))
    
    const deleteSelectedDice = () => {
        let diceToNotRoll = [...document.getElementsByClassName("selected")];
        diceToNotRoll.forEach((die) => {die.setAttribute('class','btn btn-light dice btnDice');})
    }
    const initializeAll = () => {
        isHiden(true);
        setAmountDiceRoll(0);
        setMaximusDiceRoll(false);
        deleteSelectedDice()
        setActualGame('')
    }
    const isStraight1to5 = (actualDice) =>  {
        return actualDice.includes(1) && actualDice.includes(2) && actualDice.includes(3) && actualDice.includes(4) && actualDice.includes(5)
    }
    
    const isStraight2to6 = (actualDice) => {
        return actualDice.includes(2) && actualDice.includes(3) && actualDice.includes(4) && actualDice.includes(5) && actualDice.includes(6)
    }
    
    const isStraight = (actualDice) => {
        let dice = Object.values(diceRepeat(actualDice))
        if (isStraight1to5(dice) || isStraight2to6(dice)) {
            isHiden(false);
            isStraightToScore(straight + 1);
            setActualGame('Escalera')
        } 
    }
    
    const isFull = (actualDice) => {
        let dice = Object.values(diceRepeat(actualDice))
        if (dice.includes(3) && dice.includes(2)) {
            isHiden(false);
            isFullToScore(full + 1);
            setActualGame('Full')
        } 
    }

    const isPoker = (actualDice) => {
        let dice = Object.values(diceRepeat(actualDice))
        if (dice.includes(4)) {
            isHiden(false);
            isPokerToScore(poker + 1);
            setActualGame('Poquer')
        }
    }

    const isGenerala = (actualDice) => {
        let dice = Object.values(diceRepeat(actualDice))
        if (dice.includes(5)) {
            isHiden(false);
            isGeneralaToScore(generala + 1);
            setActualGame('Generala')
        }
    }
    
    const scoringNumber = (key,value, event) =>{
        if (document.getElementById(`${key}`).innerHTML == 0) {
            let score = key * value
            document.getElementById(`${key}`).innerHTML = score
            setTotal(total + score)
            initializeAll()
        }  else {
            alert('La jugada que intenta guardar ya fue realizada, vuelva a tirar o anote otra jugada')
        }
        
    }

    const scoring = () => {
        if (straight === 1 && document.getElementById("escalera").innerHTML !== 20 && document.getElementById("escalera").innerHTML !== 'X') {
            document.getElementById("escalera").innerHTML = 20
            setTotal(total + 20)
            isStraightToScore(2)
            initializeAll()
        }
        else if (full === 1 && document.getElementById("full").innerHTML !== 30 && document.getElementById("full").innerHTML !== 'X') {
            document.getElementById("full").innerHTML = 30
            setTotal(total + 30)
            isFullToScore(2)
            initializeAll()
        }
        else if (poker === 1 && document.getElementById("poquer").innerHTML !== 40 && document.getElementById("poquer").innerHTML !== 'X'){
            document.getElementById("poquer").innerHTML = 40
            setTotal(total + 40)
            isPokerToScore(2)
            initializeAll()
        }
        else if (generala === 1 && document.getElementById("generala").innerHTML !== 50 && document.getElementById("generala").innerHTML !== 'X') {
            document.getElementById("generala").innerHTML = 50
            setTotal(total + 50)
            initializeAll()
        }
        else if (generala === 2 && document.getElementById("doble").innerHTML !== 100 && document.getElementById("doble").innerHTML !== 'X') {
            document.getElementById("doble").innerHTML = 100
            setTotal(total + 100)
            isGenerala(3)
            initializeAll()
        } else {
            alert('La jugada que intenta guardar ya fue realizada, vuelva a tirar o anote otra jugada')
        }
        
    }

   const rollDice = () => {
        isHiden(true);
        let actualDice = []
        let diceToRoll = [...document.getElementsByClassName("btnDice")]
        diceToRoll.forEach((die) => {
            die.innerHTML = Math.floor(Math.random() * 6) + 1;
            actualDice.push(die.innerHTML)
        })
        let diceToNotRoll = [...document.getElementsByClassName("selected")]
        diceToNotRoll.forEach((die) => {
            actualDice.push(die.innerHTML)
        })
        
        setDice(actualDice)
        isPoker(actualDice);
        isFull(actualDice);
        isStraight(actualDice);
        isGenerala(actualDice);
        setAmountDiceRoll(amountDiceRoll + 1);
        if (amountDiceRoll === 2){
            setMaximusDiceRoll(true);
        }
    }
    
    const ignoreDice = (e) => {
        amountDiceRoll === 0 ? alert('Debe hacer una primera tirada') :
        e.target.setAttribute('class','btn btn-light dice selected'); 
    }

    const notIgnoreDice = (e)  => {
        e.target.setAttribute('class','btn btn-light dice btnDice');
    }

    const handleClick = (e)=> {
        !e.target.className.includes('selected') ? ignoreDice(e) : notIgnoreDice(e)
    }

    const crossOutAPlay = (e, scoreToCrossOut) => {
        console.log(scoreToCrossOut)
        scoreToCrossOut.innerHTML = 'X'
        initializeAll()
    }
    
    return(
        <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
              <ScoreTable total={total}/>
          </div>
          <div className='col'>
          
        <div className='row row-cols-2'>
            <div className='col'>
                
                <button id="die" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die3" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die4" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                <button id="die5" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>1</button>
                
                {hide && !maximusDiceRoll && <button type="button" className="btn btn-dark" onClick={ rollDice }>Tirar los dados</button>}
                {!hide &&
                    <div>
                        <button className="btn btn-dark" onClick={rollDice}>Volver a tirar</button>
                        <button className="btn btn-dark buttonScore" onClick={scoring}>Anotar juego {actualGame}</button>
                    </div>
                }
                {
                    maximusDiceRoll && 
                    <div>
                        {actualGame === '' && <p>Debes anotar para volver a tirar</p>}
                        {console.log(dice)}
                        {keysObject.map((key, index) => {
                            return (
                            <button className="btn btn-dark buttonScore" key={index} onClick={(event) => scoringNumber(key, valuesObject[index], event)}>Anotar {valuesObject[index] * key}  al {key} </button>
                            )
                        }) 
                        }
                        <div>
                        {[...document.getElementsByClassName('score')].map((score) => {
                            return (score.innerHTML == 0 && 
                                    <button className="btn btn-dark buttonScore" onClick={(event) => crossOutAPlay(event, score)}>Tachar {score.id} </button>
                                    )
                                }
                            )
                        }
                       </div>
                    </div>
                }
            </div>
            <div className='col'></div>
        </div>
          </div>
        </div>
      </div>
    );
};

export default Dice;