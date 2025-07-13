// import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// const Home = () => {
//   // <h1>Home Section</h1>;
//   const [count, setCount] = useState(0);
//   useEffect( () => {
//    console.log("Program starts.")
//   }, [ count ]);
//   const increment = () => {
//     const result = count + 1;
//     setCount(result);
//   };
//   const decrement = () => {
//     const result = count - 1;
//     setCount(result);
//   };
//   return (
//     <div className="m-6">
//       <button onClick={increment}>+</button>
//       <p>{count}</p>
//       <button onClick={decrement}>-</button> 
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import NewCard from "../components/newCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await fetch("https://fakestoreapi.com/products");

      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
      }
    };
    fetchData();
  }, []);
  console.log("data......",data);

  const handleAddProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });

    if (res.ok) {
      alert("successfully added new product");
    }
  };

  return (
    <>
      <h1>Data Fetching</h1>
      <button onClick={handleAddProduct} className="bg-red-500 text-white p-2 m-4 rounded-md">
        Add new item
      </button>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <div>{item.description}</div>
            <div>{item.rating.rate}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;