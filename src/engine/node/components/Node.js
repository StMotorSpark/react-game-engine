import React, { useContext } from "react";

import { SceneContext } from "../../global/components/SceneManager";

//TODO - We need to start building out expectations regarding the
// available hooks/context/etc to use for the engine
// I think it will work as follows, a custom hook for the node that 
// auto implements ALL engine global contexts if available in addition
// to a type, and some of the other custom things.
function useNodeState(props) {
    const { changeScene } = useContext(SceneContext);

    return {
        type: props.type
    }
}

function Node(props) {
    return (
        <div>
            hello world
        </div>
    );
}

export default Node;