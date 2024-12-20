import React, { Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Diorama from '../models/Diorama.jsx';
import Sky from '../models/Sky.jsx';
import Intro from '../components/Intro.jsx';
import ModalCashCalc from '../components/ModalCashCalc.jsx';
import ModalMonthlyCalc from '../components/ModalMonthlyCalc.jsx';
import RaycastTargetCash from '../components/RaycastTargetCash.jsx';
import RaycastTargetMonthly from '../components/RaycastTargetMonthly.jsx';
import ModalPreApproval from '../components/ModalPreApproval.jsx';
import RaycastTargetPreApproval from '../components/RaycastTargetPreApproval.jsx';

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    const [modalContent, setModalContent] = useState(null); // Modal open state

    const adjustForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -7, -16];
        let rotation = [.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [.9, .9, .9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [dioramaScale, dioramaPosition, dioramaRotate] = adjustForScreenSize();

    // Single handleClick function to handle the click event and open the modal
    const handleClick = (e, camera, sphereRef, targetModal) => {
        e.preventDefault();

        if (isModalOpen) return;

        const mouse = new THREE.Vector2();

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        // Set raycaster to the camera and mouse position
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([sphereRef.current]);

        // If the ray hits the target (mesh), open the modal
        if (intersects.length > 0) {
            setIsModalOpen(true); // Open the modal when clicked
            setIsRotating(false);

            if (targetModal === "cash") {
                setModalContent("cash");
            } else if (targetModal === "monthly") {
                setModalContent("monthly");
            } else if (targetModal === "preapproval") {
                setModalContent("preapproval");
            }
        }
    };

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <Intro currentStage={currentStage} />}

            </div>

            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 2000, position: [0, 5, 80], fov: 80 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={1} />
                    <ambientLight intensity={.5} />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Sky />
                    <RaycastTargetCash handleClick={(e, camera, sphereRef) => handleClick(e, camera, sphereRef, "cash")} />
                    <RaycastTargetMonthly handleClick={(e, camera, sphereRef) => handleClick(e, camera, sphereRef, "monthly")} />
                    <RaycastTargetPreApproval handleClick={(e, camera, sphereRef) => handleClick(e, camera, sphereRef, "preapproval")} />
                    <Diorama scale={dioramaScale} position={dioramaPosition} rotation={dioramaRotate}
                        isRotating={isRotating} setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />
                </Suspense>
            </Canvas>

            {modalContent === "cash" && (
                <ModalCashCalc isOpen={isModalOpen} onClose={() => {
                    setIsModalOpen(false);
                    setIsRotating(false);
                }} />
            )}

            {modalContent === "monthly" && (
                <ModalMonthlyCalc isOpen={isModalOpen} onClose={() => {
                    setIsModalOpen(false);
                    setIsRotating(false);
                }} />
            )}

            {modalContent === "preapproval" && (
                <ModalPreApproval isOpen={isModalOpen} onClose={() => {
                    setIsModalOpen(false);
                    setIsRotating(false);
                }} />
            )}
        </section>
    )
}

export default Home