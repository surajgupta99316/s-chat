import './App.css';
import {Route , Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"

export default function Apps() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Join />}/>
                <Route path="/Chat" element={<Chat />}/>
            </Routes>
        </div>
    )
}