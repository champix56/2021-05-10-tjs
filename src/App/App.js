import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import { REST_SERVER_ADR } from './config/config'
import store from './store/store'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello", counter: 0, memes: [] };
  }
  componentDidMount() {
    this.setState({ memes: store.getState().memes })
    store.subscribe(() => {
      this.setState({ memes: store.getState().memes })
    })
  }
  componentDidUpdate() {
    console.log('Le contenu du component a ete mis a jour', this.state);
  }
  render() {
    return <div className="App">
      <Button title="cliquez ICI !!" action={() => {
        //interdit de muter le state directement 
        //this.state.counter=this.state.counter+1;
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state);

      }} />
      <br />
      <AnimatedButton title="Animated" action={() => { console.log('hello'); }} />
      <br />
      {
        this.state.memes.map((element, index) => {
          return <MemeSVGViewer meme={element} key={"viewer-" + index} />
        })}

      <br />

      {JSON.stringify(this.state)}
    </div>
  }
}
export default App;