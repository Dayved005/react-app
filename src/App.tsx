import Like from "./components/Like";

function App() {

  return (
    <div>
      <Like onClick={() => console.log("Like clicked!")} />
    </div>
  );
}

export default App;