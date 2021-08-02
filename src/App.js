import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{color:'cyan'}}>My first React App</h2>
        <Person name='Hero Alam' job='Singer'></Person>
        <Person name='Salman Sha'job='Actor'></Person>
        <Person name='Manna De' job='Hero'></Person>
        <Person name='Rahim Ali' job='Baker'></Person>
        
        
        
        
      </header>
    </div>
  );///////
}


function Person(props){
  const personStyle = {
    color:'white',
    background: 'skyblue', 
    padding: '5px',
    margin: '10px 0px',
    border: '2px solid red',
    borderRadius: '5px',
    width: '400px',
    height: '200px',
  }
  return(
    <div style={personStyle}>

    <h3>Name : {props.name}</h3>
    <h5>Profession : {props.job}</h5>

    </div>
  )
}

export default App;
