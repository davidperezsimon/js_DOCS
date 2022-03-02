export default function App() {
  const users = [
    { id: 1, name: "Pepe" },
    { id: 2, name: "Juan" }
  ];

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const users = props.users;
    const listItems = users.map((user) => (
      <ListItem key={user.id.toString()} value={user.name} />
    ));
    return <ul>{listItems}</ul>;
  }

  return (
    <div className="App">
      <NumberList users={users} />
    </div>
  );
}
