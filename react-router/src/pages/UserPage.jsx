import { Link, useLoaderData } from "react-router";

export const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
};

export const UserPage = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link to="/add-user">Add user</Link>
    </div>
  );
};
