import React, { useState } from 'react';
import '../css/Dice.css'
const Dice = () => {
    const [straight, isStraightToScore] = useState(false);
    const [hide, isHiden] = useState(true);
    const [poker, isPokerToScore] = useState(false);
    const isStraight1to5 = (dice) =>  {
        return dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)
    }
    
    const isStraight2to6 = (dice) => {
        return dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6)
    }
    
    const isStraight = (dice) => {
        if (isStraight1to5(dice) || isStraight2to6(dice)) {
            console.log('Escalera')
            isHiden(false);
            isStraightToScore(true);
        }
    }

    const scoring = () => {
        straight && (document.getElementById("escalera").innerHTML = 20) || poker && (document.getElementById("escalera").innerHTML = 40);
        isHiden(true);
    }
    const isPoker = (dice) => {
        let count = {};
        dice.forEach(function(i) { count[i] = (count[i]||0) + 1;});
        let p = Object.values(count).includes(4)
        if (p) {
            isHiden(false);
            isPokerToScore(true);
        }
        return poker
    }
   const rollDice = () => {
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
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        die3.innerHTML = d3;
        die4.innerHTML = d4;
        die5.innerHTML = d5;
        let dice = [d1,d2,d3,d4,d5]
        isPoker(dice);
        // isFull(d1,d2,d3,d4,d5);
        isStraight(dice);
        // if (pos > 99){
        //     alert("EL juego ha terminado");
        //     y = 0;
        // }
    }

    return(
        <React.Fragment>
            <div>
                <div id="die1" className="dice">1</div>
                <div id="die2" className="dice">1</div>
                <div id="die3" className="dice">1</div>
                <div id="die4" className="dice">1</div>
                <div id="die5" className="dice">1</div>
            </div>
            <div className='btnRollDice'>
                <button type="button" className="btn btn-dark" onClick={ rollDice }>Tirar los dados</button>
                {!hide &&
                    <div>
                        <button className="btn btn-dark" onClick={rollDice}>Volver a tirar</button>
                        <button className="btn btn-dark" onClick={scoring}>Anotar</button>
                    </div>
                }
            </div>
        </React.Fragment>
    );
};

export default Dice;