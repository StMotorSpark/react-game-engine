import React, {useContext} from "react";

// import { SceneContext } from "../engine/global/components/SceneManager";
import Scene from "../engine/global/components/Scene";
import Node from "../engine/node/components/Node";

function TestScene() {

    return (
        <Scene>
            <Node />
            <Node />
        </Scene>
    );
}

export default TestScene;