# Configure and Run

## Backend

### Setting Up Your Development Environment

1) Install and configure Git
2) Install Node, NVM
3) Install IDE of your choice ( Webstorm, VS code etc.)

### Downloading and Running the Project

#### Step-1: Connect and Clone

   Connect to GitHub and clone the repository in your local using the
   command ``` git clone https://github.com/edcsdev/api_backend.git ```

### Step-2: Setup Environment file

Create a .env file to the project directory and configure the below Environment variables with values

- PORT = ***add port number***
- MONGODB_URI = ***add mongodb connection uri***
- TEST_MONGODB_URI = ***add mongodb test connection uri***

### Step-3: Run application locally

1) Go to the api_backend folder
2) Run ``` npm install ``` to install all the dependencies of the backend
3) Execute the command ``` npm run dev ``` or ``` npm start ``` . It will start the node server at <http://locahost:3000>

## Frontend

### Setup Frontend and run application locally

1) Go to the folder frontend from the repository ``` cd ./frontend ```
2) Run ``` npm install ``` to install all the dependencies of the frontend
3) Execute the command ``` npm run dev ```. It will start the local server
