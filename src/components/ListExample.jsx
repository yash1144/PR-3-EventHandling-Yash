function ListExample() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>List Example</h1>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index} style={{ fontSize: "18px", margin: "5px 0", listStyle: "none" }}>
                            {fruit}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ListExample;
