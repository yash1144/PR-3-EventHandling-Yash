import { useRef } from "react";

function RefExample() {
    const inputRef = useRef(null);
    const handleClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Refs Example</h1>

                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type something..."
                    style={{ padding: "10px", fontSize: "16px", width: "250px", margin: "10px 0" }}
                />

                <div>
                    <button
                        onClick={handleClick}
                        style={{
                            padding: "10px 20px",
                            margin: "5px",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default RefExample;
