import "./list.css";
import Task from "../taskComponent/Task";
import add from "../listComponent/listimgs/addimg.png";
import { useState } from "react";
import { render } from "@testing-library/react";
function List(props) {
  const [addition, setaddition] = useState([]);
  const [value, setValue] = useState(null);
  const [inpvalue, setinpValue] = useState(null);

  console.log(addition);

  function handle(e) {
    console.log(e.target.parentElement);
    let parent = e.target.parentElement;
    let grandParent = parent.parentElement;
    grandParent.remove();
    // setaddition(['coffe']);
  }
  return (
    <div className="list">
      <div className="input">
        <input
          value={inpvalue}
          placeholder="Note"
          onChange={(e) => {
            setValue(e.target.value);
            setinpValue(e.target.value);
          }}
        />
        <img
          onClick={() => {
            if (value === null) {
              alert("No Name included");
            } else {
              setaddition([...addition, value]);
              setinpValue("");
              setValue(null);
            }
          }}
          src={add}
        />
      </div>
      {addition.map((item, index) => {
        console.log(item);
        return <Task name={item} delete={handle} index={index} />;
      })}
    </div>
  );
}

export default List;
