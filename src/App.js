import './App.css';
import ScoreTable from './components/ScoreTable'
import Dice from './components/Dice'


function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
            <ScoreTable/>
        </div>
        <div className='col'>
          <Dice/>
        </div>
      </div>
    </div>
  );
}

export default App;
