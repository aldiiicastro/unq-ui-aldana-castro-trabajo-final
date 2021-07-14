import React from 'react'
import '../css/ScoreTable.css'

const ScoreTable = () => {
  return (
    <table className="table-fill">
      <thead>
          <tr>
              <th>Juego</th>
              <th>Puntaje</th>
          </tr>
      </thead>
      <tbody>
            <tr>
              <th>1</th>
              <td id='1' className='score'>0</td>
            </tr>
            
            <tr>
              <th>2</th>
              <td id='2' className='score'>0</td>
            </tr>
            
            <tr>
              <th>3</th>
              <td id='3' className='score'>0</td>
            </tr>
            
            <tr>
              <th>4</th>
              <td id='4' className='score'>0</td>
            </tr>
            
            <tr>
              <th>5</th>
              <td id='5'className='score'>0</td>
            </tr>
            
            <tr>
              <th>6</th>
              <td id='6' className='score'>0</td>
            </tr>
            
            <tr>
              <th>Escalera</th>
              <td id='escalera' className='score'>0</td>
            </tr>
            
            <tr>
              <th>Full</th>
              <td id='full' className='score'>0</td>
            </tr>
            
            <tr>
              <th>Poquer</th>
              <td id='poquer' className='score'>0</td>
            </tr>
            
            <tr>
              <th>Generala</th>
              <td id='generala' className='score'>0</td>
            </tr>
            
            <tr>
              <th>Doble Generala</th>
              <td id='doble' className='score'>0</td>
            </tr>
      </tbody>
    </table>
  )
}

export default ScoreTable
