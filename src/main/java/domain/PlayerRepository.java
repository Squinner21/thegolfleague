package domain;

import org.springframework.data.jpa.repository.JpaRepository;

import domain.Player;

public interface PlayerRepository extends JpaRepository<Player, String> {

}
