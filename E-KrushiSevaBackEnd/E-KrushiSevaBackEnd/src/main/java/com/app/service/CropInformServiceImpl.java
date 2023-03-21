package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.CropInfo;

import com.app.Entity.Users;
import com.app.Repository.CropInfoRepository;
import com.app.Repository.UserDao;

@Service
public class CropInformServiceImpl implements ICropInformService {

	@Autowired
	private CropInfoRepository cropInfoRepository;

	@Autowired
	private UserDao userDao;

	@Override
	public CropInfo addCropInfo(CropInfo crofInfo, String email) {
		try {

			Users users = userDao.findByEmail(email);

			CropInfo crop = crofInfo;

			crop.setCrop(users);
			crop.setCropName(crofInfo.getCropName());
			crop.setCropType(crofInfo.getCropType());
			crop.setDescription(crofInfo.getDescription());
			crop.setImage(crofInfo.getImage());
			crop.setScientificName(crofInfo.getScientificName());
			return cropInfoRepository.save(crop);
		} catch (Exception e) {
			System.out.println("============================");
			System.out.println(e.getMessage());
			System.out.println("=============================");
		}
		return null;

	}

	@Override
	public List<CropInfo> showCropInfo() {
		return cropInfoRepository.findAll();
	}

	@Override
	public CropInfo findById(int cropId) {
		return cropInfoRepository.findByCustomId(cropId);

	}

	@Override
	public List<CropInfo> fetchByCropId(int id) {
		return cropInfoRepository.fetchByCropId(id);
	}

}
