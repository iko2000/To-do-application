import "./clockStyle.css";

function Clock(props) {


  
  return (
    <div className="mainDiv">
      <div>
        <p className="day">{props.currentDay}</p>
        <p className="clock">{props.clock}</p>
      </div>
    </div>
  );
}

export default Clock;
