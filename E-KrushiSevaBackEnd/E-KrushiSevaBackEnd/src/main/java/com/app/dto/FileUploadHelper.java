package com.app.dto;

import java.io.File;
import java.io.FileOutputStream;

import java.io.InputStream;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {

	public final String UPLOAD_DIR = "C:\\Users\\91998\\Downloads\\EKrushiSevaFrontENd\\public\\images"; // path of
																											// images
																											// folder in
																											// frontend

	public boolean uploadFile(MultipartFile file) {
		

		boolean f = false;

		try {

			InputStream is = file.getInputStream();
			byte data[] = new byte[is.available()];

			is.read(data);

			// write data

			FileOutputStream fos = new FileOutputStream(UPLOAD_DIR + File.separator + file.getOriginalFilename());

			fos.write(data);

			fos.flush();
			fos.close();
			f = true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;
	}

}
