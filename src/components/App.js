import './App.css';
import {Routes, Route} from "react-router-dom";
import {MainPage} from "../pages/main";
import {PhotosContainer} from "../pages/photos";
import {CounterContainer} from "../pages/counter";
import {Lifecycle} from "../pages/lifecycle";
import {HomeworkPage} from "../pages/homework";
import {Photo} from "../pages/photos/Photo";
import {Form} from "../pages/forms";
import {MyContext} from "../pages/context";
import {Portals} from "../pages/portal";
import {Hooks} from "../pages/hooks";

function App() {


  return (
    <div className="App">
       <Routes>
           <Route path="/" exact element={<MainPage />} />
           <Route path="/photos" exact element={<PhotosContainer />} />
           <Route path="/photos/:id" element={<Photo />} />
           <Route path="/counter" element={<CounterContainer />} />
           <Route path="/lifecycle" element={<Lifecycle />} />
           <Route path="/homework" element={<HomeworkPage />} />
           <Route path="/forms" element={<Form />} />
           <Route path="/context" element={<MyContext />} />
           <Route path="/portals" element={<Portals />} />
           <Route path="/hooks" element={<Hooks />} />
       </Routes>
    </div>
  );
}

export default App;
