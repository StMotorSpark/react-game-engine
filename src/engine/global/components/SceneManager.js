import React, { useState, useEffect } from "react";

const SceneContext = React.createContext({
    changeScene: (sceneName) => { }
});

function useSceneState(props) {
    const [scene, setScene] = useState(null);

    useEffect(() => {
        // set the default scene if specified, or set to the first scene
        if (typeof props.children !== 'undefined') {
            if (Array.isArray(props.children)) {
                if (props.defaultScene) {
                    let defaultScene = props.children.find((child) => {
                        return child.props.name === props.defaultScene;
                    });
                    setScene(defaultScene);
                } else {
                    setScene(props.children[0]);
                }
            } else {
                setScene(props.children);
            }
        }
    }, []);

    const changeScene = (newScene) => {
        // change the current scene to the new scene
        if (typeof props.children !== 'undefined') {
            if (Array.isArray(props.children)) {
                let newSceneElement = props.children.find((child) => {
                    return child.props.name === newScene;
                });

                if(newSceneElement) {
                    setScene(newSceneElement);
                }
            }
        }

        //TODO in the future, it might be nice for some event to be thrown here
    }

    return {
        scene,
        changeScene
    }
}

function SceneManager({ children, defaultScene }) {
    const { scene, changeScene } = useSceneState({ children, defaultScene });

    // TODO: the change scene function needs to be provided as context to all children
    // to allow for child events to change the scene

    return (
        <SceneContext.Provider value={{ changeScene }}>
            <div>
                <h1>Scene Manager</h1>

                {scene}
            </div>
        </SceneContext.Provider>
    );
}

export default SceneManager;

export { SceneContext };