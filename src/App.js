import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataUpload from './DataUpload';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/upload/:temp/:humd/:noise/:room1/:room2/:book" element={<DataUpload/>} />
            </Routes>
        </Router>
    );
}

export default App;
