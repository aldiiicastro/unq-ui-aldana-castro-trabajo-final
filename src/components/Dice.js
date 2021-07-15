import React from "react";

const Dice = (props) => {
    const handleClick = (e)=> {
        !e.target.className.includes('selected') ? ignoreDice(e) : notIgnoreDice(e)
    }
    
    const changeClassName = (e) => {
        e.target.classList.remove('btnDice');
        e.target.classList.add('selected');
        e.target.classList.remove('die'+e.target.innerHTML)
        e.target.classList.add('die'+e.target.innerHTML+'selected')
    }

    const ignoreDice = (e) => {
        if ([...document.getElementsByClassName("selected")].length < 4){
            props.amountDiceRoll === 0 ? alert('Debe hacer una primera tirada') : changeClassName(e)
        } else {
            alert('No puede quedarse los 5 dados')
        } 
    }
    
    const notIgnoreDice = (e)  => {
        e.target.classList.remove('selected');
        e.target.classList.add('btnDice');
        e.target.classList.add('die'+e.target.innerHTML);
        e.target.classList.remove('die'+e.target.innerHTML+'selected');
    }

    return(
        <React.Fragment>
            <button id='die' className={`btn btn-light dice btnDice die1`} onClick={(e) => handleClick(e)}></button>
            <button id='die' className={`btn btn-light dice btnDice die1`} onClick={(e) => handleClick(e)}></button>
            <button id='die' className={`btn btn-light dice btnDice die1`} onClick={(e) => handleClick(e)}></button>
            <button id='die' className={`btn btn-light dice btnDice die1`} onClick={(e) => handleClick(e)}></button>
            <button id='die' className={`btn btn-light dice btnDice die1`} onClick={(e) => handleClick(e)}></button>
        </React.Fragment>  
        
    );
};

export default Dice;