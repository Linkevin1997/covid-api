# COVID API

## DESCRIPTION:

This REST API contains name, gender, age and status of the people that have Covid.

## Instructions for local database manipulation:

1. Clone down this repo.
2. Install dependencies.
3. Seed the database.
4. Start server link.
5. Either view the API info through a browser for the seeded information or manipulate the information through apps like Postman or Insomnia.

## Install Dependencies

npm install mongoose mongodb express

### Schema:

let Case = new Schema({
name: {
type: String,
required: true,
},</br>
gender: {
type: String,
required: true,
},</br>
age: {
type: Number,
required: true,
},</br>
status: {
type: Boolean,
required: true,
}
},</br>
{ timestamps: true }
);</br>

### <h3 align="left">Languages and Tools:</h3>

<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>
