# Schema Design

The schema consists of three collections: users, gamesessions and levelsessions.

## users collection

The users collection will contain records representing each user.
Additional details can be found [here](Documentation/UserIdentitySchemaProposal.md).

An example of user record is below:

```json
{
  "userId": "unique_id_generated_by_server",
  "machineId": "unique_machine_identifier_or_token"
}
```

## gamesessions collection

The gamesessions collection will contain records representing each game session played.
Multiple game sessions can be mapped to single user record,
which means a single user can play multiple game sessions.
Also, Each game session will be mapped to multiple level sessions,
which means a user plays multiple levels in a single game session.

An example of gamesession record is below:

```json
{
  "gameSessionId": "unique_id_generated_by_server",
  "userId": "reference_to_the_userId",
  "levelSessions": [
    "reference_to_the_level1_id",
    "reference_to_the_level2_id"
  ]
}

```

## levelsessions collection

The levelsessions collection will contain records representing user interactions
at each level of a game session.

An example of levelsession record is below:

```json
{
  "levelSessionId": "unique_id_generated_by_server",
  "userInteractions": []
}
```
