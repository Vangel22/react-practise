import styles from "../styles/Profile.module.css";

const Profile = () => {
  const name = "Vangel";
  const lastname = "Hristov";

  return (
    <div className={styles.container}>
      <h1>{`${name} ${lastname}`}</h1>
      <h2>Name: {name}</h2>
      <h2>Lastname: {lastname}</h2>
    </div>
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
