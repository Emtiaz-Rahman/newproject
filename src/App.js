import logo from './logo.svg';
import './App.css';

const number = 5555;
function App() {
  return (
    <div className="App">
      <Persion name='rubel' nayika='mousimi'></Persion>
      <Persion></Persion>
      <Persion></Persion>

      <Friend></Friend>
      <Friend></Friend>

    </div>
  );
}

function Persion(props) {
  console.log(props);
  return (
    <div className='persion'>
      <h1>{props.name}</h1>
      <p>nayika: {props.nayika}</p>
    </div>
  )
}
function Friend() {
  return (
    <div className='persion'>
      <h3>Name:Hablu</h3>
      <p>Job:hadodo</p>
    </div>
  )
}


export default App;
