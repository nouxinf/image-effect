document.getElementById('imgForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('imgInput');
    const file = fileInput.files[0];
    if (!file) return;

    // Get selected bubble direction
    const bubble = document.querySelector('input[name="bubble"]:checked').value;

    const reader = new FileReader();
    reader.onload = async function () {
        const base64Image = reader.result;

        // Use the selected bubble direction in the API endpoint
        const endpoint = bubble === 'left' ? '/api/speechbubbleleft' : '/api/speechbubbleright';

        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: base64Image })
        });

        const data = await res.json();
        if (data.image) {
            document.getElementById('result').src = data.image;
        }
    };

    reader.readAsDataURL(file);
});