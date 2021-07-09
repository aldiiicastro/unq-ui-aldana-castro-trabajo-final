import React from 'react'
import '../css/ScoreTable.css'
import { useTable } from 'react-table'

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
              <td>5</td>
            </tr>
            
            <tr>
              <th>2</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>3</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>4</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>5</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>6</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>Escalera</th>
              <td id='escalera'>5</td>
            </tr>
            
            <tr>
              <th>Full</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>Poquer</th>
              <td id='poker'>5</td>
            </tr>
            
            <tr>
              <th>Generala</th>
              <td>5</td>
            </tr>
            
            <tr>
              <th>Doble Generala</th>
              <td>5</td>
            </tr>
      </tbody>
    </table>
  )
}

export default ScoreTable
