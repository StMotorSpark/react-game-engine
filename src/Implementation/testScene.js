import React, { useContext, useEffect } from "react";

import Scene from "../engine/global/components/Scene";
import Node from "../engine/node/components/Node";
import { SceneContext } from "../engine/global/components/SceneManager";
import useMovement from "../engine/node/hooks/useMovement";

function useTestSceneSate() {
    // add in the change scene context
    const { changeScene } = useContext(SceneContext);

    // add in the player movement hook
    const playerMove = useMovement();

    // create a go to next level function
    const goToNextLevel = () => {
        console.log("go to next level");
        changeScene("scene1");
    }

    // return the state
    return {
        playerMove,
        goToNextLevel
    }
}

function TestScene(props) {
    const { 
        playerMove, 
        goToNextLevel 
    } = useTestSceneSate(props);

    return (
        <Scene>
            <button onClick={() => {
                playerMove.move({ xAxis: 1, yAxis: 1 });
            }}>
                Move
            </button>
            <Node
                key={"player"}
                type="player"
                settings={{
                    startPos: {
                        x: 550,
                        y: 400
                    },
                    size: {
                        width: 100,
                        height: 100
                    }
                }}
                moveInfo={playerMove}
            >Character</Node>

            <Node key={"node1"}>
                Example Button
                {/* <button onClick={goToNextLevel}>
                    Next Level
                </button> */}
            </Node>
        </Scene>
    );
}

export default TestScene;