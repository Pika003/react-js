import { Application } from '@splinetool/runtime';
import React, { useEffect } from 'react';

function Animation() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    if (canvas) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/XOJ4uxQLRkG05Rp2/scene.splinecode');
    }
  }, []);

  return (
    <div style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
    }}>
      <canvas id="canvas3d" width="800" height="600"></canvas>
    </div>
  );
}

export default Animation;








