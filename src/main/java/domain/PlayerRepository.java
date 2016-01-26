package domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Long> {
	
	List<Player> findAll();
	
	List<Player> findByLastName(String lastName);

}
