import { useState } from 'react';

function App() {
    const [output, setOutput] = useState(null);

    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64 = reader.result;

            const res = await fetch('http://localhost:5000/api/speechbubble', {
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
        <div>
            <h1>Upload Image</h1>
            <input type="file" onChange={handleFile} />
            {output && <img src={output} alt="Processed" style={{ maxWidth: '400px' }} />}
        </div>
    );
}

export default App;
