package com.library;

import com.library.repository.UserRepository;
import com.library.entity.User;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLibraryApplication {
	
	@Autowired
	private UserRepository userRepository;

	@PostConstruct
	public void initUsers() {
		List<User> users = Stream.of(
				new User(1, "anonimo", "$2a$10$ApEYM5EiNrOLhEAJ5hO94.4Jj2anVtfn5lhMGDtNyJCHm48jzIWeS",    "ROLE_ANONIMO"),
				new User(2, "utilizador", "$2a$10$ApEYM5EiNrOLhEAJ5hO94.4Jj2anVtfn5lhMGDtNyJCHm48jzIWeS", "ROLE_UTILIZADOR"),
				new User(3, "administrador", "$2a$10$ApEYM5EiNrOLhEAJ5hO94.4Jj2anVtfn5lhMGDtNyJCHm48jzIWeS", "ROLE_ADMIN")
				).collect(Collectors.toList());

		userRepository.saveAll(users);

	}

	public static void main(String[] args) {
		SpringApplication.run(SpringLibraryApplication.class, args);
	}
}
