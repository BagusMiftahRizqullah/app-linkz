import React, { useState, useEffect } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login(props) {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const randomString =
      Math.random().toString(20).substring(2, 14) +
      Math.random().toString(20).substring(2, 14);

    const deviceID = `UID${randomString}`;
    console.log("deviceID", deviceID);

    let loginFields = {
      email: loginState["email-address"],
      password: loginState["password"],
      uid: deviceID,
    };

    console.log("LOGIN DATA", loginFields);
    const endpoint = `http://localhost:3333/user/signin`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFields),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("dataLOGIN", data);
        dispatch({
          type: "SET_USER",
          payload: data.data,
        });
        console.log("GONAvigate");
        navigate("/dasboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
