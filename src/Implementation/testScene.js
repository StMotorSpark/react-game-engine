import React, { useContext } from "react";

// import { SceneContext } from "../engine/global/components/SceneManager";
import Scene from "../engine/global/components/Scene";
import Node from "../engine/node/components/Node";
import { SceneContext } from "../engine/global/components/SceneManager";

function useTestSceneSate() {
    const { changeScene } = useContext(SceneContext);

    const goToNextLevel = () => {
        console.log("go to next level");
        changeScene("scene1");
    }

    return {
        goToNextLevel
    }
}

function TestScene(props) {
    const { goToNextLevel } = useTestSceneSate(props);

    return (
        <Scene>
            <Node
                settings={{
                    pos: {
                        x: 550,
                        y: 400
                    },
                    size: {
                        width: 100,
                        height: 100
                    }
                }}
                type="player"
                key={"player"}
            >Character</Node>
            
            <Node key={"node1"}>
                Example Button
                <button onClick={goToNextLevel}>
                    Next Level
                </button>
            </Node>
        </Scene>
    );
}

export default TestScene;