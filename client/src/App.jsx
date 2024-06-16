import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './index.css'; // Import the Tailwind CSS
import Dashboard from './components/Dashboard';
import Investments from './components/Investments';
import Marketplace from './components/Marketplace';
import Transactions from './components/Transactions';

const App = () => {
    return (
        <Router>
            <div className="flex bg-black"> 
                <Sidebar />
                <div className="flex-grow ml-64"> {/* Added ml-64 for 64px margin on the left */}
                    <Routes>
                        <Route path="/"  element={<Dashboard/>} />
                        <Route path='/investments' element={<Investments/>}/>
                        <Route path='/marketplace' element={<Marketplace/>}/>
                        <Route path='/transactions' element={<Transactions/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
