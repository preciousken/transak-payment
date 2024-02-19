const express = require('express');
const route = require('./route');
const app = express();

// handle root
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use("/api", route)

// handle 404
app.use((req, res, next) => {
    res.status(404).send('Not found');
    }
);


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);