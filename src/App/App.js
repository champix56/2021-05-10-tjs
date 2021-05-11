import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import { REST_SERVER_ADR } from './config/config'
import store from './store/store'
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeEditor from './components/MemeEditor/MemeEditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello", counter: 0, memes: [] };
  }
  componentDidMount() {
    this.setState({ memes: store.getState().srvdata.memes })
    store.subscribe(() => {
      this.setState({ memes: store.getState().srvdata.memes })
    })
  }
  componentDidUpdate() {
    console.log('Le contenu du component a ete mis a jour', this.state);
  }
  render() {
    return <div className="App">
      <MemeEditor></MemeEditor>
      <br />
      <MemeThumbnail>
        {
          this.state.memes.map((element, index) => {
            return <MemeSVGViewer meme={element} key={"viewer-" + index} />
          })}
      </MemeThumbnail>
      <br />

      {JSON.stringify(this.state)}
    </div>
  }
}
export default App;