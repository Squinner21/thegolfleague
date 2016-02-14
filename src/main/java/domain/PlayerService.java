package domain;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import domain.Player;
import domain.PlayerRepository;

@Service
@Repository
public class PlayerService {
	
	private final PlayerRepository playerRepository;
	
	@Autowired
	public PlayerService(final PlayerRepository playerRepository){
		this.playerRepository = playerRepository;
	}
	
	public void addPlayer(Player player){
		playerRepository.saveAndFlush(player);
	}
	
	public List<Player> getPlayers(){
		return playerRepository.findAll();
	}

}
