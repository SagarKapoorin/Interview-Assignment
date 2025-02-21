# Interview Assignment

## Live Demo
[Live Link](https://interview-assignment-1517.onrender.com)

## Repository
[GitHub Repository](https://github.com/SagarKapoorin/Interview-Assignment)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/SagarKapoorin/Interview-Assignment.git
   cd Interview-Assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the project:
   ```sh
   npm run build
   ```
4. Start the server:
   ```sh
   npm run start
   ```

## Environment Variables

The project requires the following environment variables:
- `MONGO_URI` - MongoDB connection string
- `redisUrl` - Redis server URL for rate limiting

## API Endpoints

### **Submit a Review**
- **Endpoint:** `/reviews`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "review": "Your review text here"
  }
  ```
- **Description:** Saves a review to the database.

### **Get Review Analysis**
- **Endpoint:** `/analysis`
- **Method:** `GET`
- **Description:** Retrieves sentiment analysis of reviews, including average sentiment score and total count of reviews.
- **Uses:** MongoDB aggregation pipeline for data processing.

## Features
- MongoDB for storing reviews
- Redis for rate limiting
- Sentiment analysis using aggregation pipeline
- RESTful API endpoints

## Author
Made by **Sagar Kapoor**

