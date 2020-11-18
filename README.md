## Getting Starting

1 - Clone the project repository on your machine<br>
```bash
git clone https://github.com/jairoevaristo/API_Autentication_JWT.git
```
<hr>

2 - Enter the project directory and install the project facilities<br>

``
yarn
`` or ``
npm install
``
<hr>

3 - To start the server just run the command<br>

``
yarn dev
``
or
`` 
npm run dev
``
<hr>
<br>

## Using directions

**The application runs on localhost on port 3001**

- Route that lists the registered users and shows the email of the currently active user, to access this route it is necessary to authenticate. In the request, I received a header authorization with a holder and the token. [GET]

```
http://localhost:3001/index
```

- Route of registering users, I received an email and password in the body of the request. [POST]

```
http://localhost:3001/store
```

- Route that performs the user authentication in the application, I received an email and a password in the body of the request, and returns an access token. [POST]

```
http://localhost:3001/auth
```

<hr>
<br>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
