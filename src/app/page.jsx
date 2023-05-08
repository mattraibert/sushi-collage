"use client"
import styles from './page.module.css'

import {useRef} from "react"
import {Canvanato, SierpinskiTriangle} from "./canvanato"

export default function Home() {
  const ref = useRef()

  return (
    <main className={styles.main}>

      <Canvanato canvasRef={ref}>
        <SierpinskiTriangle x={0} y={0} canvasRef={ref} color="red"/>
        {/*<Circle x={100} y={100} radius={50} canvasRef={ref} color="red"/>*/}
        {/*<Rect x={10} y={10} width={150} height={100} canvasRef={ref} color="blue"/>*/}
        {/*<Rect x={100} y={100} width={10} height={100} canvasRef={ref} color="magenta"/>*/}
        {/*<Star x={100} y={200} radius={50} canvasRef={ref} color="yellow"/>*/}
        {/*<Pentagon x={100} y={200} radius={10} canvasRef={ref} color="green"/>*/}
        {/*<Spiral x={200} y={200} radius={90} canvasRef={ref} color="purple"/>*/}
      </Canvanato>
    </main>
  )
}
