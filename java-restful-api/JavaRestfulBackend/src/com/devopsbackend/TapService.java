package com.devopsbackend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import redis.clients.jedis.Jedis;

@Path("/tap")
public class TapService {
	
	private Jedis redisClient = new Jedis("redis");
	
	@Path("/incr/{token}")
	@GET
	@Produces("text/plain")
	public String tap(@PathParam("token") String token) {
		return redisClient.incr(token).toString();
	}
	
	@Path("/login/{user}")
	@GET
	@Produces("text/plain")
	public String setToken(@PathParam("user") String user) {
		// Register user to set...
		long success = redisClient.sadd("users", user);
		
		// successfully added
		if(success == 1) {
			String uniqueToken = redisClient.scard("users").toString();
			
			// Instantiate new record for points, initially zero, with unique token as the key
			redisClient.set(uniqueToken, "0");
			
			// Return the current size of the Set,
			// that will act as the client Token for taps
			return uniqueToken;
		}
		else{
			return "-1";
		}
		
	}
}
