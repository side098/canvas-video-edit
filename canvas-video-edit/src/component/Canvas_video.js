import React , {useEffect, useRef} from 'react'

const Canvas = ()=>{
   
    useEffect(()=>{
        const canvasLeftRef = useRef(null);
        const canvasRightRef = useRef(null);
    },[])


    return (
        <div>
            <div>
                <video
                    id="video"
                    src="media/video.mp4"
                    controls="true"
                    crossOrigin='anonymous'
                />
            </div>
            <div>
                <canvas id="c1" width={160} height={96} ref={canvasLeftRef}></canvas>
                <canvas id="c2" width={160} height={96} ref={canvasRightRef}></canvas>
            </div>
        </div>
        
    )
}