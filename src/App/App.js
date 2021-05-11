import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import { REST_SERVER_ADR } from './config/config'
import store from './store/store'
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeEditor from './components/MemeEditor/MemeEditor';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'

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
    return <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact>Hello a tous</Route>
          <Route path='/edit'>
            <MemeEditor></MemeEditor>
          </Route>
          <Route path='/thumb/:id'>
          {/* {JSON.stringify(this.state.memes.find(e => e.id === useParams().id))} */}
            {/* <MemeSVGViewer meme={this.state.memes.find(e => e.id === useParams().id)} /> */}
          </Route>
          <Route path='/thumb'>
            <MemeThumbnail>
              {
                this.state.memes.map((element, index) => {
                  return <MemeSVGViewer meme={element} key={"viewer-" + index} />
                })}
            </MemeThumbnail>
          </Route>
        </Switch>
        <br />
        {/* {JSON.stringify(this.state)} */}
      </div>
    </Router>
  }
}
export default App;