package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.Entity.CropInfo;
import com.app.Entity.Product;

import com.app.service.CropInformServiceImpl;

import com.app.service.IProductService;

@CrossOrigin
@RestController
@RequestMapping(path = "/farmer")
public class FarmerController {

	@Autowired
	private IProductService iProductService;

	@Autowired
	private CropInformServiceImpl cropInformServiceImpl;

	@PostMapping("/add-product/{email}")
	public Product addNewProduct(@RequestBody Product product, @PathVariable String email) {
		return iProductService.addProduct(product, email);

	}



//	@PostMapping(path = "/add/{email}")
//	public String imgUploadController(@RequestParam("file") MultipartFile file, @RequestParam String productName,
//			@RequestParam String categories, @RequestParam String stocks, @RequestParam String price,
//			@PathVariable String email) {
//		int s = Integer.parseInt(stocks);
//		float p = Float.parseFloat(price);
//		iProductService.imgUpload(file, productName, categories, s, p, email);
//		return "Product added";
//
//	}

//	@PutMapping("/editProduct/{id}")
//	public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
//		iProductService.editProduct(product, id);
//		return ResponseEntity.ok("Product Edited");
//	}

	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		iProductService.deleteProduct(id);
		return ResponseEntity.ok("Product Deleted");
	}

	@PostMapping("/addCropInfo/{email}")
	public CropInfo addCropInfo(@RequestBody CropInfo crofInfo, @PathVariable String email) {
		return cropInformServiceImpl.addCropInfo(crofInfo, email);

	}

	@GetMapping("/showFarmerProduct/{id}")
	public List<Product> farmeraddedProduct(@PathVariable int id) {
		return iProductService.findProductById(id);
	}

	@GetMapping("/showFarmerCropInfo/{id}")
	public List<CropInfo> farmeraddedCropInfo(@PathVariable int id) {

		return cropInformServiceImpl.fetchByCropId(id);

	}

}
