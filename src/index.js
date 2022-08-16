import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Topo from './pages/Topo'
import Local from './pages/Local'
//import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Topo />}>
                    <Route path="" element={<Home />} />
                    <Route path="local" element={<Local />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
