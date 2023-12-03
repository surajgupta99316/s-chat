
import './App.css';
import { BrowserRouter as Route, Routes } from "react-router-dom";
//import Join from "./component/Join/Join";
//import Chat from "./component/Chat/Chat"
import Test from './Test';




function App() {
  return (

    <Routes>
      <Route path="/" element={<Test />} />

    </Routes>

  );
}

export default App;
