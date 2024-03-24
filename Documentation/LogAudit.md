# Log Audit as of Feb 2, 2024

## User interactions currently unrecorded in the game logs are

<details>
<summary>Winning Move / Level</summary>
Status: **Completed**

When a player completes any level successfully,
it should capture the winning state
along with the text message show on the alert box.

Expected:

  ```json
  {
  "TimeStamp": "28-01-2024 16:09:09",
  "UserInteraction": "Win: Level 2 Completed Successfully!"
  }
  ```

</details>

<details>
<summary>Choices after completing a level </summary>
Status: **Completed**

User interactions when making selections like replay, level and main when a
player completes a level

Expected:

  ```json
  {
  "TimeStamp": "28-01-2024 16:09:19",
  "UserInteraction": "Replay"
  }
  ```

</details>
<details>
<summary>Menu Selection  </summary>
Status: **Completed**

User interactions when making menu selections like pause/game, menu.

Expected:

  ```json
  [{
  "TimeStamp": "28-01-2024 16:09:19",
  "UserInteraction": "Pause"
  },
  {
  "TimeStamp": "28-01-2024 16:09:29",
  "UserInteraction": "Menu"
  },
  {
  "TimeStamp": "28-01-2024 16:09:39",
  "UserInteraction": "Main"
  }]
  ```

</details>
<details>
<summary> Level changes</summary>
Status: **Completed**

New Level information when switching between levels.

Expected:

  ```json
  [{
  "TimeStamp": "28-01-2024 16:08:15",
  "UserInteraction": "LEVEL_NAME: 2_C.json"
  },
  {
  "TimeStamp": "28-01-2024 16:08:16",
  "UserInteraction": "Menu"
  },
  {
  "TimeStamp": "28-01-2024 16:08:18",
  "UserInteraction": "Main"
  },
  {
  "TimeStamp": "28-01-2024 16:08:19",
  "UserInteraction": "Levels"
  },{
  "TimeStamp": "28-01-2024 16:08:15",
  "UserInteraction": "LEVEL_NAME: Easy.json"
  }]
  ```

</details>
<details>
<summary>Pop-up dialog close action </summary>
Status: **Completed**

User Interactions when clicking close button on error/help dialog boxes.

Expected:

```json
  {
  "TimeStamp": "28-01-2024 16:08:18",
  "UserInteraction": "close"
  }
  ```

</details>

<details>
<summary> Stopping the game in debug mode</summary>
Status: **Completed**

Interaction with the stop button in debug mode while commands are executing.

Expected:

  ```json
  [{
  "TimeStamp": "28-01-2024 16:08:15",
  "UserInteraction": "Debug"
  },
  {
  "TimeStamp": "28-01-2024 16:08:25",
  "UserInteraction": "Stop"
  }]
  ```

</details>

## User interactions data that require modifications are

<details>
<summary> Command in Json format </summary>
Status: **Completed**

Command object to be restructured in the form of JSON string

Current Implementation:

  ```json
  {
  "TimeStamp": "28-01-2024 16:08:23",
  "UserInteraction": "COMMAND:Command=[Move=MOVE_FORWARD, LeftChild=END_OF_BRANCH, RightChild=END_OF_BRANCH, Parent=MOVE_FORWARD, ParentAlt=, IsRemovable=True, IsSlot=False]"
  }
  ```

Expected:

  ```json
  {
  "TimeStamp": "28-01-2024 16:08:23",
  "UserInteraction": "COMMAND:{command:[move:MOVE_FORWARD, leftChild:END_OF_BRANCH, rightChild:END_OF_BRANCH, parent:MOVE_FORWARD, parentAlt:null, isRemovable:true, isSlot:false]}"
  }
```

</details>

<details>
<summary>Command Tree generation </summary>
Status: **Completed**

When the user hits the play button, generate a command tree to keep track on
order of execution of moves the player has attempted

Current Implementation:

  ```json
  {
  "TimeStamp": "28-01-2024 16:08:15",
  "UserInteraction": "Play"
  }
  ```

Expected:

```json
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
}

```

</details>
