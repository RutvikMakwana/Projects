import "./App.css";

const classOfMca = [
  { id: "1", EnNo: "4001", Name: "Ajay" },
  { id: "2", EnNo: "4002", Name: "Ahish" },
  { id: "1", EnNo: "4001", Name: "Dhaval" },
];

function App() {
  const listItems = classOfMca.map((grp) => {
    const nameNo = `${grp.Name} - ${grp.EnNo}`;
    return <li>{nameNo}</li>;
  });

  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
