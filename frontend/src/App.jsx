import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpeechBubble from './pages/SpeechBubble';
import Home from "./pages/Home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/speechbubble" element={<SpeechBubble />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
