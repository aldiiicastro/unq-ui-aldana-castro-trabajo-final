
    const scoreMove = (playName, score, total, setTotal, initializeAll) => {
        if (document.getElementById(playName).innerHTML !== score.toString() && document.getElementById(playName).innerHTML !== 'X') {
            document.getElementById(playName).innerHTML = score.toString()
            document.getElementById(playName).classList.remove('score')
            setTotal(total + score)
            initializeAll()
        } else {
            alert('La jugada que intenta guardar ya fue realizada, vuelva a tirar o anote otra jugada')
        }
    }
   


export default {scoreMove};
