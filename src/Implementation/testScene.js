import React, { useContext, useEffect } from "react";

import Scene from "../engine/global/components/Scene";
import Node from "../engine/node/components/Node";
import { SceneContext } from "../engine/global/components/SceneManager";
import useMovement from "../engine/node/hooks/useMovement";
import useInput from "../engine/global/hooks/useInput";

function useTestSceneSate() {
    // add in the input hook
    const { inputMap } = useInput(
        {
            "ArrowUp": () => { return { yAxis: -1 } },
            "ArrowDown": () => { return { yAxis: 1 } },
            "ArrowLeft": () => { return { xAxis: -1 } },
            "ArrowRight": () => { return { xAxis: 1 } },
        },
        {
            xAxis: 0,
            yAxis: 0
        },
        handleInput
    );
    // add in the player movement hook
    const playerMove = useMovement({
        speed: {
            x: 5,
            y: 2
        }
    });

    // add in the change scene context
    const { changeScene } = useContext(SceneContext);

    // create a go to next level function
    const goToNextLevel = () => {
        console.log("go to next level");
        changeScene("scene1");
    }

    function handleInput(inputData) {
        //TODO implement the input handler
        if (Object.keys(inputData).length === 0) {
            // do nothing if the control set is empty
            return;
        } else {
            // build out the move data based on the object
            // this is probably not needed always, but is useful for splitting
            // out different types of movement based on other inputs (space, crouch, etc)
            let moveData = {};
            Object.keys(inputData).forEach((key) => {
                moveData[key] = inputData[key];
            });

            if (Object.keys(moveData).length > 0) {
                playerMove.move(moveData);
            }
        }
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