package br.com.aplicacao.vo;

import java.io.Serializable;

/**
 * Estipula um contrato base para as entidades persistentes da aplicação.
 * 
 * <p>Esse contrato é utilizado pelo componente responsável pelas operações básicas de persistência: <code>AbstractPersistence</code>.</p>
 * 
 * @see br.com.yaw.prime.service.AbstractPersistence
 * 
 * @author Fagner de Oliveira
 */
public interface AbstractEntity extends Serializable {

	/**
	 * @return A referência para a chave primária (Primary Key) de cada objeto persistido.
	 *  Caso o objeto ainda não tenha sido persistido, deve retornar <code>null</code>.
	 */
	public Integer getId();

}
