import React from "react";
import First from "./first_component";

export default function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <h1>This is some text</h1>
            </nav>
            <main>
                <h2>Welcome to the App!</h2>
                <div className="container">
                    <div className="row">
                        <First />
                    </div>
                </div>
            </main>
        </div>
    );
}
