import React from 'react';
import './App.css';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import store, { initialState as storeInitialState } from './store/store'
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeEditor from './components/MemeEditor/MemeEditor'
import NavBar from './components/NavBar/NavBar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello", counter: 0, ...storeInitialState };
  }
  componentDidMount() {
    this.setState({ ...store.getState().srvdata })
    // this.setState({ memes: store.getState().images })
    store.subscribe(() => {
      this.setState({ ...store.getState().srvdata })
      // this.setState({ images: store.getState().images })
    })
  }
  componentDidUpdate() {
    console.log('Le contenu du component a ete mis a jour', this.state);
  }
  render() {
    return <div className="App">
      <NavBar/>
      <MemeEditor/>
      <hr/>
      <MemeThumbnail>
        {
          this.state.memes.map((element, index) => {
            return <MemeSVGViewer meme={{ ...element, image: this.state.images.find((e) => e.id === element.imageId) }} key={"viewer-" + index} />;
          })
        }
      </MemeThumbnail>
      <br />

      {JSON.stringify(this.state)}
    </div>
  }
}
export default App;