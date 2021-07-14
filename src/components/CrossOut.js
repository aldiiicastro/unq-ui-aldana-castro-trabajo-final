import React from "react";
import Context from './Context';
const CrossOut = (props) => {
    const crossOutAPlay = (e, scoreToCrossOut, movesRealized) => {
        scoreToCrossOut.innerHTML = 'X'
        props.setMovesRealized(movesRealized + 1)
        props.initializeAll()
        console.log(movesRealized)
        if (movesRealized === 10) {
            props.setGameFinished(true)
        }
    }
   return(
    <Context.Consumer>
        {  contex => (  
            <React.Fragment>
                {([...document.getElementsByClassName('score')].map((score, index) => 
                    (score.innerHTML == 0 && 
                            <button className="btn btn-dark buttonScore" key={index} onClick={(event) => crossOutAPlay(event, score, contex.movesRealized)}>
                                Tachar {score.id} 
                            </button>
                            )
                ))}
            </React.Fragment>
        )}
        </Context.Consumer>
   );
};

export default CrossOut;