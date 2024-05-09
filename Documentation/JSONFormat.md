# User Interaction Logs

The Logs Monitor App relies entirely on logs generated while the user
plays the Noisrucer. It is expected that the user's behavior during each gameplay
will be recorded in a log file and converted into the json format.

<details><summary>Sample game Log</summary><p>
The below raw data from game log represents a single play session by one user.

```json
{
  "metricsList": [
    {
      "TimeStamp": "28-01-2024 16:08:15",
      "UserInteraction": "LEVEL_NAME: 2_C.json"
    },
    {
      "TimeStamp": "28-01-2024 16:08:15",
      "UserInteraction": "SwitchToFunction1"
    },
    {
      "TimeStamp": "28-01-2024 16:08:19",
      "UserInteraction": "CATEGORY:MovementCommandPaletteButton"
    },
    {
      "TimeStamp": "28-01-2024 16:08:21",
      "UserInteraction": "COMMAND:Command=[Move=MOVE_FORWARD, LeftChild=, RightChild=, Parent=, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:08:23",
      "UserInteraction": "COMMAND:Command=[Move=IS_VALID_MOVE, LeftChild=END_OF_BRANCH, RightChild=END_OF_BRANCH, Parent=MOVE_FORWARD, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:08:28",
      "UserInteraction": "COMMAND:Command=[Move=TURN_CLOCKWISE, LeftChild=END_OF_BRANCH, RightChild=, Parent=IS_VALID_MOVE, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:08:31",
      "UserInteraction": "CATEGORY:FunctionCommandPaletteButton"
    },
    {
      "TimeStamp": "28-01-2024 16:08:34",
      "UserInteraction": "COMMAND:Command=[Move=CALL_FUNCTION_1, LeftChild=, RightChild=, Parent=END_OF_BRANCH, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:08:36",
      "UserInteraction": "SwitchToFunctionMain"
    },
    {
      "TimeStamp": "28-01-2024 16:08:37",
      "UserInteraction": "CATEGORY:FunctionCommandPaletteButton"
    },
    {
      "TimeStamp": "28-01-2024 16:08:38",
      "UserInteraction": "CATEGORY:FunctionCommandPaletteButton"
    },
    {
      "TimeStamp": "28-01-2024 16:08:40",
      "UserInteraction": "COMMAND:Command=[Move=CALL_FUNCTION_1, LeftChild=, RightChild=, Parent=, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:08:42",
      "UserInteraction": "Play"
    },
    {
      "TimeStamp": "28-01-2024 16:08:49",
      "UserInteraction": "ERROR:Hit a Wall!"
    },
    {
      "TimeStamp": "28-01-2024 16:08:54",
      "UserInteraction": "Stop"
    },
    {
      "TimeStamp": "28-01-2024 16:08:59",
      "UserInteraction": "COMMAND:Command=[Move=TURN_CLOCKWISE, LeftChild=END_OF_BRANCH, RightChild=, Parent=IS_VALID_MOVE, ParentAlt=, IsRemovable=True, IsSlot=False, ]"
    },
    {
      "TimeStamp": "28-01-2024 16:09:09",
      "UserInteraction": "Play"
    }
  ]
}
```

</p></details>

Details about the user interactions that are not captured in the current game
logs including the required modifications are [available here](LogAudit.md).

## JSON Format Overview

The backend will receive data from each play session
and change it into the JSON format shown below to make it easier to handle.
This format can help to gain multiple insights
such as how many successful play sessions happened over specified time,
what are the common errors users facing,
which level is the popular level, which level is difficult,
how much time user is taking to complete a level etc.

Each play session will be referred as a **game session** and every level change
within a game session is referred as a **level session**. Every level session
will capture the user interactions happened per level.

<details><summary>JSON Format</summary><p>
An example of processed JSON Data for storing in the database:

```json
 
{
  "gameSessionId": "12345",
  "sessionTimeStamp": "28-01-2024 16:05:15",
  "token": "xyz",
  "levelSessions": [
    {
      "levelName": "2_C.json",
      "userInteractions": [
        {
          "timeStamp": "28-01-2024 16:08:15",
          "action": "SwitchToFunction1"
        },
        {
          "timeStamp": "28-01-2024 16:08:19",
          "action": "MovementCommandPaletteButton"
        },
        {
          "timeStamp": "28-01-2024 16:08:21",
          "action": "Move",
          "command": {
            "move": "MOVE_FORWARD",
            "leftChild": null,
            "rightChild": null,
            "parent": null,
            "parentAlt": null,
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:23",
          "action": "Move",
          "command": {
            "move": "IS_VALID_MOVE",
            "leftChild": "END_OF_BRANCH",
            "rightChild": "END_OF_BRANCH",
            "parent": null,
            "parentAlt": "MOVE_FORWARD",
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:28",
          "action": "Move",
          "command": {
            "move": "TURN_CLOCKWISE",
            "leftChild": "END_OF_BRANCH",
            "rightChild": null,
            "parent": "IS_VALID_MOVE",
            "parentAlt": null,
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:31",
          "action": "FunctionCommandPaletteButton"
        },
        {
          "timeStamp": "28-01-2024 16:08:34",
          "action": "Move",
          "command": {
            "move": "CALL_FUNCTION_1",
            "leftChild": null,
            "rightChild": null,
            "parent": "END_OF_BRANCH",
            "parentAlt": null,
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:36",
          "action": "SwitchToFunctionMain"
        },
        {
          "timeStamp": "28-01-2024 16:08:37",
          "action": "FunctionCommandPaletteButton"
        },
        {
          "timeStamp": "28-01-2024 16:08:38",
          "action": "FunctionCommandPaletteButton"
        },
        {
          "timeStamp": "28-01-2024 16:08:40",
          "action": "Move",
          "command": {
            "move": "CALL_FUNCTION_1",
            "leftChild": null,
            "rightChild": null,
            "parent": null,
            "parentAlt": null,
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:42",
          "action": "Play",
          "commandTree": {
            "funcDefs": [
              {
                "funcName": "MAIN",
                "funcMoves": [
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_COUNTER_CLOCKWISE"
                  },
                  {
                    "command": "IS_VALID",
                    "leftChild": "END",
                    "rightChild": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "FUNCTION_F1",
                    "parent": "MAIN"
                  }
                ]
              },
              {
                "funcName": "FUNCTION_F1",
                "funcMoves": [
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_COUNTER_CLOCKWISE"
                  },
                  {
                    "command": "IS_VALID",
                    "leftChild": "END",
                    "rightChild": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "FUNCTION_F2",
                    "parent": "FUNCTION_F1"
                  }
                ]
              },
              {
                "funcName": "FUNCTION_F2",
                "funcMoves": [
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "IS_VALID",
                    "leftChild": "END",
                    "rightChild": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_COUNTER_CLOCKWISE"
                  }
                ]
              }
            ]
          }
        },
        {
          "timeStamp": "28-01-2024 16:08:49",
          "action": "ERROR",
          "msg": "Hit a Wall!"
        },
        {
          "timeStamp": "28-01-2024 16:08:54",
          "action": "Reset"
        },
        {
          "timeStamp": "28-01-2024 16:08:59",
          "action": "Move",
          "command": {
            "move": "TURN_CLOCKWISE",
            "leftChild": "END_OF_BRANCH",
            "rightChild": null,
            "parent": "IS_VALID_MOVE",
            "parentAlt": null,
            "isRemovable": true,
            "isSlot": false
          }
        },
        {
          "timeStamp": "28-01-2024 16:09:09",
          "action": "Play",
          "commandTree": {
            "moves": [
              {
                "command": "MOVE_FORWARD"
              },
              {
                "command": "TURN_COUNTER_CLOCKWISE"
              },
              {
                "command": "IS_VALID",
                "leftChild": "END",
                "rightChild": "TURN_CLOCKWISE"
              },
              {
                "command": "MOVE_FORWARD"
              },
              {
                "command": "TURN_CLOCKWISE"
              },
              {
                "command": "FUNCTION_F1",
                "parent": "MAIN"
              }
            ],
            "funcDefs": [
              {
                "funcName": "FUNCTION_F1",
                "funcnMoves": [
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_COUNTER_CLOCKWISE"
                  },
                  {
                    "command": "IS_VALID",
                    "leftChild": "END",
                    "rightChild": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "FUNCTION_F2",
                    "parent": "FUNCTION_F1"
                  }
                ]
              },
              {
                "funcName": "FUNCTION_F2",
                "funcMoves": [
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "IS_VALID",
                    "leftChild": "END",
                    "rightChild": "TURN_CLOCKWISE"
                  },
                  {
                    "command": "MOVE_FORWARD"
                  },
                  {
                    "command": "TURN_COUNTER_CLOCKWISE"
                  }
                ]
              }
            ]
          }
        },
        {
          "timeStamp": "28-01-2024 16:09:09",
          "action": "Win"
        }
      ]
    },
    {
      "levelName": "stairs.json",
      "userInteractions": []
    },
    {
      "levelName": "default.json",
      "userInteractions": []
    }
  ]
}

```

</p></details>

<details><summary>JSON properties</summary><p>

The following provides descriptions for the keys in the processed JSON data

- **gameSessionId**: A unique identifier for every play session of a user.
- **levelSessions**: An array of levelSession objects each representing a
  sequence of user interactions while playing each level.
    - **levelSessionId**: An unique identifier that represents a series of
        actions when playing a level.
        - **levelName**: Gives information about the level name.
        - **userInteractions**: Describes the sequence of actions taken by the user
          while playing a level.
            - **timeStamp**: Represents the timestamp when each action was
              performed.
            - **action**: Represents what type of action occurs when the user
              clicks, such as switching between functions, clicking palette buttons
              or menu options, or following game instructions. If action is a move
              then it will capture the command details
            - **command**: Represents the user's chosen set of moves to play the
              level.
                - move: Represents the type of movement that the user has chosen,
                  such as moving forward, turning left, turning right or validate a
                  move.
                - **leftChild**: Represents the left command if any
                - **rightChild**: Represents the right command if any
                - **parent**: Represents the parent command if any
                - **parentAll**:
                - **isRemovable**: Represents if this command is removable
                - **isSlot**:
        - **commandTree**: If the action is play that means when user hits the
              play button, it will capture the command tree to provide
              more details of sequence of execution. Command tree will have details
              of all the moves and function definitions (if any).
                - **functionDefs**: Represents a list of definitions of all the
                  functions used by the user during the game
                    - **leftChild** : Represent left commands if present
                    - **rightChild**: Represent right commands if present
                - **funcName**:  Represents the name of the function

</p></details>

## Sending Data to Noisrucer Monitor

The [section](Documentation/C%23Adaptor.md) outlines the process of sending log data via API calls.
