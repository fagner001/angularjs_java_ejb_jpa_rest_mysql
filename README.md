# angularjs_java_ejb_jpa_rest_mysql
Projeto completo no padr�o maven, utilizando as seguintes tecnologias:
AngularJs, Bootstrap, Java, EJB, JPA, Api Rest e Mysql. 
Passos para executar a aplica��o local:

1�) Clonar o projeto do gitHub atrav�s da url:
https://github.com/fagner001/angularjs_java_ejb_jpa_rest_mysql.git;

2�)Importar o projeto pelo eclipse usando a op��o do maven 
(Existin Maven Projects);

3�) Atualizar as depend�ncias do maven;

4�) Configurar o servidor Jboss(vers�es 7 em diante); 
(Usar o arquivo standalone.xml no reposit�rio como base)

5�) Criar um banco de dados Mysql com o nome de cadastro e uma tabela
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

5�)Acessar a aplica��o por meio da url:
http://localhost:8888/aplicacao-web/

