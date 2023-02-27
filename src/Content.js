import { useEffect, useState } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const action = ["posts", "comments", "todos"];
  const [type, setType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((response) => {
      response.json().then((res) => {
        setData(res);
      });
    });
  }, [type]);

  return (
    <div style={{ margin: 30 }}>
      <h1>{title}</h1>
      <div>
        {action.map((item, index) => (
          <button
            key={index}
            onClick={() => setType(item)}
            style={
              type === item ? { color: "#0454", backgroundColor: "#fff" } : {}
            }
          >
            {item}
          </button>
        ))}
      </div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title || item.email}</li>;
        })}
      </ul>
    </div>
  );
}
export default Content;
