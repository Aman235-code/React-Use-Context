import { useContext } from "react";
import { UserContext } from "./ComponentA";
// consumer component
function ComponentD() {
  const { user } = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`By ${user}`}</h2>
    </div>
  );
}
export default ComponentD;
