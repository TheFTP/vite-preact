// Dependencies
import { render } from 'preact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/Globals.css'

// Pages
import Index from './pages/Index.jsx'

const Main = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    </Router>
);

render(<Main />, document.getElementById('app'));
