export default function App() {
    const numbers = [
      { id: 1, name: "Pepe" },
      { id: 2, name: "Juan" }
    ];
    const listItems = numbers.map((user) => 
      <li key={user.id}>{user.name}</li>
    );
  
    return (
      <div className="App">
        <ul>{listItems}</ul>
      </div>
    );
  }