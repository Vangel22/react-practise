import { Link } from "react-router";

export const UserList = () => {
  const users = [
    {
      id: 1,
      name: "vangel",
    },
    {
      id: 2,
      name: "john",
    },
    {
      id: 3,
      name: "jane",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        fontSize: "50px",
      }}
    >
      {users.map((user) => (
        <>
          <Link key={user.id} to={`/users/${user.id}`}>
            {user.name}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
};
