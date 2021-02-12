import style from "./display.module.css"

function Display(props){
        return (
        <div className={style.display}>
            {props.timer.hours.toString().padStart(2,0)}:{props.timer.minutes.toString().padStart(2,0)}:{props.timer.seconds.toString().padStart(2,0)}
        </div>
    )
}

export default Display;

