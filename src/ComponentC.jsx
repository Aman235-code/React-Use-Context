import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";
// consumer component
function ComponentC() {
  const { user } = useContext(UserContext);
  const { email } = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`lola ${user}`}</h2>
      <h2>hello {email}</h2>
      <ComponentD />
    </div>
  );
}
export default ComponentC;
