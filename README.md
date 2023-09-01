#The Perfect Trip - Node.js & Express Server

The Perfect Trip is a simple web application that suggests destinations based on user preferences. This repository contains the backend Node.js and Express server responsible for providing destination suggestions.

Usage

Prerequisites
Before you begin, ensure you have the following requirements met:

Node.js and npm installed on your local machine

Installation

clone the repository
```
git clone https://github.com/your-username/the-perfect-trip-server.git
cd the-perfect-trip-server

```
install dependencies
```
npm install
```
Starting the Server
To start the server, run:
```
node server.js
```
API Endpoint
Suggest Destination:
POST /suggest-destination: Send a JSON object with user preferences (type of holiday, companions, and desired activities) to get a suggested destination in response.
Example:

```
curl -X POST -H "Content-Type: application/json" -d '{
  "type": "Beach",
  "companions": "Friends",
  "activities": "Party"
}' http://localhost:5000/suggest-destination

```
Contributing
Contributions to this project are welcome! Feel free to open issues or pull requests for improvements or bug fixes.
