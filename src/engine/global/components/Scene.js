import React, { useContext } from "react";

import { SceneContext } from "./SceneManager";

//NOTE is this necessary?
function useSceneState(props) {
    const { changeScene } = useContext(SceneContext);

    return {
        changeScene
    }
}

function Scene(props) {
    const sceneState = useSceneState(props);

    return (
        <div>
            <h1>Scene</h1>

            {props.children}
        </div>
    );
}

export default Scene;