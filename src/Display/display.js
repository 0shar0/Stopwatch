import style from "./display.module.css"

function Display(props){
        return (
        <div className={style.display}>
            {props.times.hours.toString().padStart(2,0)}:{props.times.minutes.toString().padStart(2,0)}:{props.times.seconds.toString().padStart(2,0)}
        </div>
    )
}

export default Display;

