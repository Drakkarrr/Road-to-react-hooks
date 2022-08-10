import './App.css';
import React from "react";

// import Greet from "./components/fundamentals/Greet";
// import Form from "./components/fundamentals/Form";
// import ClickHandler from "./components/fundamentals/ClickHandler";
// import NameList from './components/fundamentals/NameList';
// import UserGreeting from './components/fundamentals/UserGreeting';

// import MouseEventContainer from './components/hooks/2.useEffect/MouseEventContainer';
// import { HookCounter } from './components/hooks/1.useState/HookCounter';
// import HookCounterList from './components/hooks/1.useState/HookCounterList';
// import HookInput from './components/hooks/1.useState/HookInput';

// import Clicktitle from './components/hooks/2.useEffect/Clicktitle';
// import CountTimer from './components/hooks/2.useEffect/CountTimer';

// import FetchDataList from './components/hooks/2.useEffect/FetchDataList';
// import FetchDataId from './components/hooks/2.useEffect/FetchDataId';
// import FetchDataButton from './components/hooks/2.useEffect/FetchDataButton';

// import ParentContext from './components/hooks/3.useContext/ParentContext';

// import CouterReducer from './components/hooks/4.useReducer/CouterReducer';
// import CouterReducerComplex from './components/hooks/4.useReducer/CouterReducerComplex';

import ParentComponent from './components/hooks/5.useCallback/ParentComponent';

export const FirstNameContext = React.createContext();
export const LastNameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Learn React</h1>
      {/* <h1>Fundamentals</h1>
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
      <CountTimer/> 
      <FetchDataList/>
      <FetchDataId/>
      <FetchDataButton/> */}
      
      {/* <FirstNameContext.Provider value={"Junrey"}>
        <LastNameContext.Provider value={"Lañas"}>
          <ParentContext/>
        </LastNameContext.Provider>
      </FirstNameContext.Provider> */}

      {/* <CouterReducer/> */}
      {/* <CouterReducerComplex/> */}

      <ParentComponent/>
    </div>
  );
}

export default App;

