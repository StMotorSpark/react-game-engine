import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { SceneContext } from "../../global/components/SceneManager";

// the base node component. Includes positioning and sizing
const NodeBase = styled.div`
    position: fixed;
    top: ${props => props.pos.y}px;};
    left: ${props => props.pos.x}px;};
    width: ${props => props.size.width}px;};
    height: ${props => props.size.height}px;};
    background-color: red;
`

//TODO - We need to start building out expectations regarding the
// available hooks/context/etc to use for the engine
// I think it will work as follows, a custom hook for the node that 
// auto implements ALL engine global contexts if available in addition
// to a type, and some of the other custom things.
function useNodeState(settings) {
    const [state, setState] = useState({
        type: settings?.type,
        pos: settings?.startPos ?? {x: 0, y: 0},
        size: settings?.size ?? {width: 0, height: 0},
    });

    return {
        ...state
    };
}

function Node({settings, children, moveInfo}) {
    const state = useNodeState(settings);

    // build out the info for the 
    let nodeInfo = {...state};

    // process additional state changes

    // movement changes
    if(moveInfo) {
        nodeInfo.pos.x += moveInfo.posAqjust.x;
        nodeInfo.pos.y += moveInfo.posAqjust.y;
    }

    return (
        <NodeBase {...nodeInfo}>
            {children}
        </NodeBase>
    );
}

export default Node;