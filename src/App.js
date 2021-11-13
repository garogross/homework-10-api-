import { Route, Switch, Redirect } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { isPlayingChange } from './actions/playerActions';

import Player from "./Components/Player/Player"
import Playlist from "./pages/Playlist/Playlist";
import Navigator from './Components/Navigator/Navigator';
import classes from "./App.module.css"
import DeletedSongs from './pages/DeletedSongs/DeletedSong';

function App() {
  const dispatch = useDispatch()

  



  return (
    <div className={classes.app} >
      <div className={classes.container}>
        <Navigator/>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/playlist" />
          </Route>
          <Route path="/playlist" exact>
            <Playlist />
          </Route>
          <Route path="/deleted-songs" exact>
            <DeletedSongs />
          </Route>
        </Switch>
        <Player />
      </div>
    </div>
  );
}

export default App;
