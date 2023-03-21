package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.Entity.CropInfo;
import com.app.Entity.Product;
import com.app.dto.FileUploadHelper;
import com.app.service.ICropInformService;
import com.app.service.IProductService;

@RestController
@CrossOrigin
public class ImageController {

	@Autowired
	private FileUploadHelper fileUploadHelper;

	@Autowired
	private IProductService iProductService;

	@Autowired
	private ICropInformService iCropInformService;

	@PostMapping("/upload/{email}/{product_id}")
	public ResponseEntity<String> uploadFile(@PathVariable int product_id, @PathVariable String email,
			@RequestParam("file") MultipartFile imgfile) {
		System.out.println(imgfile.getOriginalFilename());
		// validation
		try {
			if (imgfile.isEmpty()) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("request must contain file");
			}

			if (!imgfile.getContentType().equals("image/jpeg")) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only Jpeg file allowed");
			}

			boolean status = fileUploadHelper.uploadFile(imgfile);
			if (status) {

				Product product = iProductService.getById(product_id);
				System.out.println(product.getP_Id());
				String ImgUrl = ("/images/" + imgfile.getOriginalFilename());
				System.out.println(imgfile.getOriginalFilename());
				product.setImageName(ImgUrl);
				iProductService.addProduct(product, email);
				return ResponseEntity.ok("File is successfully uploaded");
				// ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(imgfile.getOriginalFilename()).toUriString());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong! try again");
	}

	@PostMapping("/uploadCropImage/{email}/{cropId}")
	public ResponseEntity<String> uploadFile(@PathVariable int cropId, @RequestParam("file") MultipartFile imgfile,
			@PathVariable String email) {
		System.out.println(imgfile.getOriginalFilename());
		// validation
		try {
			if (imgfile.isEmpty()) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("request must contain file");
			}

			if (!imgfile.getContentType().equals("image/jpeg")) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only Jpeg file allowed");
			}

			boolean status = fileUploadHelper.uploadFile(imgfile);
			if (status) {

				CropInfo cropInfo = iCropInformService.findById(cropId);
//				System.out.println(cropInfo.getP_Id());
				String ImgUrl = ("/images/" + imgfile.getOriginalFilename());
				System.out.println(imgfile.getOriginalFilename());
				cropInfo.setImage(ImgUrl);
				iCropInformService.addCropInfo(cropInfo, email);
				return ResponseEntity.ok("File is successfully uploaded");
				// ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(imgfile.getOriginalFilename()).toUriString());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong! try again");
	}

}
