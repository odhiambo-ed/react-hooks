import {useState} from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newGuy = people.filter((person) => person.id !== id);
    setPeople(newGuy);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
