import './App.css';
import Button from './components/Button/Button';
function App() {
  return (
    <div className="App">
     DEMAT BREIZH
     <Button title="Mon boutton" bgcolor="tomato" ></Button>
     <Button title="def. color"  ></Button>
     <Button title="My button2" bgcolor="skyblue" style={{textDecoration:'underline',color:'grey'}} action={()=>{alert('Le boutton est cliqué')}}></Button>
    </div>
  );
}

export default App;
