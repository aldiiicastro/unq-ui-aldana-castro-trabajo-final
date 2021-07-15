import '../css/EndGame.css'
const EndGame = (props) => {
  const handleClick = () => {
    props.setGameFinished(false)
    props.setMovesRealized(0)
  }
  return(
    <div className='endDiv'>
      <p className='end'>Termino el juego</p>
      <p className='end'>Su puntación fue de: {props.total}</p>
      <button className="btn btn-dark buttonScore" onClick={handleClick}>Volver a jugar</button>
    </div>
  )
}

export default EndGame;