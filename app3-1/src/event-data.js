import React from 'react'

export class EventData1 extends React.Component {
   
    onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }

    onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }

    render() {
        return (
            <div style={{textAlign:'center', marginTop:20}}>
                <button onClick={(ev) => this.onClickStartStop(ev)}>Start</button><br/><br/>
                <button onClick={(ev) => this.onClickAdd(ev)}>10 + 20</button><br/><br/>
                <button onClick={this.onClickAdd.bind(this)}>30 * 40</button><br/><br/>
            </div>
        )
    }
}

export function EventData2() {
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }

    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }

    return (
        <div style={{textAlign:'center', marginTop:20}}>
            <button onClick={(ev) => onClickStartStop(ev)}>Start</button><br/><br/>
            <button onClick={(ev) => onClickAdd(ev)}>10 + 20</button><br/><br/>
            <button onClick={(ev) => onClickAdd(ev)}>30 * 40</button><br/><br/>
        </div>
    )
}