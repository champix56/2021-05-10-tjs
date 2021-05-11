import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={text:"Hello", counter:0};
  }
  componentDidMount(){
    this.setState({text:'je suis pret'});
  }
  com
  componentDidUpdate(){
    console.log('Le contenu du component a ete mis a jour',this.state);
  }
  render() {
    return <div className="App">
      <Button title="cliquez ICI !!" action={()=>{
        //interdit de muter le state directement 
        //this.state.counter=this.state.counter+1;
        this.setState({counter:this.state.counter+1})
        console.log(this.state);
        
      }} />
      <br/>
      <AnimatedButton title="Animated" action={()=>{console.log('hello');}}/>
      <br/>
      <MemeSVGViewer/>

      <br/>

      {JSON.stringify(this.state)}
    </div>
  }
}
export default App;