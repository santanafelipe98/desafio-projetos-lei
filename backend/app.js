const app = require('./config/server');
const port = process.env.SERVER_PORT || 3030;

// Roda na aplicação na porta 3030

app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});