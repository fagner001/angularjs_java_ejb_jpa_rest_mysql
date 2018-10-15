/**
 * 
 */
package br.com.aplicacao.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Classe que representa objeto Produto da requisicao
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProdutoRequisicao {
	private Integer id;
	private String codigoBarra;
	private String nome;
	private String descricao;
	private Long quantidade;
	private String categoria;


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCodigoBarra() {
		return codigoBarra;
	}
	public void setCodigoBarra(String codigoBarra) {
		this.codigoBarra = codigoBarra;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Long getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

}
