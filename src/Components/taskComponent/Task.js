import "./styleTask.css";
import box from "./imgforTask/empty.png"
import trash from "./imgforTask/trashimg.png"
import completed from "./imgforTask/completed.png"
import { useState } from "react";

function Task(props) {
    const [isTick, setTick] = useState(false);
  const CurrentDate = new Date();
  const CurrentDay = CurrentDate.toLocaleDateString("en-US");
  const clock = CurrentDate.toLocaleTimeString();

  return (
    <div index={props.index} className="task">
      <div className="name">
        <p className="head">{props.name}</p>
        <p className="time">{clock}</p>

      </div>
      <div className="functions">
     <img src={isTick ? completed : box} onClick={() => {
        setTick(!isTick);
     }}/>
     <img onClick={props.delete} src={trash}/>

      </div>
    </div>
  );
}

export default Task;
