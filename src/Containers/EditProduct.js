import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditProducts,updateCartItemQuantity } from "../Redux/Action/Action";
import { toast } from "react-toastify";
import { fetchProducts } from "../Redux/Action/Action";


const EditProductList = ({ productId, closeForm }) => {

    const [title, setTitle] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [qty, setquantity] = useState("");
    const [category, setcategory] = useState("");
    const [error, setError] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productList = useSelector((state) => state.ProductPage.products)
    const currentProduct = productList.find((product) => product.id === productId);


    useEffect(() => {
        if (currentProduct) {
            setTitle(currentProduct.title)
            setprice(currentProduct.price)
            setdescription(currentProduct.description)
            setquantity(currentProduct.qty)
            setcategory(currentProduct.category)
            setRating(currentProduct.rating)
            setImage(currentProduct.image)
        }
    }, [currentProduct])


    const handleEdit = (event) => {
        event.preventDefault();
        if (!title || !price || !description || !qty || !category || !rating) {
            setError("Please enter all fields");
        }

        const adminSetQuantity = parseInt(qty); // Replace with actual admin-set quantity

            dispatch(updateCartItemQuantity(productId, adminSetQuantity));
          
        const data = {
            "id": productId,
            "title": title,
            "price": parseInt(price),
            "description": description,
            "qty": parseInt(qty),
            "category": category,
            "rating": parseFloat(rating),
            "image": image
        }
        dispatch(EditProducts(data, productId))
        dispatch(fetchProducts())
        navigate("/adminhome")
        toast.success("Edited an item")
        closeForm()
        

    }

    const handleImageChange = (event) => {
        const selectedImage = URL.createObjectURL(event.target.files[0]);
        setImage(selectedImage);
    }

    const handleCancel = (event) => {
        event.preventDefault()
        closeForm();
    };


    return (
        <div>
            {currentProduct ? (
                <>
                    <div className="d flex w-100 vh-100 justify-content-center align-items-center modal-container form-overlay">
                        <div className="text-white p-5 modal-container_item">
                            <h3>Edit Product : {productId}</h3>
                            <form onSubmit={handleEdit}>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" id="title" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="price">Price</label>
                                    <input type="number" name="price" id="price" className="form-control" value={price} onChange={(event) => setprice(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <input type="text" name="description" id="description" className="form-control" value={description} onChange={(event) => setdescription(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="number" name="quantity" id="quantity" className="form-control" value={qty} onChange={(event) => setquantity(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input type="text" name="category" id="category" className="form-control" value={category} onChange={(event) => setcategory(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="rating">Rating</label>
                                    <input type="number" name="rating" id="rating" className="form-control" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="image">Image</label>
                                    <input type="file" name="image" id="image" accept="image/*" className="form-control" onChange={handleImageChange} />
                                </div>
                                <button className="btn  add_btn" type="submit">Update</button>
                                <button type="button" className="btn add_btn cancel_btn" onClick={handleCancel}>Cancel</button>

                                {error && <h1>{error}</h1>}
                            </form>
                        </div>
                    </div>
                </>
            ) : (<h1>Product List doesnot Exist</h1>)}
        </div>
    )
}
export default EditProductList;