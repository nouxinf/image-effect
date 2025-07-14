import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpeechBubble from './pages/SpeechBubble';
import Home from "./pages/Home";
import Stretch from "./pages/Stretch";
import Deepfry from "./pages/Deepfry"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/deepfry" element={<Deepfry />} />
                <Route path="/speechbubble" element={<SpeechBubble />} />
                <Route path="/stretch" element={<Stretch />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
