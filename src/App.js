import './App.css';
import Greet from "./components/fundamentals/Greet";
import Parent from "./components/fundamentals/Parent";
import Form from "./components/fundamentals/Form";
import ClickHandler from "./components/fundamentals/ClickHandler";
import NameList from './components/fundamentals/NameList';
import UserGreeting from './components/fundamentals/UserGreeting';

import MouseEventContainer from './components/hooks/2.useEffect/MouseEventContainer';
import { HookCounter } from './components/hooks/1.useState/HookCounter';
import HookCounterList from './components/hooks/1.useState/HookCounterList';
import HookInput from './components/hooks/1.useState/HookInput';

import Clicktitle from './components/hooks/2.useEffect/Clicktitle';
import { MouseEvent } from './components/hooks/2.useEffect/MouseEvent';


function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Learn React</h1>
      <h1>Fundamentals</h1>
      <Greet firstName="Anya" lastName="Forger">
        <ClickHandler />
        <Parent />
        <MouseEventContainer />
        <Form />
        <NameList />
      </Greet>
      <br/>
      <UserGreeting />
      <br/>
      <h1>Hooks</h1>
      <HookCounter/>
      <br/>
      <br/>
      <HookCounterList/>
      <HookInput/>
      <br/>
      <Clicktitle />
    </div>
  );
}

export default App;

