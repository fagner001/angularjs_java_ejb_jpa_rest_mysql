package br.com.aplicacao.vo;

import java.io.Serializable;

public class Retorno<T> implements Serializable {
		
	private static final long serialVersionUID = -2702648139507939694L;

	private String codigo;
	private String mensagem;
	
	private T object;
	

	/**
	 * Retorna o objeto codigo
	 * @return Valor do codigo
	 */
	public String getCodigo() {
		return codigo;
	}

	/**
	 * altera o valor do parametro codigo
	 * @param codigo the codigo to set
	 */
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	/**
	 * Retorna o objeto mensagem
	 * @return Valor do mensagem
	 */
	public String getMensagem() {
		return mensagem;
	}

	/**
	 * Altera o valor de mensagem
	 * @param mensagem Valor de mensagem
	 */
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}	

	/**
	 * Retorna o valor de object
	 * @return the object
	 */
	public T getObject() {
		return object;
	}

	/**
	 * Altera o valor de object
	 * @param object Valor de object
	 */
	public void setObject(T object) {
		this.object = object;
	}

	/**
	 * Retorna o valor de isErro
	 * @return the isErro
	 */
	public boolean isErro() {
		return codigo != null ;
	}

}
