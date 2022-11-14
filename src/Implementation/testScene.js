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
            <Node />
            <Node />
            <button onClick={goToNextLevel}>
                Next Level
            </button>
        </Scene>
    );
}

export default TestScene;