import { useEffect, useState } from "react";

export const TrafficLight = () => {
  const [light, setLight] = useState("red");
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const cycleLights = () => {
      if (light === "red") {
        setTimeout(() => setLight("yellow"), 2000);
      } else if (light === "yellow") {
        setTimeout(() => setLight("green"), 1000);
      } else if (light === "green") {
        setTimeout(() => setLight("red"), 2000);
      }
    };

    cycleLights();
  }, [light]);

  useEffect(() => {
    if (light === "yellow") {
      const interval = setTimeout(() => setBlink((prev) => !prev), 500);

      // cleanup fuction
      return () => {
        clearInterval(interval);
      };
    } else {
      setBlink(false);
    }
  }, [light]);

  console.log("something...");
  console.log("..............");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>
        {light === "red" && <span style={{ color: "red" }}>Stop!</span>}
        {light === "yellow" && (
          <span style={{ color: "yellow" }}>Prepare or pass with caution!</span>
        )}
        {light === "green" && <span style={{ color: "green" }}>Go!</span>}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: light === "red" ? "red" : "gray",
              marginBottom: "5px",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: light === "yellow" ? "yellow" : "gray",
              marginBottom: "5px",
              opacity: blink ? 0.5 : 1,
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: light === "green" ? "green" : "gray",
              marginBottom: "5px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
