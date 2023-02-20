const config = {
  actual_mode: "production",
  production: {
    comments:
      "Nesse estágio, é utilizado o proxy do cors-anywhere para evitar problemas de cors",
    proxy_url: "https://cors-anywhere.herokuapp.com",
  },
  development: {
    comments:
      "Nesse estágio, é usado um proxy local rodando na porta 8080. Para rodá-lo, basta ir num terminal na raiz do projeto e rodar npm run proxy",
    proxy_url: "http://localhost:8080/proxy",
  },
};

export default config;
