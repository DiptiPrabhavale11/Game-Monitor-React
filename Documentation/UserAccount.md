# Create User Account

This section provides details about the APIs specifically designed for creating user account.

## Create User

**Description**:
User account creation is open to anyone. However, after creating an account,
users must request access from the admin to enable it. Currently, this
process involves manual intervention by updating the "canAccess" flag to
true in the database within the AppUser collection.

- **Route:** /api/users
- **Method:**   POST
- **Header Authentication** Not required
- **Details:**
    - Accepts JSON format for user data with username and password.
- **Sample Input:**

```json
  {
  "username": "developer",
  "password":"pacific"
  }
```
  
- **Sample Output:**

```json
  {
  "message": "Requested user account is created"
  }
```

## Get Users

**Description**:
  Returns the list of available users in the db

- **Route:** /api/users
- **Method:**   GET
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Retrieves the stored user information from the database.
    - Responds with 200(Ok) with user information as JSON

Relevant Classes: /controllers/AppUser.js
