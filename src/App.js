import logo from './logo.svg';
import './App.css';
import { MyComponents } from "./components/MyComponents";
import {List} from "./components/List";
import {Lificycles} from "./components/Lificycles";
import {Timer} from "./components/Timer";
import {ButtonReduxContainer} from "./components/ButtonRedux";

function App() {
    const getData = () => {
        return "Some data";
    };

  return (
    <div className="App">
      <MyComponents.Header logo={logo}/>
        <MyComponents.Body />
        <MyComponents.Section
            text="Some text"
            isDefault
            count={2 * 5}
            user={{ name: "John", age: 34 }}
            data={getData()}
        />
        <Lificycles />
        <List.UsersList />
        <Timer />
        <ButtonReduxContainer />
    </div>
  );
}

export default App;
