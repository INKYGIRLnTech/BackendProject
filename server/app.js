//imported libraries
const express = require('express');
const userRouter = require('./routes/user');
const productRouter = require('./routes/products');
const { auth } = require('express-openid-connect');
require('dotenv').config();



//express app
const app = express();

const {
    AUTH0_SECRET,
    AUTH0_CLIENT_ID,
    AUTH0_ISSUER_BASE_URL
} = process.env;

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: AUTH0_SECRET,
    baseURL:'http://localhost:3000', 
    clientID: AUTH0_CLIENT_ID,
    issuerBaseURL: AUTH0_ISSUER_BASE_URL
  
};


app.use(express.json());

app.use(auth(config));

const checkUserRole = async (req, res, next) => {
    const userRole = req.oidc.user.role;
    
    if (userRole === 'admin') {
        next();
    } else {
        res.status(403).send('Forbidden: You do not have permission to access this resource.')
    }
};

app.use("/user", userRouter);
app.use("/products", productRouter);

app.get('/', async (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "logged in" : "logged out");
});

app.get('/callback', (req, res) => {
    res.send('Callback route reached successfully')
});


// error handling middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) res.status(500);
    res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});


module.exports = app;




