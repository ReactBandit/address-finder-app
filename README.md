##Introduction

The Address Finder API is a Node.js and Express-based backend service designed to search, store address data. It uses MongoDB for data persistence. Below is a detailed overview of the API functionality, endpoints, and how to interact with the service.

##Setup and Installation

Clone the repository:

```
git clone <repository-url>
cd address-finder-app
```

Install dependencies:

```
npm install
```
Environment variables: Create a .env file in the root and configure:
```
MONGO_URI=your_mongodb_connection_string
```
Run the server:
```
npm start
```


Address Operations

Search Address

GET /address

Query Parameters: ?query=Portland

Response:
```
{
"query": "Portland",
"results": [ ...address data... ]
}
```


Request Body:
```
{
"query": "Portland",
"results": [ ...address data... ]
}
```
