import React from 'react';
import Header from './Header';
import Screen from './Screen';
import Main from './Main';
import "./App.css";
import {useSelector} from 'react-redux'
function App() {
  const theme = useSelector(state => state.theme.value)
  return (
    <div className={`app theme-${theme}`}>

        <Header />
        <Screen />
        <Main />
    </div>
  );
}

export default App;
