package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import com.app.Entity.Product;

public class ProductImage {

	private Product product;

	private MultipartFile imgUploader;

	public ProductImage() {
	}

	public ProductImage(Product product, MultipartFile imgUploader) {
		super();
		this.product = product;
		this.imgUploader = imgUploader;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public MultipartFile getImgUploader() {
		return imgUploader;
	}

	public void setImgUploader(MultipartFile imgUploader) {
		this.imgUploader = imgUploader;
	}

}
