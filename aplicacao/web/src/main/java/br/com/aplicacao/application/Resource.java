package br.com.aplicacao.application;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

public class Resource {
	
	protected Response build(Status status, Object object) {
		return Response.status(status)
				.entity(object)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
				.header("Cache-Control", "no-cache, no-store, must-revalidate")
				.header("Pragma", "no-cache")
				.header("Expires", 0)
				.build();
	}

}

