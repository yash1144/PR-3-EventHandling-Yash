import { useState } from "react";

function PassArgumentsExample() {
    const [message, setMessage] = useState("");

    const handleButtonClick = (name, action) => {
        setMessage(`Hello from ${name}, you clicked ${action}!`);
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Passing Arguments to Event Handlers</h1>

                <p>{message}</p>

                <button
                    onClick={() => handleButtonClick("Button 1", "Button 1")}
                    style={{
                        padding: "10px 20px",
                        margin: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Button 1
                </button>
                <button
                    onClick={() => handleButtonClick("Button 2", "Button 2")}
                    style={{
                        padding: "10px 20px",
                        margin: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Button 2
                </button>
            </div>
        </>
    );
};

export default PassArgumentsExample;
