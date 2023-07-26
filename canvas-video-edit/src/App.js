import React from 'react'
import Canvas from './component/Canvas'
import './App.css';

function App() {
  const clear = (ctx, width, height) => {
    ctx.clearRect(0,0, width, height)
  }
  
  const draw = (ctx, frameCount,anitype = "circle") =>{
    clear(ctx, ctx.canvas.width, ctx.canvas.height)
    
    if (anitype === "circle"){
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50,100,20*Math.sin(frameCount*0.01)**2, 0, 2*Math.PI)
        ctx.fill()
    }
  }
  
  return (
    <Canvas draw={draw}/>
  );
}

export default App;
