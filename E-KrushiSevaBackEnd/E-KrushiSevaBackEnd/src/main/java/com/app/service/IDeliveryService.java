package com.app.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.app.Entity.CombineUserOrder;

@Repository
public interface IDeliveryService {

	public List<CombineUserOrder> showOrder();

	public CombineUserOrder fetchOrderById(CombineUserOrder combineUserOrder);

	public void editByOrderStatus(CombineUserOrder combineUserOrder);
}
