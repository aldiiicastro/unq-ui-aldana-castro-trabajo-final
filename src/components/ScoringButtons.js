import React from "react";
import AuxiliaryFunctions from './AuxiliaryFunctions';
import Context from './Context'

const ScoringButtons = (props) => {

    function keysObject(dice) { return (Object.keys(AuxiliaryFunctions.diceRepeat(dice))) }
    function valuesObject(dice)  {return (Object.values(AuxiliaryFunctions.diceRepeat(dice)))}

    const scoringNumber = (key,value, event, total, movesRealized) =>{
        let toScore = document.getElementById(`${key}`)
        if (toScore.innerHTML == 0) {
            let score = key * value
            toScore.innerHTML = score
            console.log(toScore)
            props.setTotal(total + score)
            props.initializeAll()
            props.setMovesRealized(movesRealized + 1)
            if ((movesRealized + 1) === 11) {
                props.setGameFinished(true)
            }
        }  else {
            alert('La jugada que intenta guardar ya fue realizada, vuelva a tirar o anote otra jugada')
        }
        
    }

    return(
        <Context.Consumer>
            {context => (
                <React.Fragment>
                    {keysObject(context.dice).map((key, index) => 
                            (<button className="btn btn-dark buttonScore" key={index} onClick={(event) => scoringNumber(key, valuesObject(context.dice)[index], event, context.total, context.movesRealized)}>
                                Anotar {valuesObject(context.dice)[index] * key} al {key}  
                            </button>)
                        )
                    }
                </React.Fragment>
            )}
        </Context.Consumer>
    );
};

export default ScoringButtons;