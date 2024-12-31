function KeyExample() {
    const fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Date" },
        { id: 5, name: "Elderberry" },
    ];

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px"}}>
                <h1>Keys Example</h1>

                <ul style={{ listStyle: "none"}}>
                    {fruits.map((fruit) => (
                        <li key={fruit.id} style={{ fontSize: "18px", margin: "5px 0" }}>
                            {fruit.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default KeyExample;
