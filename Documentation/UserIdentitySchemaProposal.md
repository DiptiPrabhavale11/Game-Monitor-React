# User Identity Schema Proposal

To monitor user behavior while playing the game, we need a user identity
that distinguishes them from other users.
We currently do not have a login system in our game application.
Therefore, we can utilize machine IDs or tokens as unique identifiers.
This is a proposal for tracking user IDs across gaming sessions.

## Schema Design

The schema consists of three collections: users, gamesessions and levelsessions.

### users collection

The users collection will contain records representing each user.

An example of user record is below:

```json
{
  "userId": "unique_id_generated_by_server",
  "machineId": "unique_machine_identifier_or_token"
}
```

### gamesessions collection

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

### levelsessions collection

The levelsessions collection will contain records representing user interactions
at each level of a game session.

An example of levelsession record is below:

```json
{
  "levelSessionId": "unique_id_generated_by_server",
  "userInteractions": []
}
```

### Best practices for tracking machine ids or tokens

Machine_ids or tokens from the game log are stored in a collection named users.
When a new game log is received via the POST API, it is checked to see if the
user already exists in the users collection.
If the machine_id or token is available, it will utilize the object_id of the
related record as the userId for the gaming session.
Otherwise, it should create a new user record in the user collection and use the
new record's object_id as the userId for the gaming session.

The reference is done between the gamesession schema and the user schema.
This method is useful for mapping many game sessions to a single userId.
