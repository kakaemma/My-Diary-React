[![Maintainability](https://api.codeclimate.com/v1/badges/ef8d67d8130427f1c0bd/maintainability)](https://codeclimate.com/github/kakaemma/My-Diary-React/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ef8d67d8130427f1c0bd/test_coverage)](https://codeclimate.com/github/kakaemma/My-Diary-React/test_coverage) [![Build Status](https://travis-ci.org/kakaemma/My-Diary-React.svg?branch=develop)](https://travis-ci.org/kakaemma/My-Diary-React)

# My Diary
MyDiary is an online journal where users can pen down their thoughts and feelings.

#### Features
* Users can Register with My diary

### Getting Started
- The instructions below wil help you clone the project to your local machine for development and testing purpose.

#### Prerequisites
- Before running the application, you need install the softwares below<br>
```
`nodejs` and `npm`- These will help in development and testing of the application
```
```
`git` this will help you clone the repository
```

### Getting a copy of the application
- In your terminal, type ```git clone https://github.com/kakaemma/My-Diary-React.git ```
- In your terminal, change directory to the location of the cloned repository with ```cd cloned_repo_directory_name ```

#### Installation and running the application
To install all dependecies and run application, type the command below in your terminal
``` npm run mydiary```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### File Organisation
```
.
├── .circleci
│   └── config.yml
├── .eslintrc
├── .gitignore
├── .travis.yml
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
└── src
    ├── App.js
    ├── actions
    │   ├── actionCreators.js
    │   ├── types.js
    │   └── userActions.js
    ├── assets
    │   └── App.css
    ├── components
    │   ├── forms
    │   │   ├── LoginForm.js
    │   │   └── RegistrationForm.js
    │   ├── login
    │   │   └── Login.js
    │   ├── register
    │   │   └── Register.js
    │   └── routes
    │       └── index.js
    ├── config
    │   └── axiosInstance.js
    ├── index.js
    ├── reducers
    │   ├── rootReducer.js
    │   └── userReducer.js
    ├── store.js
    └── tests
        ├── App.test.js
        ├── actions
        │   └── userActions.test.js
        ├── components
        │   ├── Login.test.js
        │   ├── LoginForm.test.js
        │   ├── Register.test.js
        │   └── RegistrationFrom.test.js
        ├── index.test.js
        └── reducers
            └── userReducer.test.js
```
#### Deployment
The application is hosted at https://mydiary-react.herokuapp.com/

#### The application is built with
- REACT REDUX
