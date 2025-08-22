import "./App.css";
import ComponentWithContext from "./components/mockContext/ComponentWithContext";
import ParentWithAction from "./components/mockStore/ParentWithAction";

function App() {
  return (
    <div className="App">
      <main
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "pink" }}>
          <ComponentWithContext defaultText="Context1" />
          <ComponentWithContext defaultText="Context2" clickable />
        </div>
        <div style={{ flex: 1, backgroundColor: "lightblue" }}>
          <ParentWithAction defaultText="Store1" />
          <ParentWithAction defaultText="Store2" clickable />
        </div>
      </main>
    </div>
  );
}

export default App;
