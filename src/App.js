import "./App.css";
import { useState } from "react";
import CalCard from "./CalCard";
import Calories from "./fooditems";

export default function App() {
  const [data, setData] = useState(Calories);
  return (
    <div className="app">
      <div className="container">
        {data.length ? (data.map(({ calory, source, food, id }) => (
            <CalCard
              key={id}
              calory={calory}
              data={data}
              source = {source}
              setData={setData}
              food={food}
              id={id}
            />
          ))) : (
          <h1 className="nothing">Nothing Here ;(</h1>
        )}
      </div>
    </div>
  );
}