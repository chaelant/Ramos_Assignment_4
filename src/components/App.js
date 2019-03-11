import React from "react";
import Main from "./main_component";

export default function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-light">
                <h1>Welcome to the Translator!</h1>
            </nav>
            <main>
                <div className="container">
                    <h2></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <Main />
                    </div>
                </div>
            </main>
        </div>
    );
}
