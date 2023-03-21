package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.Entity.Product;

public interface IProductService {

	public Product addProduct(Product product_add, String email);

	public List<Product> allProducts();

	public void editProduct(Product product, Integer id);

	public void deleteProduct(Integer id);

	public void imgUpload(MultipartFile file, String productName, String categories, int stocks, float price,
			String email);

	public Product getById(int id);

	public List<Product> findByOrganicProducts();

	public List<Product> findByNonOrganicProducts();

	public List<Product> findProductById(int id);

}
