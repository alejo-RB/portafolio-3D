import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Iphone from "./Iphone";
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
`;

const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Iphone />
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

export default SocialMedia;
