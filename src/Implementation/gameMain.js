import React from 'react';

import SceneManager from '../engine/global/components/SceneManager';

import TestScene from './testScene';

function GameMain() {
    return (
        <SceneManager defaultScene={"testScene"}>
            <TestScene name="testScene" id="testScene" />

            <div name="scene1" id="scene1">
                <h1>Scene 1</h1>

                <button onClick={() => { alert("nothing to see here!") }}>Change Scene</button>
            </div>

            <div name="scene2" id="scene2">
                <h1>Scene 2</h1>
            </div>
        </SceneManager>
    );
}

export default GameMain;