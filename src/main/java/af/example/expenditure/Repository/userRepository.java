package af.example.expenditure.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import af.example.expenditure.Domain.User;

public interface userRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
