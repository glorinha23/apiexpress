//import express from 'express';
const express = require('express');
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/gremiovaisaircampeao', (request: any, response: any) => {
    response.send('o gremio vai sair campeao');
});

app.listen(port, () => console.log(`listening on port ${port}!`));








