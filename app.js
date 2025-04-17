require('dotenv').config(); // подключение .env
const express = require('express');
const app = express();

require('./db'); // MongoDB

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/reviews', require('./routes/reviews'));

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
