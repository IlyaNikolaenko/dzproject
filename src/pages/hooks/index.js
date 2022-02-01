import React, {useState, useEffect, useRef} from "react";

export const Hooks = () => {
    const  [count, setCount] = useState(0);
    const [obj, setObj] = useState({name:'John', age: 43});
    const [posts, setPosts] = useState([]);
    const countRef = useRef(8);

    countRef.current = 10;

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log(error));
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        setObj({...obj, age:12});
    }

    useEffect(() => {
        const handleClickBody = () => {
            console.log(56);
        }
        document.body.addEventListener('click', handleClickBody);
        return () => {
            document.body.removeEventListener('click', handleClickBody);
        }


    })

    return (
        <>
            <p>You have clicked {count} times</p>
            <button onClick={handleClick}>Click me!</button>
            <div>
                {posts.map((item) => (
                    <div key={item.id}>
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}