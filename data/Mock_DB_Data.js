const db_data = [
    {
        "token":"Test1",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 12:12:03 PM",
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": "3/18/2024 12:12:04 PM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 12:12:05 PM",
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": "3/18/2024 12:12:07 PM",
                "UserInteraction": "levelName:3_Walk the Plank.json"
            },
            {
                "TimeStamp": "3/18/2024 12:12:09 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:12:09 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:12:10 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:12:10 PM",
                "UserInteraction": "Stop"
            }
        ]
    },
    {
        "token":"Test2",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 12:07:21 PM",
                "UserInteraction": "levelName:3_C.json"
            },
            {
                "TimeStamp": "3/18/2024 12:08:35 PM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 12:08:35 PM",
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": "3/18/2024 12:08:39 PM",
                "UserInteraction": "levelName:4_Recursive Call.json"
            }
        ]
    },
    {
        "token":"Test3",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 12:07:12 PM",
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": "3/18/2024 12:07:14 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:07:14 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:07:15 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:07:15 PM",
                "UserInteraction": "Stop"
            }
        ]
    },
    {
        "token":"Test4",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 12:03:03 PM",
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": "3/18/2024 12:03:04 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:03:07 PM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:08 PM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:09 PM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:10 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:03:10 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:03:11 PM",
                "UserInteraction": "win: Level Gamma Completed"
            },
            {
                "TimeStamp": "3/18/2024 12:03:11 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:03:12 PM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 12:03:13 PM",
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": "3/18/2024 12:03:13 PM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 12:03:15 PM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 12:03:19 PM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 12:03:38 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:03:45 PM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"CHECK_RED\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:46 PM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"CHECK_RED\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:50 PM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:03:51 PM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_MAIN\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"END_OF_BRANCH\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:03:52 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:03:52 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:03:57 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:03:57 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:03:57 PM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 12:03:58 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:03:59 PM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"TURN_COUNTER_CLOCKWISE\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:04:04 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:04:04 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:04:08 PM",
                "UserInteraction": "error:Out of Bounds!"
            },
            {
                "TimeStamp": "3/18/2024 12:04:09 PM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 12:04:09 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:04:09 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:04:10 PM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 12:04:13 PM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:04:15 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:04:15 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:04:23 PM",
                "UserInteraction": "win: Level Branching Colors Completed"
            },
            {
                "TimeStamp": "3/18/2024 12:04:23 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:04:27 PM",
                "UserInteraction": "ButtonBackLevel"
            },
            {
                "TimeStamp": "3/18/2024 12:04:30 PM",
                "UserInteraction": "levelName:4_Blockers.json"
            },
            {
                "TimeStamp": "3/18/2024 12:04:31 PM",
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token":"Test5",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:59:56 AM",
                "UserInteraction": "levelName:3_C.json"
            },
            {
                "TimeStamp": "3/18/2024 11:59:58 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:59:59 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:00 PM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 12:00:02 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:03 PM",
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:03 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:07 PM",
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:07 PM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:25 PM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"IS_VALID_MOVE\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:00:27 PM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 12:00:27 PM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"END_OF_BRANCH\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 12:00:28 PM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 12:00:28 PM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 12:00:38 PM",
                "UserInteraction": "win: Level C Completed"
            },
            {
                "TimeStamp": "3/18/2024 12:00:38 PM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 12:00:39 PM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 12:00:39 PM",
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": "3/18/2024 12:00:40 PM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 12:00:42 PM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 12:00:42 PM",
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token":"Test6",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:59:33 AM",
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": "3/18/2024 11:59:35 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:59:36 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:59:37 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:59:38 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:59:38 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"NON_BRANCH_SLOT\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:59:41 AM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 11:59:41 AM",
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": "3/18/2024 11:59:43 AM",
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": "3/18/2024 11:59:44 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:59:44 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:59:45 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:59:46 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:59:46 AM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 11:59:47 AM",
                "UserInteraction": "ButtonBackLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:59:49 AM",
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": "3/18/2024 11:59:50 AM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 11:59:51 AM",
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token":"Test7",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:57:34 AM",
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": "3/18/2024 11:57:36 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:37 AM",
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:39 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:57:39 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"REMOVE_MARKER\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"ADD_MARKER\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:57:40 AM",
                "UserInteraction": "error:No Markers to Remove!"
            },
            {
                "TimeStamp": "3/18/2024 11:57:41 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:42 AM",
                "UserInteraction": "error:Editing Is Disabled Error."
            },
            {
                "TimeStamp": "3/18/2024 11:57:44 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:45 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:57:45 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:57:46 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:47 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:57:47 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"ADD_MARKER\"},{\"command\":\"ADD_MARKER\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:57:48 AM",
                "UserInteraction": "win: Level Markers Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:57:48 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:57:48 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:57:48 AM",
                "UserInteraction": "levelName:1_Forward.json"
            },
            {
                "TimeStamp": "3/18/2024 11:57:49 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:50 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:51 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:51 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:57:51 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:57:53 AM",
                "UserInteraction": "win: Level Forward Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:57:53 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:57:53 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:57:53 AM",
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": "3/18/2024 11:57:54 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:55 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:56 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:57 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:58 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:58 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:57:58 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:58:00 AM",
                "UserInteraction": "win: Level Gamma Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:58:00 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:58:00 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:58:00 AM",
                "UserInteraction": "levelName:4_Recursive Call.json"
            },
            {
                "TimeStamp": "3/18/2024 11:58:02 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:58:03 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:03 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:58:04 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:05 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:06 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:07 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:07 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:58:07 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:58:09 AM",
                "UserInteraction": "win: Level Recursive Call Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:58:09 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:58:09 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:58:10 AM",
                "UserInteraction": "levelName:5_Up.json"
            },
            {
                "TimeStamp": "3/18/2024 11:58:12 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:58:13 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:13 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:58:14 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:21 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:21 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:58:22 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:23 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:24 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:24 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:25 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:26 AM",
                "UserInteraction": "error:Can Only Place In Slots Error"
            },
            {
                "TimeStamp": "3/18/2024 11:58:26 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:27 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:58:28 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:29 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:30 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_MAIN\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:30 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:58:31 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_MAIN\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:58:35 AM",
                "UserInteraction": "win: Level Up Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:58:35 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:58:36 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:58:36 AM",
                "UserInteraction": "levelName:6_Stairs.json"
            },
            {
                "TimeStamp": "3/18/2024 11:58:37 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:58:38 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:38 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:58:40 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:42 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:43 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:58:44 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:58:45 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:57 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:58:59 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:58:59 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:59:05 AM",
                "UserInteraction": "win: Level Stairs Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:59:05 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:59:06 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:59:06 AM",
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": "3/18/2024 11:59:07 AM",
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token":"Test8",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:56:57 AM",
                "UserInteraction": "levelName:3_Walk the Plank.json"
            },
            {
                "TimeStamp": "3/18/2024 11:56:58 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:56:58 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:00 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:57:02 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:03 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:05 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:05 AM",
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:57:07 AM",
                "UserInteraction": "command: {\"move\":\"ADD_MARKER\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:57:07 AM",
                "UserInteraction": "Debug"
            },
            {
                "TimeStamp": "3/18/2024 11:57:08 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:09 AM",
                "UserInteraction": "Run"
            },
            {
                "TimeStamp": "3/18/2024 11:57:09 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:57:09 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:09 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:10 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:10 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:10 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:10 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:11 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:11 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:11 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:11 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:11 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:12 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:12 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:12 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:13 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:57:16 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:57:16 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:57:16 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:57:25 AM",
                "UserInteraction": "win: Level Walk the Plank Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:57:25 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:57:28 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:57:28 AM",
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": "3/18/2024 11:57:29 AM",
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token":"Test9",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:55:49 AM",
                "UserInteraction": "levelName:default_level.json"
            },
            {
                "TimeStamp": "3/18/2024 11:55:51 AM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 11:55:51 AM",
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": "3/18/2024 11:55:56 AM",
                "UserInteraction": "levelName:1_One Block.json"
            },
            {
                "TimeStamp": "3/18/2024 11:55:58 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:56:00 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:56:09 AM",
                "UserInteraction": "HelpButton"
            },
            {
                "TimeStamp": "3/18/2024 11:56:16 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:56:19 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:56:20 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:56:21 AM",
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:56:23 AM",
                "UserInteraction": "command: {\"move\":\"ADD_MARKER\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:56:23 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:56:23 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:56:26 AM",
                "UserInteraction": "win: Level One Block Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:56:26 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:56:29 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:56:29 AM",
                "UserInteraction": "levelName:9_Finish Implementing Function.json"
            },
            {
                "TimeStamp": "3/18/2024 11:56:30 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:56:30 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:56:32 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:56:34 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:56:36 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:56:37 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:56:38 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:56:38 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:56:41 AM",
                "UserInteraction": "win: Level Finish Implementing Function Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:56:41 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:56:41 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:56:42 AM",
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": "3/18/2024 11:56:44 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:56:45 AM",
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": "3/18/2024 11:56:45 AM",
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token":"Test10",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:55:02 AM",
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": "3/18/2024 11:55:03 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:55:04 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:55:05 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:55:06 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:55:06 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:55:06 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"NON_BRANCH_SLOT\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:55:08 AM",
                "UserInteraction": "win: Level Function Call Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:55:08 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:55:09 AM",
                "UserInteraction": "ButtonReplay"
            },
            {
                "TimeStamp": "3/18/2024 11:55:09 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:55:10 AM",
                "UserInteraction": "SwitchToFunction2"
            },
            {
                "TimeStamp": "3/18/2024 11:55:11 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:55:11 AM",
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:55:12 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_2\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:55:13 AM",
                "UserInteraction": "SwitchToFunction2"
            },
            {
                "TimeStamp": "3/18/2024 11:55:15 AM",
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:55:16 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:55:16 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_2\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:55:24 AM",
                "UserInteraction": "win: Level Function Call Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:55:24 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:55:25 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:55:25 AM",
                "UserInteraction": "levelName:7_checkColors.json"
            },
            {
                "TimeStamp": "3/18/2024 11:55:26 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:55:27 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:55:28 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:55:29 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:55:30 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:55:30 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_GREEN\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CHECK_GREEN\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:55:32 AM",
                "UserInteraction": "win: Level checkColors Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:55:32 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:55:33 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:55:33 AM",
                "UserInteraction": "levelName:8_PreMade Functions.json"
            },
            {
                "TimeStamp": "3/18/2024 11:55:34 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:55:34 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:55:35 AM",
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:55:37 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": "3/18/2024 11:55:38 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:55:38 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:55:41 AM",
                "UserInteraction": "win: Level PreMade Functions Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:55:41 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:55:42 AM",
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token":"Test11",
        "metricsList": [
            {
                "TimeStamp": "3/18/2024 11:53:05 AM",
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:06 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:06 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:06 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:08 AM",
                "UserInteraction": "win: Level Play Button Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:53:08 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:10 AM",
                "UserInteraction": "ButtonBackLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:53:11 AM",
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:11 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:11 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:12 AM",
                "UserInteraction": "win: Level Play Button Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:53:12 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:13 AM",
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": "3/18/2024 11:53:15 AM",
                "UserInteraction": "levelName:2_Move Command.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:16 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:16 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:53:17 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:17 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:18 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:19 AM",
                "UserInteraction": "win: Level Move Command Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:53:19 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:20 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:53:20 AM",
                "UserInteraction": "levelName:3_Add Command by Clicking.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:21 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:23 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:53:23 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:24 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:24 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:25 AM",
                "UserInteraction": "win: Level Add Command by Clicking Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:53:25 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:26 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:53:26 AM",
                "UserInteraction": "levelName:4_Turn Command.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:26 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:27 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:53:28 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:32 AM",
                "UserInteraction": "error:Command Is Not Removable Error."
            },
            {
                "TimeStamp": "3/18/2024 11:53:33 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:33 AM",
                "UserInteraction": "error:Command Is Not Removable Error."
            },
            {
                "TimeStamp": "3/18/2024 11:53:34 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:35 AM",
                "UserInteraction": "error:Command Is Not Removable Error."
            },
            {
                "TimeStamp": "3/18/2024 11:53:35 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:36 AM",
                "UserInteraction": "error:Command Is Not Removable Error."
            },
            {
                "TimeStamp": "3/18/2024 11:53:37 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:39 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:40 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:41 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:45 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:46 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:46 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:48 AM",
                "UserInteraction": "error:Out of Bounds!"
            },
            {
                "TimeStamp": "3/18/2024 11:53:48 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:49 AM",
                "UserInteraction": "error:Editing Is Disabled Error."
            },
            {
                "TimeStamp": "3/18/2024 11:53:49 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:50 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:50 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:51 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:52 AM",
                "UserInteraction": "error:Can Only Place In Slots Error"
            },
            {
                "TimeStamp": "3/18/2024 11:53:52 AM",
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:53 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:55 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:53:56 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:56 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:53:57 AM",
                "UserInteraction": "win: Level Turn Command Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:53:57 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:53:58 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:53:58 AM",
                "UserInteraction": "levelName:5_isValidMove.json"
            },
            {
                "TimeStamp": "3/18/2024 11:53:59 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:53:59 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:53:59 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:00 AM",
                "UserInteraction": "win: Level isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:00 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:01 AM",
                "UserInteraction": "ButtonReplay"
            },
            {
                "TimeStamp": "3/18/2024 11:54:02 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:54:02 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:05 AM",
                "UserInteraction": "win: Level isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:05 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:06 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:54:06 AM",
                "UserInteraction": "levelName:6_Try isValidMove.json"
            },
            {
                "TimeStamp": "3/18/2024 11:54:07 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:09 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:54:10 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:12 AM",
                "UserInteraction": "error:Can Only Place In Slots Error"
            },
            {
                "TimeStamp": "3/18/2024 11:54:12 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:12 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:13 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:14 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:15 AM",
                "UserInteraction": "Debug"
            },
            {
                "TimeStamp": "3/18/2024 11:54:16 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:17 AM",
                "UserInteraction": "Run"
            },
            {
                "TimeStamp": "3/18/2024 11:54:17 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:18 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:19 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:21 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:22 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:22 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:22 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:24 AM",
                "UserInteraction": "error:Can Only Place In Slots Error"
            },
            {
                "TimeStamp": "3/18/2024 11:54:24 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:25 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:26 AM",
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": "3/18/2024 11:54:28 AM",
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:29 AM",
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": "3/18/2024 11:54:30 AM",
                "UserInteraction": "Debug"
            },
            {
                "TimeStamp": "3/18/2024 11:54:31 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:31 AM",
                "UserInteraction": "Run"
            },
            {
                "TimeStamp": "3/18/2024 11:54:31 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:32 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:32 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:33 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:33 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:33 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "win: Level Try isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "win: Level Try isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "win: Level Try isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:34 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:35 AM",
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": "3/18/2024 11:54:35 AM",
                "UserInteraction": "win: Level Try isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:35 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:36 AM",
                "UserInteraction": "Run"
            },
            {
                "TimeStamp": "3/18/2024 11:54:36 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:38 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:38 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:40 AM",
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": "3/18/2024 11:54:40 AM",
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": "3/18/2024 11:54:42 AM",
                "UserInteraction": "win: Level Try isValidMove Completed"
            },
            {
                "TimeStamp": "3/18/2024 11:54:42 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:42 AM",
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": "3/18/2024 11:54:43 AM",
                "UserInteraction": "levelName:7_checkColors.json"
            },
            {
                "TimeStamp": "3/18/2024 11:54:43 AM",
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": "3/18/2024 11:54:45 AM",
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": "3/18/2024 11:54:46 AM",
                "UserInteraction": "Stop"
            }
        ]
    }
];
module.exports = db_data;