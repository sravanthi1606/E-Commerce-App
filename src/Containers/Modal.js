import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddingProducts } from "../Redux/Action/Action";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProducts } from "../Redux/Action/Action";


const Modaladd = (props) =>{

    const productList = useSelector((state) => state.ProductPage.products)

    const [title,setTitle]= useState("");
    const [price,setprice]= useState("");
    const [description,setdescription]= useState("");
    const [qty,setquantity]= useState("");
    const [category,setcategory]= useState("");
    const [error,setError] = useState("");
    const [rating,setRating] = useState("");
    const [image,setImage] = useState();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!title || !price || !description || !qty || !category){
            setError("Please enter all fields");
           
        }
        const data = {
            "id" : productList[productList.length - 1].id + 1,
            "title":title,
            "price":parseInt(price),
            "description":description,
            "qty":parseInt(qty),
            "category":category,
            "rating":parseFloat(rating),
            "image":image
        }
        dispatch(AddingProducts(data))
        navigate("/home")
        props.CloseForm();
        dispatch(fetchProducts())
        toast.success("Added an item !!")
        
    }
    const handleCancel = (event) => {
        event.preventDefault()
        props.CloseForm();
    };

    const handleImage=(event)=>{
        setImage(URL.createObjectURL(event.target.files[0]))
    }


return(
    <div className="d flex w-100 vh-100 justify-content-center align-items-center modal-container form-overlay">
        <div className="text-white p-5 modal-container_item">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="form-control" value={title} onChange={(event)=>setTitle(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className="form-control" value={price} onChange={(event)=>setprice(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="form-control" value={description} onChange={(event)=>setdescription(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" className="form-control" value={category} onChange={(event)=>setcategory(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image" className="form-control" onChange={handleImage}></input>
                </div>
                
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" id="quantity" className="form-control" value={qty} onChange={(event)=>setquantity(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="quantity">Rating</label>
                    <input type="number" name="rating" id="rating" className="form-control" value={rating} onChange={(event)=>setRating(event.target.value)}></input>
                </div>
                
                <button className="btn add_btn" type="submit">Add</button>
                <button type="button" className="btn add_btn cancel_btn"  onClick={handleCancel}>Cancel</button>

                {error && <h1>{error}</h1>}
            </form>
        </div>
        
    </div>
)
}
export default Modaladd;







