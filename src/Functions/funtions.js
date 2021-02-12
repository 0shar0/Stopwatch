import {timer} from "./data";
import '../index.css';
import {reRender} from "./reRender";
import {fromEvent, interval} from "rxjs";
import {map} from "rxjs/operators";

let isStop = true

const steram = interval(1000)
    .pipe(
        map(() => {
            timer.seconds++
            if (timer.seconds === 60) {
                timer.minutes++
                timer.seconds = 0
            }
            if (timer.minutes === 60) {
                timer.hours++
                timer.minutes = 0
            }
        }))

let time = steram

export function reset() {
    timer.seconds = 0
    timer.minutes = 0
    timer.hours = 0
    reRender(timer)
    if(isStop){
        time = time.subscribe(() => {
            reRender(timer)
        })
        isStop = !isStop
    }
}

export function startStop() {
    if (isStop) {
        time = time.subscribe(() => {
            reRender(timer)
        })
        isStop = !isStop
    } else {
        time.unsubscribe()
        time = steram
        isStop = !isStop
        timer.seconds = 0
        timer.minutes = 0
        timer.hours = 0
        reRender(timer)
    }
}

export function pause() {
    if (!isStop) {
        let wait = fromEvent(document.getElementById('wait'),'click')
            .subscribe(()=> {
                time.unsubscribe()
                time = steram
                isStop = !isStop
            })
        setTimeout(()=>wait.unsubscribe(),300)
    }
}
