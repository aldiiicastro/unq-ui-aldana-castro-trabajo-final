const scoreMove = (playName, score, total, setTotal, movesRealized, initializeAll, setMovesRealized) => {
            if (document.getElementById(playName).innerHTML !== score.toString() && document.getElementById(playName).innerHTML !== 'X') {
                document.getElementById(playName).innerHTML = score.toString()
                document.getElementById(playName).classList.remove('score')
                console.log(movesRealized)
                setMovesRealized(movesRealized + 1)
                setTotal(total + score)
                initializeAll()
            } else {
                alert('La jugada que intenta guardar ya fue realizada, vuelva a tirar o anote otra jugada')
            }
}

export default {scoreMove};
