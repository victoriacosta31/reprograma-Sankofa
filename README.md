# Sankofa

*“retornar ao passado para ressignificar o presente e construir o futuro”*

# Projeto Final | Sankofa - {Reprograma}

<p align="center">
<img src="material/logopng.png"
alt="logo Sankofa"
width="350">
</p> <p align="center"> </p>
</h1></br>

Projeto de conclusão do curso de Desenvolvimento Back-end - Todas em Tech | On16 da [{reprograma}](https://reprograma.com.br/).

Aplicação disponível [aqui](https://sankofa-projetoreprograma.herokuapp.com/)

Documentação das rotas no swagger disponível [aqui](https://sankofa-projetoreprograma.herokuapp.com/minha-rota-de-documentacao/)


## Objetivo

De acordo com o IBGE, 53,6% da população brasileira é formada por negros. No entanto, essa parcela da população é constantemente invisibilizada quando se trata de saúde mental. Ao lidar com psicólogos brancos, pessoas negras se veem sujeitas a terem seus traumas que advém do racismo estrutural diminuídos por esses profissionais, que na maioria das vezes não tem conhecimento suficiente para lidar com essas demandas.

O objetivo dessa API é servir como um catálogo de psicólogos negros de todo o país, para que pessoas negras possam encontrar profissionais de saúde mental que possam acolhê-las da melhor forma possível

## Funcionalidades

- [x] O schema dos psicólogos deve possuir os seguintes campos: id (autogerado), nome, telefone, estado, cidade e e-mail;
- [x] A API deve permitir o cadastro do psicólogo;
- [x] A API deve permitir a visualização dos psicólogos cadastrados;
- [x] A API deve permitir alterações nos cadastros;
- [x] A API deve permitir a exclusão de cadastros dos psicólogos do banco de dados.

## Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/victoriacosta31/reprograma-Sankofa

# Entrar na pasta do repositório
$ cd reprograma-Sankofa

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```

## Tecnologias e pacotes

[JavaScript](https://www.javascript.com) | [Node.js](https://nodejs.org/en/) | [Git](https://git-scm.com) | [VSCode](https://code.visualstudio.com) | [Mongodb](https://www.mongodb.com) | [Heroku](https://www.heroku.com/) | [Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)
 
 Dependências:
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

## Implementações futuras

- Criar no Schema um requisito que mostre se o psicólogo faz atendimento online;
- Aumentar o cadastro para mais profissionais de saúde mental, como psicanalistas e psquiatras.
 

Esse projeto foi criado por [Ana Victória de Souza Costa](https://github.com/victoriacosta31) sob a orientação de [Mayhhara F Lilian](https://github.com/mflilian). Agradeço as meninas da turma On16, que tornaram esse trabalho possível por meio do espiríto de união que permeia o nosso grupo do whatsapp.