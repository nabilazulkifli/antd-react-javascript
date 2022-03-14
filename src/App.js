import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [theme, setTheme] = useState('PURPLE');

  useEffect(() => {
    if (theme === "DEFAULT") {
      require('./theme/default/defaultTheme.less')
    } else {
      require('./theme/purple/purpleTheme.less')
    }
  }, [theme]);

  return (
    <>
      <h1>Header</h1>
    </>
  );
}

export default App;
