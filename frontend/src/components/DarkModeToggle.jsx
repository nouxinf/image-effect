import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(prefersDark);
        document.body.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.setAttribute("data-bs-theme", newMode ? "dark" : "light");
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    return (
        <div style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: 1000,
            backgroundColor: "var(--bs-body-bg)",
            border: "1px solid var(--bs-border-color)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem"
        }}>
            <Form className="d-flex align-items-center gap-2">
                <Form.Check 
                    type="switch"
                    id="dark-mode-switch"
                    label={darkMode ? "Dark Mode" : "Light Mode"}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
            </Form>
        </div>
    );
}