# Simple Node.js HTTP Server

This is a simple Node.js HTTP server created using the core `node:http` module. It is designed to handle multiple concurrent requests and respond with a message after a random delay, simulating an asynchronous operation without blocking the server.

## Features

- Handles multiple concurrent requests efficiently.
- Responds with a message after a random delay, simulating an asynchronous operation.
- Configured to handle Cross-Origin Resource Sharing (CORS).
- Provides a GET route that returns information about the user's CPU and OS.

## Usage

1. Clone the repository:

2. Install dependencies:
- npm install

3. Start the server:

4. Send GET requests to http://localhost:3000 to retrieve information about the user's CPU and OS.

### Example Response:

{
  "cpuArchitecture": "x64",
  "totalMemory": 17179869184,
  "freeMemory": 601923584,
  "platform": "darwin",
  "release": "20.3.0",
  "type": "Darwin",
  "uptime": 28358
}

