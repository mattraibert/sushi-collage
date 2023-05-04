"use client"
import styles from './page.module.css'

import {useEffect, useRef} from "react"


export const Canvanato = ({canvasRef, children}) => {
  return <canvas ref={canvasRef} width="500" height="500">{children}</canvas>
}

const Rect = ({x, y, width, height, canvasRef, color}) => {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.fillRect(x, y, width, height)
  }, [canvasRef.current])
}

function Circle({x, y, radius, canvasRef, color}) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d")

    context.fillStyle = color
    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.fill()
  }, [canvasRef.current])
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
  }, [canvasRef.current])
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
  }, [canvasRef.current])
}

function Spiral({x, y, radius, canvasRef, color}) {
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

  },[canvasRef.current])
}

export default function Home() {
  const ref = useRef()

  return (
    <main className={styles.main}>
      <Canvanato canvasRef={ref}>
        <Circle x={100} y={100} radius={50} canvasRef={ref} color="red"/>
        <Rect x={10} y={10} width={150} height={100} canvasRef={ref} color="blue"/>
        <Rect x={100} y={100} width={10} height={100} canvasRef={ref} color="magenta"/>
        <Star x={100} y={200} radius={50} canvasRef={ref} color="yellow"/>
        <Pentagon x={100} y={200} radius={10} canvasRef={ref} color="green"/>
        <Spiral x={200} y={200} radius={90} canvasRef={ref} color="purple"/>
      </Canvanato>
    </main>
  )
}
