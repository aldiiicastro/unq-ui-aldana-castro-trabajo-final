import React from "react";
const Game = (props) => {
    const handleClick = (e)=> {
        !e.target.className.includes('selected') ? ignoreDice(e) : notIgnoreDice(e)
    }
    
    const ignoreDice = (e) => {
        if ([...document.getElementsByClassName("selected")].length < 4){
            props.amountDiceRoll === 0 ? alert('Debe hacer una primera tirada') :
            e.target.setAttribute('class','btn btn-light dice selected');
        } else {
            alert('No puede quedarse los 5 dados')
        } 
    }
    
    const notIgnoreDice = (e)  => {
        e.target.setAttribute('class','btn btn-light dice btnDice');
    }
    
    return(
        <React.Fragment>
            {props.amountOfDice.map((number, index) => (
                        <button key={index} id="die" className='btn btn-light dice btnDice' onClick={(e) => handleClick(e)}>
                            {number}
                        </button>
                    )
                )
            }
        </React.Fragment>  
        
    );
};

export default Game;