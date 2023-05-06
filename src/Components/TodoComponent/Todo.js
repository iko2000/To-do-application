import Clock from "../ClockComponent/Clock";
import "./todo.css";
import List from "../listComponent/List";



function Todo() {
    const CurrentDate = new Date();
    const CurrentDay = CurrentDate.toLocaleDateString("en-US");
    const clock = CurrentDate.toLocaleTimeString();

    return (
        <div className="todo">
       <Clock 
        currentDay={CurrentDay}
       clock={clock}
       />
     <List/>

        </div>
    )
}


export default Todo;