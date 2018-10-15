package br.com.aplicacao.services.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.aplicacao.application.Resource;
import br.com.aplicacao.service.ProdutoService;
import br.com.aplicacao.vo.Produto;
import br.com.aplicacao.vo.ProdutoRequisicao;
import br.com.aplicacao.vo.Retorno;

/**
 * 
 * 
 * 
 *Classe responsável por responder as requisições, enviando os dados para
 *as páginas por meio de um json(API Rest)  
 *
 *
 */

@RequestScoped
@Path("/produto")
@Produces({ MediaType.APPLICATION_JSON })
@Consumes({ MediaType.APPLICATION_JSON })
public class ProdutoResource extends Resource{

	@Inject
	private ProdutoService service;


	/**
	 * 
	 * 
	 *Lista os produtos cadastrados
	 *
	 *
	 * @throws Exception
	 */
	@GET
	@Path("/getListaProduto")
	public Retorno<List<Produto>> getListaProduto() {
		return service.getListaProduto();
	}

	/**
	 * 
	 * 
	 *Retorna os dados de um produto pela chave primária
	 *
	 *
	 * @throws Exception
	 */
	@GET
	@Path("/getProdutoById/{id}")
	public Retorno<?> getProdutoById(@PathParam("id") String id){
		return service.getProdutoById(Integer.valueOf(id));
	}

	/**
	 * 
	 * 
	 *Altera os dados de um produto
	 *
	 *
	 * @throws Exception
	 */
	@POST
	@Path("/alterarProduto")
	public Retorno<?> alterarProduto(ProdutoRequisicao produtoRequisicao){
		Produto produto = new Produto();
		produto.setId(produtoRequisicao.getId());
		produto.setCodigoBarra(produtoRequisicao.getCodigoBarra());
		produto.setNome(produtoRequisicao.getNome());
		produto.setDescricao(produtoRequisicao.getDescricao());
		produto.setQuantidade(produtoRequisicao.getQuantidade());
		produto.setCategoria(produtoRequisicao.getCategoria());

		return service.alterarProduto(produto);
	}

	/**
	 * 
	 * 
	 *Cadastra um produto
	 *
	 *
	 * @throws Exception
	 */
	@POST
	@Path("/incluirProduto")
	public Retorno<?> incluirProduto(ProdutoRequisicao produtoRequisicao){
		Produto produto = new Produto();
		produto.setCodigoBarra(produtoRequisicao.getCodigoBarra());
		produto.setNome(produtoRequisicao.getNome());
		produto.setDescricao(produtoRequisicao.getDescricao());
		produto.setQuantidade(produtoRequisicao.getQuantidade());
		produto.setCategoria(produtoRequisicao.getCategoria());

		return service.incluirProduto(produto);
	}

	/**
	 * 
	 * 
	 *Exclui um produto pela chave primária
	 *
	 *
	 * @throws Exception
	 */
	@DELETE
	@Path("/excluirProduto/{id}")
	public Retorno<?> excluirProduto(@PathParam("id") String id){
		return service.excluirProduto(Integer.valueOf(id));
	}

}
