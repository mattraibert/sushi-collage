import {useEffect, useState} from "react"
import Draggable from "react-draggable"

const handleDrag = (e, ui) => {
  const {x, y} = this.state.deltaPosition
  this.setState({
    deltaPosition: {
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    },
  })
}
export const Canvanato = ({canvasRef, children}) => {
  const [pos, setPos] = useState({x: 0, y: 0})
  const updatePos = (e, ui) => {
    setPos(({x: pos.x + ui.deltaX, y: pos.y + ui.deltaY}))
  }

  return <Draggable onDrag={updatePos}>
    <div>
      <div>(x: {pos.x}, y: {pos.y})</div>
      <canvas ref={canvasRef} width="100" height="100">{children}</canvas>
    </div>
  </Draggable>
}
const Rect = ({x, y, width, height, canvasRef, color}) => {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.fillRect(x, y, width, height)
  }, [canvasRef, color, height, width, x, y])
}

function Circle({x, y, radius, canvasRef, color}) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.fill()
  }, [canvasRef, color, radius, x, y])
}

function Star({x, y, radius, canvasRef, color}) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.beginPath()
    context.moveTo(x, y - radius)
    context.lineTo(x + radius, y)
    context.lineTo(x, y + radius)
    context.lineTo(x - radius, y)
    context.lineTo(x, y - radius)
    context.fill()
  }, [canvasRef, color, radius, x, y])
}

function Pentagon({x, y, radius, canvasRef, color}) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.beginPath()
    context.moveTo(x, y - radius)
    context.lineTo(x + radius, y - radius / 3)
    context.lineTo(x + radius / 2, y + radius)
    context.lineTo(x - radius / 2, y + radius)
    context.lineTo(x - radius, y - radius / 3)
    context.lineTo(x, y - radius)
    context.fill()
  }, [canvasRef, color, radius, x, y])
}

function Spiral({x, y, canvasRef, color}) {
  useEffect(() => {

    // makes a spiral
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.beginPath()
    context.moveTo(x, y)
    for (let i = 0; i < 100; i++) {
      context.lineTo(x + Math.cos(i / 10) * i * 2, y + Math.sin(i / 10) * i * 2)
    }
    // context.fill()
    context.stroke()

  }, [canvasRef, color, x, y])
}

function drawTriangle(context, color, coords, width) {
  context.strokeStyle = color
  context.beginPath()
  context.moveTo(coords.x, coords.y)
  context.lineTo(coords.x + width, coords.y)
  context.lineTo(coords.x + width / 2, coords.y + width)
  context.lineTo(coords.x, coords.y)
  context.stroke()
}

function Triangle(props) {
  useEffect(() => {
    // makes a triangle
    const context = props.canvasRef.current.getContext("2d")
    let {color, x, y} = props
    const coords = {x, y}
    drawTriangle(context, color, coords, 100)
  }, props)
}

function sierp(context, color, coords, width) {
  if (width < 4) {
    return
  }
  let topMiddle = {x: coords.x + width / 2, y: coords.y}
  let leftMiddle = {x: coords.x + (width / 2) / 2, y: coords.y + width / 2}
  drawTriangle(context, color, coords, width)
  sierp(context, color, coords, width / 2)
  sierp(context, color, topMiddle, width / 2)
  sierp(context, color, leftMiddle, width / 2)
}

export function SierpinskiTriangle({x, y, canvasRef, color}) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    let width = 100
    let coords = {x, y}
    sierp(context, color, coords, width)
  }, [canvasRef, color, x, y])
}
