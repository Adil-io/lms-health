import "./App.css";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  const [date, setDate] = useState([]);

  return (
    <div className="App">
      <Button>Click Me</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}

export default App;
