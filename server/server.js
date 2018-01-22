import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.static('src/pages'));
app.use('/dist', express.static('dist'));

app.listen(3000, () => console.log('Server running at http://127.0.0.1:3000/'));
