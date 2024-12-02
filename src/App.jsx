import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className="absolute flex flex-col items-center text-white top-[100px] left-1/2 -translate-x-1/2 font-signika">
          <h3 className='text-7xl tracking-tighter font-[700] masked mb-3'>macbook pro.</h3>
          <h5>Oh so pro!</h5>

          <p className="text-center w-3/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum molestias doloribus quo provident.</p>
      </div>
      <Canvas camera={{fov: 12, position: [0, -10, 220]}}>
        {/* <OrbitControls /> */}
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",]} />
        
        <ScrollControls pages={2}>
            <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App