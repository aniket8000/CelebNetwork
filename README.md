# CelebNetwork Backend (NestJS)

This is the backend assignment project for Eventful India.

The project is built using NestJS, PostgreSQL, Prisma ORM, and includes features like user registration, celebrity onboarding, AI-based setlist suggestion using OpenAI, and PDF export of celebrity profiles.

---

## Tech Stack

- NestJS (TypeScript)
- PostgreSQL (hosted on Railway)
- Prisma ORM
- OpenAI API
- PDFKit (for generating celebrity PDFs)

---

## How to run locally

1. Clone this repo and navigate to the backend folder.

git clone https://github.com/your-username/celebnetwork
cd backend-clean

Install dependencies:
npm install
Add a .env file with these values:

DATABASE_URL=your_postgres_url
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_secret


Run the database migration:
npx prisma migrate dev --name init


Start the server:
npm run start:dev


API Endpoints: 

Create a User
POST /users
Body:
{
  "name": "Hardy Sandhu",
  "email": "fan1@example.com",
  "password": "123456",
  "role": "FAN",
  "country": "India"
}

Create Celebrity Profile
POST /celebrities
Body:
{
  "userId": "USER_ID",
  "name": "Diljit Dosanjh",
  "genre": "Punjabi Pop",
  "country": "India",
  "instagramUrl": "https://instagram.com/diljitdosanjh",
  "youtubeUrl": "https://youtube.com/@diljit",
  "spotifyUrl": "https://spotify.com/diljit",
  "fanbase": 1000000,
  "setlist": "5 Taara, GOAT, Do You Know"
}

Get Celebrity Profile
GET /celebrities/:id

Download Celebrity Profile as PDF

GET /pdf/:id
This will download the celebrity's public profile as a PDF.

Author
Aniket 