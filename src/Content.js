import { useEffect, useState } from "react";


function Content() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json().then(res => {
                    setData(res)
                })
            })
    }, [])

    return (
        <div style={{ margin: 30 }}>
            <h1>
                {title}
            </h1>
            <input onChange={e => setTitle(e.target.value)} />
            <ul>
                {data.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}
export default Content;