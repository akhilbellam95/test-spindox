import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/avatar";
import CenteredTabs from "./components/tabs/tabs";

import { getUser } from "./utils/user";

function App() {
  const url = "https://randomuser.me/api";
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = async () => {
      const a = await getUser(url);
      setUser(a.results[0]);
    };
    userData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {user !== undefined && (
          <div>
            <Avatar data={user}></Avatar>
            <CenteredTabs data={user}></CenteredTabs>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
