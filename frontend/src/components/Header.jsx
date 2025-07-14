import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/">ImageEffect</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/speechbubble">Speech Bubble</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/stretch">Stretch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/deepfry">Deepfry</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
