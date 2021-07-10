import React from 'react'
import '../css/ScoreTable.css'

function ScoreTable() {
  return (
    <table>
      <thead>
          <tr>
              <th>Juego</th>
              <th>Puntaje</th>
          </tr>
      </thead>
      <tbody>
            <tr>
              <th>1</th>
              <td id='1'>0</td>
            </tr>
            
            <tr>
              <th>2</th>
              <td id='2'>0</td>
            </tr>
            
            <tr>
              <th>3</th>
              <td id='3'>0</td>
            </tr>
            
            <tr>
              <th>4</th>
              <td id='4'>0</td>
            </tr>
            
            <tr>
              <th>5</th>
              <td id='5'>0</td>
            </tr>
            
            <tr>
              <th>6</th>
              <td id='6'>0</td>
            </tr>
            
            <tr>
              <th>Escalera</th>
              <td id='straight'>0</td>
            </tr>
            
            <tr>
              <th>Full</th>
              <td id='full'>0</td>
            </tr>
            
            <tr>
              <th>Poquer</th>
              <td id='poker'>0</td>
            </tr>
            
            <tr>
              <th>Generala</th>
              <td id='generala'>0</td>
            </tr>
            
            <tr>
              <th>Doble Generala</th>
              <td>0</td>
            </tr>
      </tbody>
    </table>
  )
}

export default ScoreTable
