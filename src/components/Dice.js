import React, { useState } from 'react';
import ScoreTable from './ScoreTable'
import '../css/Dice.css'
import Game from './Game';
import AuxiliaryFunctions from './AuxiliaryFunctions';
import ScoringButtons from './ScoringButtons';
import Context from './Context';
import CrossOut from './CrossOut';
import Play from './Play';
import EndGame from './EndGame';
const Dice = (props) => {
    const [hide, isHiden] = useState(true);
    const [amountDiceRoll, setAmountDiceRoll] = useState(0);
    const [maximusDiceRoll, setMaximusDiceRoll] = useState(false);
    const [dice, setDice] = useState([])
    const [total, setTotal] = useState(0)
    const [actualGame, setActualGame] = useState('')
    const [movesRealized, setMovesRealized] = useState(0)
    const [gameFinished, setGameFinished] = useState(false)
    const [scoreMove, setScoreMove] = useState('')

    const initializeAll = () => {
        isHiden(true);
        setAmountDiceRoll(0);
        setMaximusDiceRoll(false);
        deleteSelectedDice()
        setActualGame('')
        setScoreMove('')
    }
    const deleteSelectedDice = () => {
        let diceToNotRoll = [...document.getElementsByClassName("selected")];
        diceToNotRoll.forEach((die) => {die.setAttribute('class','btn btn-light dice btnDice');})
    }

    const isStraight1to5 = (actualDice) =>  {
        return actualDice.includes('1') && actualDice.includes('2') && actualDice.includes('3') && actualDice.includes('4') && actualDice.includes('5')
    }
    
    const isStraight2to6 = (actualDice) => {
        return actualDice.includes('2') && actualDice.includes('3') && actualDice.includes('4') && actualDice.includes('5') && actualDice.includes('6')
    }
    
    const isStraight = (actualDice) => {
        if (isStraight1to5(actualDice) || isStraight2to6(actualDice)) {
            isHiden(false);
            setActualGame('escalera')
            setScoreMove(20)
        } 
    }
    
    const isFull = (actualDice) => {
        let dice = Object.values(AuxiliaryFunctions.diceRepeat(actualDice))
        if (dice.includes(3) && dice.includes(2)) {
            isHiden(false);
            setActualGame('full')
            setScoreMove(30)
        } 
    }

    const isPoker = (actualDice) => {
        let dice = Object.values(AuxiliaryFunctions.diceRepeat(actualDice))
        if (dice.includes(4)) {
            isHiden(false);
            setActualGame('poquer')
            setScoreMove(40)
        }
    }

    const isGenerala = (actualDice) => {
        let dice = Object.values(AuxiliaryFunctions.diceRepeat(actualDice))
        if (dice.includes(5)) {
            isHiden(false);
            setActualGame('generala')
            setScoreMove(50)
        }
    }
    

    const scoring = () => {
        Play.scoreMove(actualGame, scoreMove, total, setTotal,  initializeAll)
        if (movesRealized === 11) {
            setGameFinished(true)
        }
    }

   const rollDice = () => {
       isHiden(true)
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
        
        isPoker(actualDice);
        isFull(actualDice);
        isStraight(actualDice);
        isGenerala(actualDice);
        setAmountDiceRoll(amountDiceRoll + 1);
        if (amountDiceRoll === 2){
            setMaximusDiceRoll(true);
        }
        setDice(actualDice)
    }
    
    return(
        <div className='container'>
        {!gameFinished && <div className='row'>
          <div className='col-md-4'>
              <ScoreTable/>
          </div>
          <div className='col'>
          
        <div className='row row-cols-2'>
            <div className='col'>
            
                <Game amountOfDice={props.amountOfDice} amountDiceRoll={amountDiceRoll}/>
                
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
                        {actualGame === '' && <p className='scoringText'>Debes anotar para volver a tirar</p>}
                        <Context.Provider value={{dice: dice, total: total, movesRealized: movesRealized}}>
                            <ScoringButtons setTotal={setTotal} initializeAll={initializeAll} setGameFinished={setGameFinished} setMovesRealized={setMovesRealized}/>
                        </Context.Provider>
                        <div>
                            <Context.Provider value={{dice: dice, total: total, movesRealized: movesRealized}}>
                                <CrossOut initializeAll={initializeAll} setGameFinished={setGameFinished} setMovesRealized={setMovesRealized}/>
                            </Context.Provider>
                       </div>
                    </div>
                }
            </div>
            <div className='col'>
                <p className='infoBtn'>Seleccione los dados que no quieren que sean tirados de nuevo</p>
                <p className='info'>Total: {total}</p>
                <p className='info'>Tiros restantes: {3 - amountDiceRoll}</p>
            </div>
        </div>
          </div>
        </div>}
        {gameFinished && <EndGame setGameFinished={setGameFinished} setMovesRealized={setMovesRealized}/>}
        {console.log(gameFinished)}
      </div>
    );
};

export default Dice;