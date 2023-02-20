# Temporary Email Project

# Como rodar o projeto localmente

- Abra um terminal na raiz do projeto e rode o comando "npm run proxy" para inicializar um servidor na porta 8080 que irá interceptar as requisições para a api do dropmail. Ele nos ajudará a não ter problemas de cors.
- Abra outro terminal na raiz do projeto e rode o comando npm start para inicializar um servidor na porta 3000 com o projeto React.

# Especificações

Esse projeto foi criado com a linguagem de programação Javascript, utilizando, mais especificamente, a biblioteca React. De primeira mão, desenvolvi a interface utilizando a biblioteca Material UI para estilização, alem de css puro para algumas coisas mais específicas.

# Onde acessar o deploy do projeto?

# Estrutura

- Foi construido, no projeto, uma estrutura de rotas utilizando o React Router pois, embora o projeto possua uma única interface, isso facilita para que, no futuro, caso haja a necessidade de criação de outras, o setup inicial já esteja feito.
- O projeto foi feito de maneira componentizada, seguindo a lógica de que é mais simples aplicar manutenção em componentes separados e, por isso, mais legíveis e simples de entender.
- As consultas a API está separadas em um documento a parte, que é onde ficam os hooks.
