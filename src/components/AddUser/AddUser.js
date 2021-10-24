import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/users";
    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       alert("Successfully added The User");
    //     }
    //   });
    const postUser = async () => {
      try {
        const res = await axios.post(url, data);
        if (res.data.insertedId) {
          alert("Successfully added The User");
        }
      } catch {}
    };
    postUser();
  };

  console.log(watch("name"));
  return (
    <div>
      <h1>Add Users</h1>
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="" placeholder="Name" {...register("name")} />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <br />
        <input
          placeholder="quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span style={{ color: "red" }}>
            {" "}
            <small>This field is required</small>{" "}
          </span>
        )}
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddUser;
