package com.app.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query("select p from Product p where p.id= :id")
	public Product findbyFk(@Param("id") Integer id);

	@Transactional
	@Modifying
	@Query("UPDATE Product p SET p.categories=:c, p.imageName=:i, p.price=:price, p.productName=:productname, p.stocks=:stock WHERE p.P_Id =:id")
	public void editById(@Param("c") String categories, @Param("i") String imageName, @Param("price") Float price,
			@Param("productname") String productName, @Param("stock") Integer stock, @Param("id") Integer id);

	@Transactional
	@Modifying
	@Query("Delete from Product p where p.P_Id=:id")
	public void deleteProduct(@Param("id") Integer id);

	@Query("select p from Product p where p.P_Id= :id")
	public Product findByCustomId(@Param("id") Integer id);

	@Query(value = "select * from products p  where p.categories ='ORGANIC_PRODUCT'", nativeQuery = true)
	public List<Product> fetchByOrganicProducts();

	@Query(value = "select * from products p where p.categories ='NON_ORGANIC_PRODUCT'", nativeQuery = true)
	public List<Product> fetchByNonOrganicProducts();

	@Query(value = "select * from products where id=:id", nativeQuery = true)
	public List<Product> fetchByFIdProduct(@Param("id") int id);
}
