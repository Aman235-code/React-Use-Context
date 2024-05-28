// the data you want to pass is -> user , make it as a provider component

import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setuser] = useState("Aman");
  const [email, setemail] = useState("aman@gmail.com");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={{ user, email }}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
