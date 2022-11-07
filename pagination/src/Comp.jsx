import { useState } from "react";
import { useEffect } from "react";

function Comp() {
    const [products, setProducts] = useState([])
    const [start, setStart] = useState(0)

    useEffect(() => {
        console.log("asking for data");
    
        fetch("https://kea-alt-del.dk/t7/api/products?start=" + start)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            console.log(data);
        })
    }, [start])

    return (
        <div>
            {}
            <button onClick={() => setStart(oldValue => oldValue + 10)}>Next page</button>
        </div>
    )

}

export default Comp