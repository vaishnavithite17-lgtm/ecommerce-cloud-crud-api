# Cloud-Enabled E-commerce CRUD API

## Overview

This project is a cloud-ready CRUD application developed using Node.js and Express.js. It provides RESTful APIs for managing products and demonstrates containerization using Docker for consistent deployment across environments.

## Features

* Add new products
* View all products
* Update existing product details
* Delete products
* REST API architecture
* API testing using Postman
* Docker-based containerization

## Technologies Used

* Node.js
* Express.js
* Docker
* Postman
* JSON
* Git & GitHub

## API Endpoints

### Get All Products

GET /products

### Add Product

POST /products

### Update Product

PUT /products/:id

### Delete Product

DELETE /products/:id

## Running the Project

Install dependencies:

npm install

Start server:

node server.js

Run using Docker:

docker build -t ecommerce-api .

docker run -p 5000:5000 ecommerce-api

## Future Improvements

* MongoDB integration
* User authentication
* Cloud deployment on AWS/Azure
* React frontend
* CI/CD pipeline
