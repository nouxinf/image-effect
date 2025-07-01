import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkModeToggle from "../components/DarkModeToggle";

function SpeechBubble() {
    const [output, setOutput] = useState(null);
    const [file, setFile] = useState(null);
    const [bubble, setBubble] = useState('left');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.setAttribute('data-bs-theme', 'dark');
        } else {
            html.removeAttribute('data-bs-theme');
        }
    }, [darkMode]);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleBubble = (e) => {
        setBubble(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = reader.result;
            const endpoint = bubble === 'left' ? 'http://localhost:5000/api/speechbubbleleft' : 'http://localhost:5000/api/speechbubbleright';
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: base64 })
            });
            const data = await res.json();
            setOutput(data.image);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={`container mt-5${darkMode ? ' bg-dark text-light' : ''}`} style={{ minHeight: '100vh' }}>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <h1 className="mb-5">Speech Bubble</h1>
            <form onSubmit={handleSubmit} className={`card p-4`}>
                <div className="mb-3">
                    <input type="file" className="form-control" onChange={handleFile} />
                </div>
                <div className="mb-3">
                    <label className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="bubble" value="left" checked={bubble === 'left'} onChange={handleBubble} />
                        Left Bubble
                    </label>
                    <label className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="bubble" value="right" checked={bubble === 'right'} onChange={handleBubble} />
                        Right Bubble
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {output && (
                <div className="mt-4 text-center">
                    <img src={output} alt="Processed" className="img-fluid rounded shadow" style={{ maxWidth: '400px' }} />
                </div>
            )}
        </div>
    );
}

export default SpeechBubble;
