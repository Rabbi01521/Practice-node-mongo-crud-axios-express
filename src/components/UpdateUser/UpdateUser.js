import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleName = (e) => {
    const updateName = e.target.value;
    const updateUser = {
      name: updateName,
      price: user.price,
      quantity: user.quantity,
    };
    setUser(updateUser);
  };

  const handlePrice = (e) => {
    const updatePrice = e.target.value;
    const updateUser = {
      name: user.name,
      price: updatePrice,
      quantity: user.quantity,
    };
    setUser(updateUser);
  };

  const handleQuantity = (e) => {
    const updateQuantity = e.target.value;
    const updateUser = {
      name: user.name,
      price: user.price,
      quantity: updateQuantity,
    };
    setUser(updateUser);
  };

  const handleUpdate = (e) => {
    const url = `http://localhost:5000/users/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       alert("Updated Successfully");
    //       setUser({});
    //     }
    //   });
    const updateUser = async () => {
      try {
        const res = await axios.put(url, user);
        if (res.data.modifiedCount > 0) {
          alert("Updated Successfully");
          setUser({});
        }
      } catch {}
    };
    updateUser();
    e.preventDefault();
  };
  return (
    <div>
      <h1>
        update: {user.name} :: {user.price} :: {user.quantity}
      </h1>
      <p>
        <small>{id}</small>
      </p>
      <form onSubmit={handleUpdate}>
        <input type="text" value={user.name || ""} onChange={handleName} />
        <input
          type="number"
          name=""
          id=""
          value={user.price || ""}
          onChange={handlePrice}
        />
        <input
          type="number"
          name=""
          id=""
          value={user.quantity || ""}
          onChange={handleQuantity}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
