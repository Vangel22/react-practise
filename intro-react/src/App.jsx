import MyProfile from "./components/Profile";

// function App() {
//   return (
//     <>
//       <MyProfile />
//     </>
//   );
// }

function App() {
  // const name = "Vangel";
  // const lastname = "Hristov";

  const array = [1, 2, 3, 4];

  array.map((el, index) => console.log("element", el, index));
  // 0 1 2 3
  // 0 1 2

  // Pure function
  // function double(number) {
  //   number = Math.random();
  //   return number * 2;
  // }

  return <MyProfile />;
}

export default App;
