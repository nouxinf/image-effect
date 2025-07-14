import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechBubbleExampleImg from "../assets/speechbubbleexample.png";
import StretchExampleImg from "../assets/stretchexample.png";
import DeepfryExampleImg from "../assets/deepfryexample.png";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import Header from "../components/Header";

export default function Home() {
    const navigate = useNavigate();
    const [showAttribution, setShowAttribution] = useState(false);
    return (
        <>
        <Header />
        <div className="container py-5">
            <DarkModeToggle />
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Welcome to ImageEffect</h1>
                <p className="lead">Enhance your images with a variety of creative filters and effects, including speech bubbles, color adjustments, and more!</p>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-md-4" onClick={() => navigate('/speechbubble')}>
                    <div className="card h-100 shadow-sm">
                        <img src={SpeechBubbleExampleImg} className="card-img-top" alt="cyclops Ed sheeran holding a corn dog in the shower with a speech bubble above him" />
                        <div className="card-body">
                            <h5 className="card-title">Speech Bubble</h5>
                            <p className="card-text">Add left, right or centre speech bubbles to your images.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm position-relative">
                        <img src={StretchExampleImg} className="card-img-top" alt="Stretched picutre of an Edinburgh Tram" onClick={() => navigate("/stretch")} style={{ cursor: 'pointer' }} />
                        <button
                            className="btn btn-info btn-sm position-absolute top-0 end-0 m-2"
                            onClick={e => { e.stopPropagation(); setShowAttribution(true); }}
                        >
                            Attribution
                        </button>
                        <div className="card-body">
                            <h5 className="card-title">Stretch image</h5>
                            <p className="card-text">Stretch your photos by a custom amount</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" onClick={() => navigate("/deepfry")}> 
                    <div className="card h-100 shadow-sm">
                        <img src={DeepfryExampleImg} className="card-img-top" alt="Blur & Sharpen" />
                        <div className="card-body">
                            <h5 className="card-title">Deep fry</h5>
                            <p className="card-text">Deep fry an image</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Attribution Modal */}
            {showAttribution && (
                <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Image Attribution</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAttribution(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p><a href="https://commons.wikimedia.org/wiki/File:Edinburgh_tram_03.jpg" >"Edinburgh tram 03"</a> by <a href="https://commons.wikimedia.org/wiki/User:Ad_Meskens" >Foto Ad Meskens</a>, used under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">Creative Commons Attribution-Share Alike 3.0 Unported</a>. The image is streched.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowAttribution(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}
