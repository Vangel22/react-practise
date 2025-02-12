import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import api, { token, cancel } from "../axios/api";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      });

      console.log("response fetch", res);

      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const postData = async () => {
    try {
      const user = {
        name: "John",
        username: "Doe",
      };

      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("New user added: ", data);
        // setUsers depends on how you want to fetch the users
        // setUsers([...users, data]);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((res) => res)
  //   .catch((err) => console.log(err));

  const loadData = async () => {
    try {
      //axios.get
      const res = await api.get("", {
        cancelToken: cancel,
      });

      setTimeout(() => cancel("Request timeout after 2 seconds", 2000));

      if (res.data) {
        setUsers(res.data);
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Error message: ", err.message);
      }
      console.log(err);
    }
  };

  const postAxiosData = async () => {
    try {
      const user = {
        name: "John",
        username: "Doe",
      };

      // axios.post
      const res = await api.post("", user);

      console.log("res", res);

      if (res.data) {
        // setUsers(res.data);
        setUsers([...users, res.data]);
        // loadData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetchData();
    loadData();
  }, []);

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={postAxiosData}>Add user</button>
    </>
  );
}

export default App;
