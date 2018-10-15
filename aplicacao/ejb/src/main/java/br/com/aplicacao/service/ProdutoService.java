package br.com.aplicacao.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.aplicacao.vo.Produto;
import br.com.aplicacao.vo.Retorno;

/**
 * 
 * 
 * 
 *Classe que implementa os serviços EJB responsáveis pela recuperação e persistência da
 *entidade produto no banco de dados
 *
 *
 *
 */
@Stateless
public class ProdutoService {

	@PersistenceContext
	EntityManager entityManager;

	public Retorno<List<Produto>> getListaProduto(){
		Retorno<List<Produto>> retorno = new Retorno<List<Produto>>();
		try{
			List<Produto> lista = entityManager.createQuery("FROM Produto").getResultList();
			retorno.setObject(lista);
		}catch (Exception e) {
			e.printStackTrace();
			retorno.setCodigo("-1");
			retorno.setMensagem(e.getMessage());
			return retorno;
		}

		return retorno;
	}

	public Retorno<?> getProdutoById(Integer id){
		Retorno<Produto> retorno = new Retorno<Produto>();

		try{
			Produto produto = entityManager.find(Produto.class, id);
			retorno.setObject(produto);
		}catch (Exception e) {
			e.printStackTrace();
			retorno.setCodigo("-1");
			retorno.setMensagem(e.getMessage());
			return retorno;
		}

		return retorno;
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Retorno<?> alterarProduto(Produto produto){
		Retorno<Produto> retorno = new Retorno<Produto>();
		try {
			entityManager.merge(produto);
			entityManager.flush();
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setCodigo("-1");
			retorno.setMensagem(e.getMessage());
			return retorno;
		}

		retorno.setCodigo("0");

		return retorno;
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Retorno<?> incluirProduto(Produto produto){
		Retorno<Produto> retorno = new Retorno<Produto>();
		try {
			entityManager.persist(produto);
			entityManager.flush();
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setCodigo("-1");
			retorno.setMensagem(e.getMessage());
			return retorno;
		}

		retorno.setCodigo("0");

		return retorno;
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Retorno<?> excluirProduto(Integer id){
		Retorno<Produto> retorno = new Retorno<Produto>();
		try {
			Produto produto = entityManager.find(Produto.class, id);
			entityManager.remove(produto);
			entityManager.flush();
		} catch (Exception e) {
			e.printStackTrace();
			retorno.setCodigo("-1");
			retorno.setMensagem(e.getMessage());
			return retorno;
		}

		retorno.setCodigo("0");

		return retorno;
	}


}
