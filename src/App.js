import logo from './logo.svg';
import './App.css';
import ScoreTable from './components/ScoreTable'
import styled from 'styled-components'
import Dice from './components/Dice'
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="App">
            <Styles>
              <ScoreTable/>
            </Styles>
          </div>
        </div>
        <div className='col'>
          <Dice></Dice>
        </div>
      </div>
    </div>
  );
}

export default App;
