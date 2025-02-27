import { Canvas ,useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {FirstPersonControls, GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls} from "@react-three/drei"
import './app.css';
import {useControls} from 'leva';

function AnimatedBox() {
  const boxRef = useRef();

  const {speed} = useControls({
    color:"#00bfff",
    speed:{
      value:0.005,
      min:0.0,
      max:0.3,
      step:0.001
    },
  });
  useFrame(()=>{
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  })
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <axesHelper args={[10]}/>
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

function App() {
  return (
    <>
      {/* <div className="canva_container">
        <Canvas>
          <mesh>
            <sphereGeometry args={[3,80,80]} />
            <meshBasicMaterial wireframe/>
          </mesh>
        </Canvas>
        </div> */}
      {/* <div className="canva_container">
        <Canvas camera={{position:[2,2,2]}}>
          <mesh>

            <boxGeometry args={[2, 3, 2]} />
            <meshPhongMaterial color={"red"} />
            <directionalLight position={[2,5,1]}/>
          </mesh>
        </Canvas>
      </div> */}
      {/* <div className="canva_container">
        <Canvas >
          <mesh>
            <torusKnotGeometry args={[1.7,0.3,256,256]}/>
            <meshToonMaterial color={"red"} />
           
          </mesh>
          <directionalLight position={[2,5,1]}/>
        </Canvas>
      </div> */}
      <div className="canva_container">
        <Canvas >
          {/* <FirstPersonControls movementSpeed={1} autoForward/> */}
          <GizmoHelper alignment="bottom-right" margin={[80,80]}>
            <GizmoViewcube/>
          </GizmoHelper>
          <gridHelper args={[20,20 , "red" , "black"]}/>
          <axesHelper args={[10]}/>
          <OrbitControls/>
          <AnimatedBox/>
          <ambientLight/>
        </Canvas>
      </div>
    </>
  )
}

export default App
