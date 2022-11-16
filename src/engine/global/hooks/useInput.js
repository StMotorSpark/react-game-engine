import React, {useState, useRef, useLayoutEffect, useEffect} from "react";

//TODO there are problems with the firing of the event loop
// seems like it is an issue diwth some events getting stuck
function useInput(defaultInputMap, baseInputData, inputHandler) {
    const [inputMap, setInputMap] = useState(defaultInputMap ?? {});
    const activeInputs = useRef([]);
    const activeInputInterval = useRef(null);

    useEffect(() => {
        mapHandlers();

        return cleanUpHandlers;
    }, [inputMap]);

    useLayoutEffect(() => {
        // do stuff here
        if(inputHandler) {
            //TODO implement the looping call to the input handler
            activeInputInterval.current = setInterval(() => {
                if(activeInputs.current.length > 0) { 
                    // build the retrun object with the values
                    let data = activeInputs.current.reduce((acc, key) => {
                        let mapReturn = inputMap[key]();
    
                        return {...acc, ...mapReturn};
                    }, baseInputData);
    
                    // call the input handler
                    inputHandler(data);
                }
            }, 1000 / 30);
        } else {
            console.log("No Input Handler defined");
        }

        return () => {
            // clear the interval
            clearInterval(activeInputInterval.current);
        }
    }, []);
    
    const addInput = (input, inputFunction) => {
        setInputMap({
            ...inputMap,
            [input]: inputFunction
        });
    }

    const removeInput = (input) => { 
        //TODO add logic to remove the input
    }

    function keyDownHandler(e) {
        window.addEventListener("keydown", (e) => {
            let targetKey = e.key;

            // test if the target key is included in the map
            if(Object.keys(inputMap).includes(targetKey)) {
                activeInputs.current.push(targetKey);
            }
        });
    }

    function keyUpHandler(e) {
        window.addEventListener("keyup", (e) => {
            let targetKey = e.key;

            activeInputs.current = activeInputs.current.filter((input) => input !== targetKey);
        });
    }

    function mapHandlers() {
        //TODO create the event listeners for the inputs
        window.addEventListener("keydown", keyDownHandler);
        window.addEventListener("keyup", keyUpHandler);
    }

    function cleanUpHandlers() {
        //TODO implement the remval of the event listeners
        // do stuff here
        window.removeEventListener("keydown", keyDownHandler);
        window.removeEventListener("keyup", keyUpHandler);
    }

    return {
        addInput,
        removeInput
    }
}

export default useInput;