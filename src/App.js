import './App.css';
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/main";
import {PhotosContainer} from "./pages/photos";
import {CounterContainer} from "./pages/counter";
import {Lifecycle} from "./pages/lifecycle";
import {HomeworkPage} from "./pages/homework";
import {Photo} from "./pages/photos/Photo";
import {Form} from "./pages/forms";

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
       </Routes>
    </div>
  );
}

export default App;
