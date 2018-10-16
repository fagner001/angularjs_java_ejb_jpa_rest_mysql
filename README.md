# angularjs_java_ejb_jpa_rest_mysql
Projeto completo no padrão maven, utilizando as seguintes tecnologias:
AngularJs, Bootstrap, Java, EJB, JPA, Api Rest e Mysql. 
Passo a passo para configurar e executar a aplicação local:

1º) Clonar o projeto do gitHub através da url:
https://github.com/fagner001/angularjs_java_ejb_jpa_rest_mysql.git;

2º) Importar o projeto pelo eclipse usando a opção do maven 
(Existin Maven Projects);

3º) Atualizar as dependências do maven;

4º) Configurar o servidor Jboss(versões 7 em diante)
(Usar o arquivo standalone.xml no repositório como base);

5º) Criar um banco de dados Mysql com o nome de cadastro e uma tabela
com o nome de produto como no script abaixo:
create table produto(
					id int primary key auto_increment,
					codigoBarra varchar(60),
					nome varchar(30),
					descricao varchar(30),
					quantidade int,	
					categoria varchar(10)
);

insert into produto(codigoBarra,nome,descricao,quantidade,categoria) 
values('123','produto teste','produto teste',1,'teste');

5º)Acessar a aplicação por meio da url:
http://localhost:8888/aplicacao-web/

