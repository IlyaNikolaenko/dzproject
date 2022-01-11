import logo from './logo.svg';
import './App.css';
import { MyComponents } from "./components/MyComponents";
import {List} from "./components/List";

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
        <List.UsersList />
    </div>
  );
}

export default App;
