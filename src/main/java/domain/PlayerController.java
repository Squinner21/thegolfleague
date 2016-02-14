package domain;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import domain.Player;
import domain.PlayerService;

@RestController
public class PlayerController {
	
	private PlayerService playerService;
	
	@Autowired
	public PlayerController(final PlayerService playerService){
		this.playerService = playerService;
	}
	
	@RequestMapping(value = "/addPlayer", consumes="application/json")
	public void addPlayer(@RequestBody Player player){
		playerService.addPlayer(player);
	}
	
	@RequestMapping("/getPlayers")
	public List<Player> getPlayers(){
		return playerService.getPlayers();
	}
	
}

