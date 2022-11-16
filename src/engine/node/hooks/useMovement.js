import { useState, useContext } from "react";

function useMovement(settings) {
    const [state, setState] = useState({
        posAqjust: {
            x: 0,
            y: 0
        },
        speed: {
            x: settings?.speed?.x ?? 1,
            y: settings?.speed?.y ?? 1
        }
    });

    // base move function with x and y axis expected values of 1, -1, or 0
    const move = ({xAxis, yAxis}) => {
        setState({
            posAqjust: {
                x: state.posAqjust.x + (state.speed.x * xAxis ?? 0),
                y: state.posAqjust.y + (state.speed.y * yAxis ?? 0)
            },
            speed: {...state.speed}
        })
    }

    // function to change the speed of the movement in any direction
    const changeSpeed = () => {
        //TODO update the current speed on the state
    }

    return {
        move,
        changeSpeed,
        ...state
    };
}

export default useMovement;