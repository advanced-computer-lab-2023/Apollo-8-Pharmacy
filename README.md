# El7a2ny - Virtual Pharmacy Management System
Welcome to El7a2ny, A comprehensive software solution designed to automate and facilitate the interactions between patients, medical professionals, clinics, and pharmacists. This system is integrated with clinics and allows for seamless access to medical history, ordering of prescribed medication, and much more.

## Motivation
✨El7a2ny is here to make healthcare easy for everyone. ✨
This system aims to improve the efficiency of healthcare services and enhance the patient experience by providing a convenient platform for managing their medical needs.
 With El7a2ny, we're bringing a new level of ease and convenience to healthcare interactions. 😉


## Badges 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## Table of Contents

- [Build Status](#Build-Status)                     
- [code style](#code-style)                         
- [screenshots](#screenshots)                        
- [Tech/Framework Stack](#Tech/Framework-used)    
- [Features](#Features)                           
- [Code Examples](#Code-Examples)                 
- [configuration](#configuration)                 
- [Installation](#installation)                   
- [API reference](#API-reference)                     
- [Tests](#Tests)                                 
- [How to Use?](#How-to-Use?)
- [Contributing](#contribute)
- [Credits](#credits)
- [License](#license)


## Build Status 🔨

[![Node.js Package](https://github.com/advanced-computer-lab-2023/Apollo-8-Clinic/actions/workflows/NodePackage.yml/badge.svg)](https://github.com/advanced-computer-lab-2023/Apollo-8-Clinic/actions/workflows/NodePackage.yml)

- The project is currently in development.
- The testing technique needs improvement. Plan to create Jest test files and enable them as workflows for more robust and efficient testing.
- Future improvements:
  - Implement a caching layer to improve application performance.
  - Integrate a message broker to handle asynchronous tasks such as sending emails and notifications.

## Code Style 📜

This project adheres to the following code style guidelines:

1. **Naming Conventions**: 
- For Variables and function names, Use camelCase.

2. **Comments**:
- Add comments before functions and complex logic to explain their purpose.
- Keep comments concise and informative.

3. **File Organization**
- The project is organized into the following main directories:
  - `server`: Backend server code.
  - `client`: Frontend React application.

4. **Version Control**
- Use Git for version control.
- Write clear and concise commit messages following [Conventional Commits](https://www.conventionalcommits.org/) guidelines.

5. **Whitespace**:
- Use whitespace to make the code more readable. There should be whitespace around operators and after commas.

6. **Coding Standards**
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for our JavaScript/React code.

Please ensure your code adheres to these guidelines before submitting a pull request.

## screenshots 🖵

### Main Registeration page

## Tech/Framework used 🧰

El7a2ny is built using the MERN (MongoDB, Express.js, React, Node.js) stack.

- Tool:
    - VS code
    
- Frontend:
    - React
    - Bootstrap
    - Material-UI

- Backend:
    - Node.js  v18.18.0.
    - Express.js
    - MongoDB
    
## Features ✨


and much more to discover... 😊🚀

## Code Examples 🐱‍💻
here are some code examples for developers to have an overview about our implementation

#### register for a new user:
```
//create a new user and save it in our database

 const user = new UserModel({ username, password, type });
 await user.save();
```
#### login:
```
  //get user's information and compare it with the given

  const { name,  password } = req.body;
  const user=await UserModel.findOne({username:name});
  const passwordMatch=await bcrypt.compare(password,user.password);

  //create a token for the user and send t to his browser page 

  const token = createToken(user.username);
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  return res.status(201).json({token:token})
```

#### view health records:
```
  //get patient's information for thet database 

  const patientId = req.params.patientId;
  const patient = await PatientModel.findOne({ user: res.locals.userId });

  //send back the health_records

  const patientRecords = patient.health_records;
  res.status(200).json(patientRecords);
```

## Configuration

### 1. Database Connection

Before running the project, make sure to set up your database connection by adding your MongoDB connection string to the `.env` file located in the `server` directory. Here's an example:

```env
DB_CONNECTION=mongodb+srv://<username>:<password>@your_cluster_url/your_database_name
```
### 2. Admin Setup

To ensure smooth operation of the system, it's necessary to manually add at least one admin user to your database. This can be done using MongoDB Compass.

## Installation 📥

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/advanced-computer-lab-2023/Apollo-8-Pharmacy.git
   ```
   
2. **Open the Project in Visual Studio Code**

3. **choose view terminal and Setup the Server:**
```
cd sever
npm install
npm install mongoose node
```
4. **Start the Server:**
```
node index.js
```
5. **Open Another Terminal for the Client:**
```
cd client
npm install
npm install react react-dom
npm install react-bootstrap
npm install @mui/material @emotion/react @emotion/styled
```
6. **Start the Client Application:**
```
cd src
npm run dev
```
7. **Open any web browser and navigate to**
```
http://localhost:5173/
```

## API reference

<details> <summary>Patient APIs</summary>
 //patient 
</details>
<details> <summary>Admin APIs</summary>
 //here put the admin apis
</details>

<details> <summary>Doctor APIs</summary>
//here put the doctor APIs
</details>

## Testing with Postman
Before testing the API using Postman, make sure **Postman Installed**. Download and install [Postman](https://www.postman.com/downloads/).

Use these test cases to test your code using Postman:

#### **Create Patient (POST)**

- *Endpoint*: `http://localhost:8000/Patient/`

- *Body Request*:

```json
{
  "username": "john_doe",
  "name": "John Doe",
  "type": "patient",
  "email": "john@example.com",
  "password": "SecurePassword123",
  "birthDate": "1990-01-01",
  "gender": "male",
  "phone": "1234567890",
  "emergencyName": "Emergency Contact",
  "emergencyNo": "9876543210",
  "emergencyRel": "Family",
  "addresses": ["123 Main St"],
  "status": "active",
  "wallet": 100,
  "health_records": []
}
```
- *Expected Response*:
```json
{
  "_id": "some_generated_id",
  "name": "John Doe",
  "email": "john@example.com",
  "birthDate": "1990-01-01",
  "gender": "male",
  "phone": "1234567890",
  "emergencyName": "Emergency Contact",
  "emergencyNo": "9876543210",
  "emergencyRel": "Family",
  "addresses": ["123 Main St"],
  "status": "active",
  "wallet": 100,
  "health_records": []
}
```



#### **Get Health Records (GET)**

- *Endpoint*: `http://localhost:8000/Patient/health-records/${patientId}`

- *Body Request*:

```json
{}  // No request body for GET request
```
- *Expected Response*:
```json
[
  {
    "_id": "record_id_1",
    "date": "2023-01-10",
    "description": "Regular check-up",
    "image": "image_url_1"
  },
  {
    "_id": "record_id_2",
    "date": "2023-05-22",
    "description": "X-ray results",
    "image": "image_url_2"
  }
  // ... additional health records
]
```

## How to Use?

### As a Patient

1. **Access the Application**: Launch your web browser and enter the provided URL to reach the registration page.

2. **Registration**: Select "Patient Signup" to initiate the registration process. Complete the form with the necessary details and click "Submit".

3. **Dashboard Navigation**: Post-registration, you'll be redirected to the dashboard. The top bar serves as your primary navigation tool.

### As a Pharmacist
1. **Access the Application**: Launch your web browser and enter the provided URL to reach the registration page.

2. **Registration**: Select "Doctor Signup" to initiate the registration process. Complete the form with the necessary details and click "Submit" to send your application for admin approval.

3. **Sign In**: Once your application is approved, return to the main page and sign in.

4. **Dashboard Navigation**: Use the top navigation bar to access various features such as viewing your wallet balance, updating your information, adding a prescription, managing appointments, adding available slots, adding patient health records, viewing follow-ups, and reviewing your contract.

### As an Admin
1. **Sign In**: Use the pre-configured credentials stored in the database to sign in.

2. **Dashboard Navigation**: Post sign-in, you'll be redirected to the dashboard.

3. **Admin Management**: Use the top bar to navigate through various admin tasks such as adding a new admin, removing a user, managing doctor's requests, and managing health packages.


## Contribute

We welcome contributions from everyone. Here's how you can contribute:

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.

3. **Create a New Branch**: Always create a new branch for each feature or bug fix you are working on. Never work directly on the `main` branch.

4. **Make Your Changes**: Make your changes or additions in your branch. Be sure to follow the existing code style.

5. **Commit Your Changes**: Commit your changes with a clear and concise commit message.

6. **Push to GitHub**: Push your changes to your fork on GitHub.

7. **Submit a Pull Request**: From your fork, submit a pull request to the `main` branch of the original repository. Describe your changes in the pull request. Link any related issues or pull requests.

- Communication Channels: If you have questions or need clarification, feel free to reach out to us on [Discord](https://discord.com/channels/@nadaemad222) or by opening an issue on GitHub. We value open communication and are here to help!

## Credits

This project was made possible thanks to the following resources and contributions:

1. **Node.js**: The Node.js tutorial playlist on YouTube ``https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY``provided a comprehensive guide to using Node.js in the project.

2. **Express.js**: This Express.js tutorial video on YouTube ``https://www.youtube.com/watch?v=fgTGADljAeg`` was instrumental in understanding and implementing Express.js.

3. **React Introduction**: The React introduction playlist on YouTube ``https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK`` provided a solid foundation for using React in the project.

5. **Contributors**: A special thanks to all the contributors who have helped to improve this project with their suggestions, bug reports, and code contributions.


## License

This project is licensed under the terms of the MIT license. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

The credit card form in this project utilizes the Stripe library, which is subject to its own license. Please review the [Stripe Terms of Service](https://stripe.com/terms) and [Stripe Legal](https://stripe.com/legal) for details.

This project uses the Bootstrap framework, which is licensed under the [MIT License](https://opensource.org/licenses/MIT). For more information, see the [Bootstrap License](https://github.com/twbs/bootstrap/blob/main/LICENSE).

The project utilizes Material-UI components, a library licensed under the [MIT License](https://opensource.org/licenses/MIT). For more information, see the [Material-UI License](https://github.com/mui-org/material-ui/blob/next/LICENSE).

This project is licensed under the terms of the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0). See the [LICENSE](LICENSE) file for details.
