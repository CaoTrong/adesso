import {useState} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom";
import './App.css'
import {RegisterForm} from "./components/RegisterForm";
import {Logo} from "./components/Logo";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";

function App() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar bg-color-nav w-full flex justify-center">
                <div className="container">
                    <div className="flex-none">
                        <a className="btn btn-block btn-ghost ">
                            <Logo className="w-40 h-10"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <Routes>
                    <Route path="/">
                        Hello world
                    </Route>
                    <Route path="/login" element={<Login navigate={navigate}/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<RegisterForm/>}/>
                    <Route path="/onboard" element={<RegisterForm/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App
