Dependências:
Você vai preciar ter o dotnet, docker, docker-compose, npm e ng instalado em sua máquina.

Passo 1 - 
Acesse a pasta db que fica na parte de backend e utilize o comando abaixo para iniciar o docker:
`docker-compose -f docker-compose.yml up -d`

Passo 2:
Acesse a pasta undefined_challenge que também fica na parte de backend e use o comando abaixo para iniciar o dotnet:
`dotnet run`

Passo 3:
Agora você pode acessar os dados no frontend.

Para o react, use os comando:
1 - `npm install`
2 - `npm run dev`

Para o angular, utilizer o comando:
1 - `npm install`
2 - `ng serve`
