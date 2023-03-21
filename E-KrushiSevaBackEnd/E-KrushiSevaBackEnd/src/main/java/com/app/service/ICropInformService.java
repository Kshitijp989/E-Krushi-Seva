package com.app.service;

import java.util.List;

import com.app.Entity.CropInfo;

public interface ICropInformService {

	public CropInfo addCropInfo(CropInfo crofInfo, String email);

	public List<CropInfo> showCropInfo();

	public CropInfo findById(int cropId);

	public List<CropInfo> fetchByCropId(int id);
}
