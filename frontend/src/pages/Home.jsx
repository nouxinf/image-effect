import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechBubbleExampleImg from "../assets/speechbubbleexample.png";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            <DarkModeToggle />
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Welcome to ImageEffect</h1>
                <p className="lead">Enhance your images with a variety of creative filters and effects, including speech bubbles, color adjustments, and more!</p>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-4" onClick={() => navigate('/speechbubble')}>
                    <div className="card h-100 shadow-sm">
                        <img src={SpeechBubbleExampleImg} className="card-img-top" alt="Speech Bubble" />
                        <div className="card-body">
                            <h5 className="card-title">Speech Bubble</h5>
                            <p className="card-text">Add left or right speech bubbles to your images.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Color Filters" />
                        <div className="card-body">
                            <h5 className="card-title">Color Filters</h5>
                            <p className="card-text">Apply grayscale, sepia, or vibrant color filters to transform your photos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Blur & Sharpen" />
                        <div className="card-body">
                            <h5 className="card-title">Blur & Sharpen</h5>
                            <p className="card-text">Easily blur or sharpen your images to highlight or soften details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
