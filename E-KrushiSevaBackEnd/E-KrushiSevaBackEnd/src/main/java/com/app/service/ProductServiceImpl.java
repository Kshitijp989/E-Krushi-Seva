package com.app.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import com.app.Entity.Product;
import com.app.Entity.Users;

import com.app.Repository.ProductRepository;
import com.app.Repository.UserDao;

@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserDao userDao;

	@Override
	public Product addProduct(Product product_add, String email) {

		try {

			Users users = userDao.findByEmail(email);

			Product product = product_add;

			product.setUser(users);
			product.setCategories(product_add.getCategories());
			product.setImageName(product_add.getImageName());
			product.setPrice(product_add.getPrice());
			product.setProductName(product_add.getProductName());
			product.setStocks(product_add.getStocks());

			return productRepository.save(product);
		} catch (Exception e) {
			System.out.println("============================");
			System.out.println(e.getMessage());
			System.out.println("=============================");
		}
		return null;
	}

	public void imgUpload(MultipartFile file, String productName, String categories, int stocks, float price,
			String email) {

		Users users = userDao.findByEmail(email);
		Product product = new Product();
		product.setUser(users);
		String filename = org.springframework.util.StringUtils.cleanPath(file.getOriginalFilename());

		if (filename.contains("..")) {
			System.out.println("not a valid file");
		}

		try {
			product.setImageName(Base64.getEncoder().encodeToString(file.getBytes()));
		} catch (IOException e) {
			e.printStackTrace();
		}
		product.setCategories(categories);
		product.setPrice(price);
		product.setProductName(productName);
		product.setStocks(stocks);
		productRepository.save(product);

	}

	public List<Product> allProducts() {
		return productRepository.findAll();
	}

	@Override

	public void editProduct(Product product, Integer id) {
		try {
			Product product1 = productRepository.findByCustomId(id);
			System.out.println(product1.getProductName());
			product1.setCategories(product.getCategories());
			product1.setPrice(product.getPrice());
			product1.setProductName(product.getProductName());
			product1.setStocks(product.getStocks());
			productRepository.save(product1);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	@Override
	public void deleteProduct(Integer id) {
		productRepository.deleteProduct(id);

	}

	@Override
	public Product getById(int id) {
		return productRepository.findByCustomId(id);

	}

	@Override
	public List<Product> findByOrganicProducts() {
		return productRepository.fetchByOrganicProducts();

	}

	@Override
	public List<Product> findByNonOrganicProducts() {
		return productRepository.fetchByNonOrganicProducts();
	}

	@Override
	public List<Product> findProductById(int id) {
		return productRepository.fetchByFIdProduct(id);
	}

}
