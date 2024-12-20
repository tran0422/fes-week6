// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App