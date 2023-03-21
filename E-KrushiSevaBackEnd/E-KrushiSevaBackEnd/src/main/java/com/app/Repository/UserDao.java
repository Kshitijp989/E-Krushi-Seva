package com.app.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.Entity.Users;

public interface UserDao extends JpaRepository<Users, Integer> {

	List<Users> findByFirstName(String firstName);

	@Query("select u from Users u where u.email= :em")
	public Users findByEmail(@Param("em") String email);

	@Query("select u from Users u where u.email = ?1 and u.password = ?2")
	Users findByEmailAndPassword(String email, String password);

	@Transactional
	@Modifying
	@Query("update Users u set u.status=?1 where u.email =?2")
	public void editByEmail(String status, String email);

	@Query("select u from Users u where u.email = ?1")
	public Users getUserByEmail(String email);

}
