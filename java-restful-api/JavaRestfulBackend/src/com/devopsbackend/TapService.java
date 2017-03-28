package com.devopsbackend;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.json.JSONArray;
import org.json.JSONObject;

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
	
	@Path("/leaderboard")
	@GET
	@Produces("application/json")
	public String leaderboard() {
	    List<String> allMembers = new ArrayList<String>(redisClient.smembers("users"));
		
		JSONArray jsonRes = new JSONArray();
		
		for(int i = 0; i < allMembers.size(); i++) {
			String member = allMembers.get(i);
			String queryString = i+1 + "";
			
			JSONObject object = new JSONObject();
			object.put("name", member);
			
			String score = redisClient.get(queryString).isEmpty() ? "0" : redisClient.get(queryString);
				
			object.put("score", score);
			jsonRes.put(object);
		}
		
		return jsonRes.toString();
	}
}
