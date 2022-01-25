# Sistema Projeto de Lei - Backend

API para consumo da aplicação front-end. Realiza a listagem e criação de projetos de lei.

## Tecnologias
- Node.Js
- Express
- Express Validator
- Dotenv

## Uso

Para rodar a aplicação é necessário a criação de um arquivo .env contendo as informações de conexão com o banco de dados e também a porta do servidor. Veja o arquivo ".env.example".

**Schema da Tabela - projetos_lei**

<code>
CREATE TABLE projetos_lei (<br>
    id INTEGER AUTO_INCREMENT PRIMARY KEY,<br>
    titulo VARCHAR(100) NOT NULL,<br>
    texto TEXT NOT NULL<br>
)
</code>

**NPM**

<code>npm start</code>

**Yarn**

<code>yarn start</code>