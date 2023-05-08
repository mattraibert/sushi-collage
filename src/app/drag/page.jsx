"use client"
import 'react-draggable'
import React from 'react'
import Draggable from "react-draggable"
import './style.css'

export default class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0,
    },
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    })
  }

  onStart = () => {
    this.setState({activeDrags: this.state.activeDrags + 1})
  }

  onStop = () => {
    this.setState({activeDrags: this.state.activeDrags - 1})
  }

  render() {
    const {deltaPosition} = this.state
    return (
      <div>
        <Draggable onStart={this.onStart} onStop={this.onStop}>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
        <Draggable onDrag={this.handleDrag} onStart={this.onStart} onStop={this.onStop}>
          <div className="box">
            <div>I track my deltas</div>
            <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
          </div>
        </Draggable>
        <Draggable handle="strong" onStart={this.onStart} onStop={this.onStop}>
          <div className="box no-cursor">
            <strong className="cursor">
              <div>Drag here</div>
            </strong>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable>
        <Draggable grid={[50, 50]} onStart={this.onStart} onStop={this.onStop}>
          <div className="box">I snap to a 50 x 50 grid</div>
        </Draggable>
      </div>
    )
  }
}
