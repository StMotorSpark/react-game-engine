import React, { useLayoutEffect, useRef, useState } from "react";

//TODO implement the collision hook
function useCollision() {
    const [running, setRunning] = useState(false);
    const [collisionDetectionLoop, setCollisionDetectionLoop] = useState(null);
    const collisionObjects = useRef([]);

    useLayoutEffect(() => {
        // register a listener for the 
        setCollisionDetectionLoop(setInterval(() => {
            //do something here
            // test for collision here
            testCollision();
        }), 1000 / 30); //TODO - this should be a global setting (FPS)??

        return () => {
            clearInterval(collisionDetectionLoop);
        }
    }, []);

    const registerCollisionObject = (getPos, collisionHandler) => {
        collisionObjects.current.push({ getPos, collisionHandler });
    }

    function testCollision() {
        const positionData = collisionObjects.current.map((collisionObject) => {
            return collisionObject.getPos();
        });

        
        // sort the position data based on the x position
        let xSorted = [...positionData];
        xSorted.sort((a, b) => {
            return a.pos.x - b.pos.x;
        });

        let ySorted = [...positionData];
        ySorted.sort((a, b) => {
            return a.pos.y - b.pos.y;
        });
        
        // find collisions based on the array of position data
        positionData.forEach((posData, index) => { 

        });
    }

    return {
        running,
        registerCollisionObject
    };
}

//TODO this might be a good way to handle various sizes of collision bounds
// but we will fix this later
function CollisionObject() {
    //TODO - this is just a placeholder for now
    return (
        <div>
            Collision Object
        </div>
    );
}

export default useCollision;