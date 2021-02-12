import style from "./buttons.module.css"

function Buttons(props){
    return(
        <div className='buttons'>
            <button className={style.buttons} id={'wait'} onClick={()=>{props.pause()}}>Wait</button>
            <button className={style.buttons} onClick={()=>{props.startStop()}}>Start/Stop</button>
            <button className={style.buttons} onClick={()=>{props.reset()}}>Reset</button>
        </div>
    )
}

export default Buttons
