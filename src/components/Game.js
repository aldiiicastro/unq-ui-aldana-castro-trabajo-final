import React, { useState } from 'react';
import ScoreTable from './ScoreTable'
import '../css/Dice.css'
import Dice from './Dice';
import AuxiliaryFunctions from './AuxiliaryFunctions';
import ScoringButtons from './ScoringButtons';
import Context from './Context';
import CrossOut from './CrossOut';
import Play from './Play';
import EndGame from './EndGame';
const Game = () => {
    const [hide, isHiden] = useState(true);
    const [amountDiceRoll, setAmountDiceRoll] = useState(0);
    const [dice, setDice] = useState(['1','1','1','1','1']);
    const [total, setTotal] = useState(0)
    const [actualGame, setActualGame] = useState('')
    const [movesRealized, setMovesRealized] = useState(0)
    const [gameFinished, setGameFinished] = useState(false)
    const [scoreMove, setScoreMove] = useState('')

    const initializeAll = () => {
        isHiden(true);
        setAmountDiceRoll(0);
        deleteSelectedDice()
        setActualGame('')
        setScoreMove('')
    }

    const deleteSelectedDice = () => {
        let diceToNotRoll = [...document.getElementsByClassName("selected")];
        diceToNotRoll.forEach((die) => {
            die.classList.remove('selected'); 
            die.classList.add('btnDice'); 
            die.classList.remove('die'+die.innerHTML+'selected'); 
            die.classList.add('die'+die.innerHTML);
            }
        )
    }

    const isStraight1to5 = (actualDice) =>  {
        return actualDice.includes('1') && actualDice.includes('2') && actualDice.includes('3') && actualDice.includes('4') && actualDice.includes('5')
    }
    
    const isStraight2to6 = (actualDice) => {
        return actualDice.includes('2') && actualDice.includes('3') && actualDice.includes('4') && actualDice.includes('5') && actualDice.includes('6')
    }
    
    const checkGames = (actualDice) => {
        let dice = Object.values(AuxiliaryFunctions.diceRepeat(actualDice));
        let play= '';
        let score = 0;
        
        if (isStraight1to5(actualDice) || isStraight2to6(actualDice)) {
           play = 'escalera';
           score = 30
        } 
        if (dice.includes(3) && dice.includes(2)) {    
            play = 'full';
            score = 30
        } 
        if (dice.includes(4)) {
            play = 'poquer';
            score = 40;
        }
        if (dice.includes(5) && document.getElementById('generala').innerHTML !== '50') {
            play = 'generala';
            score = 50;
        } 
        if(dice.includes(5) && document.getElementById('generala').innerHTML === '50') {
            play = 'doble'
            score = 100;
        }
        setActualGame(play)
        setScoreMove(score)
        if (play !== '') {
            isHiden(false);
        }
    }

    const scoring = () => {
        Play.scoreMove(actualGame, scoreMove, total, setTotal,movesRealized, initializeAll, setMovesRealized)
        if (movesRealized === 11) {
            setGameFinished(true)
        }
    }

   const rollDice = () => {
       isHiden(true)
        let actualDice = []
        let diceToRoll = [...document.getElementsByClassName("btnDice")]
        diceToRoll.forEach((die) => {
            let newNumber = Math.floor(Math.random() * 6) + 1;
            die.classList.remove('die'+die.innerHTML)
            die.classList.add('die'+ newNumber)
            die.innerHTML = newNumber
            actualDice.push(die.innerHTML)
            
        })
        let diceToNotRoll = [...document.getElementsByClassName("selected")]
        diceToNotRoll.forEach((die) => {
            actualDice.push(die.innerHTML)
        })
        checkGames(actualDice)
        setAmountDiceRoll(amountDiceRoll + 1);
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
            
                <Dice amountOfDice={[1,1,1,1,1]} actualDice={dice} amountDiceRoll={amountDiceRoll}/>
                
                {hide && !(amountDiceRoll === 3) && <button type="button" className="btn btn-dark" onClick={ rollDice }>Tirar los dados</button>}
                {!hide &&
                    <div>
                        <button className="btn btn-dark" onClick={rollDice}>Volver a tirar</button>
                        <button className="btn btn-dark buttonScore" onClick={scoring}>Anotar {actualGame}</button>
                        
                    </div>
                }
                {
                    (amountDiceRoll === 3) && 
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
                <p className='infoBtn'>Seleccione los dados que no quiere que sean tirados de nuevo</p>
                <p className='info'>Total: {total}</p>
                <p className='info'>Tiros restantes: {3 - amountDiceRoll}</p>
            </div>
        </div>
          </div>
        </div>}
        {}
        {gameFinished && <EndGame setGameFinished={setGameFinished} setMovesRealized={setMovesRealized} total={total}/>}
      </div>
    );
};

export default Game;