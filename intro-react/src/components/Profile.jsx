import styles from "../styles/Profile.module.css";

const Profile = ({ name = "name", lastname = "lastname" }) => {
  name = "Jack";

  const shouldShow = true;

  return (
    shouldShow && (
      <div className={`${name === "Vangel" ? styles.container : ""}`}>
        <h1>{`${name} ${lastname}`}</h1>
        <h2>Name: {name}</h2>
        <h2>Lastname: {lastname}</h2>

        {shouldShow && <p>Hello students</p>}
      </div>
    )
  );
};

export default Profile;

// export { Profile };

// function Profile() {
//     return(
//         <>
//         </>
//     )
// }
