package com.devopsbackend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
		return redisClient.hincrBy(token, "score", 1).toString();
	}
	
	@Path("/login/{user}")
	@GET
	@Produces("text/plain")
	public String setToken(@PathParam("user") String user) {
		
		Long uniqueToken = redisClient.incr("total");
		
		// Try to Register this user to the all_users set
		long success = redisClient.sadd("all_users", uniqueToken.toString());
		
		if(success == 1 && uniqueToken > 0) {
			// Generate Set
			Map<String, String> userData = new HashMap<String, String>();
			userData.put("score", "0");
			userData.put("name", user);

			// Create Hash for this user with token as KEY
			redisClient.hmset(uniqueToken.toString(), userData);
			
			return uniqueToken.toString();
		}
		else {
			return "-1";
		}	
	}
	
	@Path("/leaderboard")
	@GET
	@Produces("application/json")
	public String leaderboard() {
	    List<String> allUserTokens = new ArrayList<String>(redisClient.smembers("all_users"));
		
		JSONArray jsonRes = new JSONArray();
		
		for(String token: allUserTokens) {
			Map<String, String> user = redisClient.hgetAll(token);
			JSONObject object = new JSONObject();
			object.put("name", user.get("name"));
			object.put("score",  user.get("score"));
			jsonRes.put(object);
		}
		return jsonRes.toString();
	}
}
