# Game Engine basic overview

The engine code will provied a variety of different hooks, components, and code that can be used to creat a basic game.

# Basic structure
The structure of the engine relies heavily on the use of React Hooks. All of the core logic for engine related logic will be handeled in these hooks including:
    - Basic Movement
    - Collision Detection
    - Input Handling
    - Physics
        - Gravity
    - Level/scene handlers
        - scene loader
        - scene object
        - scene navigation

# Global Hooks/Components
- useCollision
- usePhysicsGrav
- useSceneLoader

# node level Hooks/Components
- useMoveableObj
- useScene
- 