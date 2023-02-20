# Temporary Email Project

# Geral

- Esse projeto se trata de um serviço de email temporário.

# Especificações

- Esse projeto foi criado com a linguagem de programação Javascript, utilizando, mais especificamente, a biblioteca React. De primeira mão, desenvolvi a interface utilizando a biblioteca Material UI para estilização, alem de css puro para algumas coisas mais específicas.

# Como rodar o projeto localmente

- Abra o projeto em um terminal e rode o comando "npm install" para instalar as dependências do projeto.
- Agora, também em um terminal na raiz do projeto, rode o comando "num run proxy" para inicializar um servidor local na porta 8080 que irá interceptar as requisições para a api do dropmail. Ele nos ajudará a não ter problemas de cors no ambiente de desenvolvimento. 
- Abra outro terminal na raiz do projeto e rode o comando "npm start" para inicializar um servidor na porta 3000 com o projeto React.

# Onde acessar o deploy do projeto?

- Você pode acessar o site já publicado a partir desse link: https://dropmail.netlify.app
- Caso passe por problemas para acessar o projeto dessa maneira, veja a sessão de notas ao final desse README.

# Estrutura

- Foi construida uma estrutura de rotas utilizando o React Router pois, embora o projeto possua uma única interface, isso facilita para que, no futuro, caso haja a necessidade de criação de outras, o setup inicial já esteja feito.
- O projeto foi feito de maneira componentizada, seguindo a lógica de que é mais simples aplicar manutenção em componentes separados e, por isso, mais legíveis e simples de entender.
- As consultas a API estão separadas em um documento a parte, que são os hooks.

# Notas
- É importante salientar que o projeto em produção possui uma quantidade limitada de requisições em decorrencia do proxy cors-anywhere, que impõe esse limite. Para utilizar o serviço de maneira ilimitada, faça download do projeto e o rode localmente da maneira especificada anteriormente.
- Caso você acesse o projeto rodando no netlify (https://dropmail.netlify.app) e passe por problemas de proxy (o site aprensentará uma mensagem de que o serviço está offline), entre nesse link (https://cors-anywhere.herokuapp.com/) e clique no botão "Request temporarily access", isso pode ajudar.
- A chave da API que do dropmail que usei tambem está disponibilizada no arquivo .env desse projeto, visto que qualquer sequência de 8 caracteres pode ser usada como chave e, sendo assim, não há necessidade de torná-la secreta. Caso queira utilizar outra de sua escolha, basta entrar nesse arquvio e alterá-la para outra que também respeite a quantidade mínima de caracteres.