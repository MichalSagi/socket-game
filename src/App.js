import React from "react";
import Login from "./components/Login";
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from "./components/Dashboard";
 
function App() {
  const [user, setUser] = useLocalStorage('user');

  return (
    <>
      { user ? <Dashboard user={user} /> :  <Login onUserSubmit={setUser} />}
    </>
  );
}

export default App;
