import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '/src/assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        let responseData;
        let product = { ...productDetails };

        // Step 1: Upload Image
        if (image) {
            let formData = new FormData();
            formData.append('product', image); // ✅ Matches backend field name

            await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData,
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log('Upload response:', data);
                    responseData = data;
                });

            if (responseData && responseData.success) {
                product.image = responseData.image_url;
            } else {
                console.error('Image upload failed');
                alert('Image upload failed');
                return;
            }
        }

        // Step 2: Submit Product Info
        console.log('Final Product Data:', product);

        await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Product added:', data);
                alert('Product added successfully!');
            })
            .catch(err => {
                console.error('Error adding product:', err);
                alert('Failed to add product');
            });
    };

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Type Here"
                />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name="old_price"
                        placeholder="Type Here"
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name="new_price"
                        placeholder="Type Here"
                    />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className="add-product-selector"
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>

            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        alt="Upload Preview"
                        className="addproduct-thumbnail-img"
                    />
                </label>
                <input
                    type="file"
                    name="image"
                    id="file-input"
                    hidden
                    onChange={imageHandler}
                    accept="image/*"
                />
            </div>

            <button onClick={Add_Product} className="addproduct-btn">Add</button>
        </div>
    );
};

export default AddProduct;
