import React from "react";
import UserList from "./UserList";
import "./App.css"; // You can style your app in App.css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React API Example</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
