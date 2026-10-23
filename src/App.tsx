import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // const [alertVisibile, setAlertVisibility] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      {/* {alertVisibile && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>My Button</Button> */}
      <ListGroup items={items} heading="Miami" onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}

export default App;
