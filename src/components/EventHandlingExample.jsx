import { useState } from "react";

function EventHandlingExample() {
    const [count, setCount] = useState(0);
    const [hoverMessage, setHoverMessage] = useState("Hover over me!");
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleDoubleClick = () => {
        setCount(count - 1);
    };

    const handleMouseOver = () => {
        setHoverMessage("Thanks for hovering!");
    };

    const handleMouseOut = () => {
        setHoverMessage("Hover over me!");
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>React Event Handling</h1>

                <h2>Click Count: {count}</h2>
                <button
                    onClick={handleClick}
                    onDoubleClick={handleDoubleClick}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        margin: "10px",
                        cursor: "pointer",
                    }}
                >
                    Click Me (Double-click to Decrease)
                </button>

                <h2
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        margin: "20px 0",
                        padding: "10px",
                        border: "1px solid black",
                        display: "inline-block",
                    }}
                >
                    {hoverMessage}
                </h2>

                <div style={{ marginTop: "20px" }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                        style={{
                            padding: "10px",
                            fontSize: "16px",
                            width: "250px",
                            textAlign: "center",
                        }}
                    />
                    <h3>You Typed: {inputValue}</h3>
                </div>
            </div>
        </>
    );
};

export default EventHandlingExample;
