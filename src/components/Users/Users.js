import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setProducts(res.data);
      } catch {}
    };
    // fetch("http://localhost:5000/users")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    // app.get("http://localhost:5000/users").then(function (res) {
    //   // handle success
    //   setProducts(res.data);
    // });
    loadUser();
  }, []);

  // DELETE a product
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("ARE YOU SURE, YOU WANT TO DELETE?");
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`;
      // fetch(url, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.deletedCount > 0) {
      //       alert("deleted Successfully");
      //       const remainingProducts = products.filter(
      //         (product) => product._id !== id
      //       );
      //       setProducts(remainingProducts);
      //     }
      //   });
      const deleteUser = async () => {
        try {
          const res = await axios.delete(url);
          console.log(res);
          if (res) {
            alert("deleted Successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        } catch {}
      };
      deleteUser();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products Available: {products.length}</h1>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            Name:{product.name} :: Price:{product.price} :: Quantity:
            {product.quantity}
            <Link to={`users/update/${product._id}`}>
              <button>update</button>
            </Link>
            <button onClick={() => handleDeleteProduct(product._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
