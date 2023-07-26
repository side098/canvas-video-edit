import React, {useRef, useEffect} from 'react'
import useCanvas from '../hook/useAniCanvas'

const Canvas = props =>{
    
    const { draw, options,...rest } = props
    const { context, ...moreConfig} = options
    const canvasRef = useCanvas(draw,{context})

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        const render = () =>{
            frameCount++
            draw(context, frameCount)

            /* 애니메이션 실행 요청
                arg: 
                    callback function : func
                retrun:
                    request id : long
            */
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () =>{
            window.cancelAnimationFrame(animationFrameId)
        }
        

    }, [draw])

    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas