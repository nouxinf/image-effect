import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkModeToggle from "../components/DarkModeToggle";
import Header from "../components/Header";

function Deepfry() {
    const [output, setOutput] = useState(null);
    const [file, setFile] = useState(null);
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
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = reader.result;

            const res = await fetch('http://localhost:5000/api/deepfry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: base64
                })
            });

            const data = await res.json();
            setOutput(data.image);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
        <Header />
        <div className={`container mt-5${darkMode ? ' bg-dark text-light' : ''}`} style={{ minHeight: '100vh' }}>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <h1 className="mb-5">Deepfry Image</h1>
            <form onSubmit={handleSubmit} className="card p-4">
                <div className="mb-3">
                    <input type="file" className="form-control" onChange={handleFile} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {output && (
                <div className="mt-4 text-center">
                    <img src={output} alt="Processed" className="img-fluid rounded shadow" style={{ maxWidth: '400px' }} />
                </div>
            )}
        </div>
        </>
    );
}

export default Deepfry;
