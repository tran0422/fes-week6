import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const RaycastTargetMonthly = (({ handleClick }) => {
    const sphereRef = useRef();
    const { camera, gl } = useThree();

    // This will update every frame
    useFrame(({ clock }) => {
        if (sphereRef.current) {
            // Use sine function to move the sphere up and down
            const time = clock.getElapsedTime(); // Get elapsed time in seconds
            sphereRef.current.position.y = -2 + Math.sin(time) * 0.5; // Adjust the amplitude (0.5) and offset (1.5)
        }
    });

    useEffect(() => {
        // Attach event listeners to the canvas for mouse interactions
        const canvas = gl.domElement;

        const onPointerDown = (e) => {
            handleClick(e, camera, sphereRef, "monthly");
        };

        canvas.addEventListener('pointerdown', onPointerDown);

        return () => {
            canvas.removeEventListener('pointerdown', onPointerDown);
        };
    }, [gl, camera, handleClick]);

    return (
        <mesh
            ref={sphereRef}
            position={[1, -2, 6]} // Position of the sphere
            onClick={(e) => handleClick(e, camera, sphereRef, "monthly")}
        >
            <sphereGeometry args={[0.1, 6, 8]} /> {/* Geometry of the sphere */}
            <meshStandardMaterial
                color={'blue'}
            />
        </mesh>
    );
})

export default RaycastTargetMonthly;