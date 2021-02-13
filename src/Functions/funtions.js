import {times} from "./data";
import '../index.css';
import {reRender} from "./reRender";
import {fromEvent, interval, timer} from "rxjs";
import {map} from "rxjs/operators";

let isStop = true

const steram = interval(1000)
    .pipe(
        map(() => {
            times.seconds++
            if (times.seconds === 60) {
                times.minutes++
                times.seconds = 0
            }
            if (times.minutes === 60) {
                times.hours++
                times.minutes = 0
            }
        }))

let time = steram

export function reset() {
    times.seconds = 0
    times.minutes = 0
    times.hours = 0
    reRender(times)
    /*if (isStop) {
        time = time.subscribe(() => {
            reRender(times)
        })
        isStop = !isStop
    }*/
}

export function startStop() {
    if (isStop) {
        time = time.subscribe(() => {
            reRender(times)
        })
        isStop = !isStop
    } else {
        time.unsubscribe()
        time = steram
        isStop = !isStop
        times.seconds = 0
        times.minutes = 0
        times.hours = 0
        reRender(times)
    }
}

export function pause() {
    if (!isStop) {
        let wait = fromEvent(document.getElementById('wait'), 'click')
            .subscribe(() => {
                time.unsubscribe()
                time = steram
                isStop = !isStop
            })
        timer(300)
            .pipe(
                map(() => {
                    wait.unsubscribe()
                })
            ).subscribe()
    }
}
