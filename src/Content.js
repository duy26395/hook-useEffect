import { useEffect, useState } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const action = ["posts", "comments", "todos"];
  const [type, setType] = useState("posts");
  const [showtop, setTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((response) => {
      response.json().then((res) => {
        setData(res);
      });
    });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setTop(true);
      } else {
        setTop(false);
      }
      // setTop(window.scrollY)
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScrolly = () => {
    setTop(false);
    window.scrollTo(0, 0);
  };

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
      {showtop && (
        <button
          onClick={() => handleScrolly()}
          style={{ position: "fixed", right: 20, bottom: 20 }}
        >
          top
        </button>
      )}
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title || item.email}</li>;
        })}
      </ul>
    </div>
  );
}
export default Content;
