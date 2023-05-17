import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Coca from "./Coca";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 98px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Coca />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We desing products with a strong focus on both worl class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};

export default Illustration;
