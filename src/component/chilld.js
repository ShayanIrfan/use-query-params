import * as React from "react";

const Child = ({ qureyHandler }) => {
  React.useEffect(() => {
    console.log("child___>", "init");
  }, []);

  return (
    <div>
      <input type="text" onChange={qureyHandler} />
    </div>
  );
};

export default Child;
