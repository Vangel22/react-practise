import { useNavigate, useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //   This is two parameters example
  // const {id,test} = useParams();
  //   function getSingleUser() {
  //     fetch(`https://someapi/user/${id}`)
  //   }

  return (
    <h1>
      User {id}
      {/* {test} */}
      {/* <button onClick={() => navigate("/users")}>Back</button> */}
      <button onClick={() => navigate(-1)}>Back</button>
    </h1>
  );
};

export { User };
