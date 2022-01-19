import './App.css';
import {Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/main";
import {PhotosContainer} from "./pages/photos";
import {CounterContainer} from "./pages/counter";
import {Lifecycle} from "./pages/lifecycle";
import {HomeworkPage} from "./pages/homework";

function App() {


  return (
    <div className="App">
       <Routes>
           <Route path="/" exact element={<MainPage />} />
           <Route path="/photos" element={<PhotosContainer />} />
           <Route path="/counter" element={<CounterContainer />} />
           <Route path="/lifecycle" element={<Lifecycle />} />
           <Route path="/homework" element={<HomeworkPage />} />
       </Routes>
    </div>
  );
}

export default App;
