package com.app.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "combineUserOrder")
public class CombineUserOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int CO_Id;

	@NotBlank
	@Column(name = "first_name", length = 30, nullable = false)
	private String firstName;
	@NotBlank
	@Column(name = "last_name", length = 30)
	private String lastName;
	@NotBlank
	@Column(length = 30, nullable = false)
	private String email;

	@Column(length = 15)
	private String phone;

	@Column(length = 30)
	private String address;

	@Column(length = 30)
	private Long pincode;

	@Column(length = 30)
	private String city;

	@Column(length = 30)
	private String state;

	@Column(length = 30)
	private String productName;

	private float itemsPrice;

	private float taxPrice;

	private float shippingPrice;

	private float totalPrice;

	private String status = "Order Placed";

	@JsonIgnore
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "Id")
	private Users couser;

	public int getCO_Id() {
		return CO_Id;
	}

	public void setCO_Id(int cO_Id) {
		CO_Id = cO_Id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getItemsPrice() {
		return itemsPrice;
	}

	public void setItemsPrice(float itemsPrice) {
		this.itemsPrice = itemsPrice;
	}

	public float getTaxPrice() {
		return taxPrice;
	}

	public void setTaxPrice(float taxPrice) {
		this.taxPrice = taxPrice;
	}

	public float getShippingPrice() {
		return shippingPrice;
	}

	public void setShippingPrice(float shippingPrice) {
		this.shippingPrice = shippingPrice;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Users getCouser() {
		return couser;
	}

	public void setCouser(Users couser) {
		this.couser = couser;
	}

}
