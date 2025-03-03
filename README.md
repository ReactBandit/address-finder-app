##Introduction

The Address Finder API is a Node.js and Express-based backend service designed to search, store address data. It uses MongoDB for data persistence. Below is a detailed overview of the API functionality, endpoints, and how to interact with the service.

##Setup and Installation

Clone the repository:

```
git clone https://github.com/ReactBandit/address-finder-app.git
cd address-finder-app
```

Run the server:
```
cd backend
npm install
npm run dev
```

Run the UI:
```
cd ../frontend
npm install
npm run dev
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
