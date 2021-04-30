import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from './components/header/Header';
import { ScreensListRoot } from './screens/list/Root';
import { ScreensAddEditRoot } from './screens/add-edit/Root'
import './styles/styles.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ScreensListRoot} />
	<Route exact path="/add" component={ScreensAddEditRoot} />
	<Route exact path="/edit/:id" component={ScreensAddEditRoot} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
