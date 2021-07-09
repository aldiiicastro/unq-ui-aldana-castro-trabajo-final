import '../css/Dice.css'
const Dice = () => {
    let x=1;

   const rollDice = () => {
        let die1 = document.getElementById("die1");
        // let status = document.getElementById("status");
        let d1 = Math.floor(Math.random() * 6) + 1;
        die1.innerHTML = d1;
        x = x+1;
        // if (pos > 99){
        //     alert("EL juego ha terminado");
        //     y = 0;
        // }
    }

    return(
        <div>
            <div id="die1" className="dice">1</div>
            <button onClick={ rollDice }>Tira el Dado</button>
        </div>
    );
};

export default Dice;