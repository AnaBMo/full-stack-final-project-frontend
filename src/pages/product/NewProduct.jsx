import { useState } from "react";
import axios from "axios";
import "./NewProduct.css";

function NewProduct() {
  const [formData, setFormData] = useState({
    name: "",
    entryDate: "",
    expirationDate: "",
    batchNumber: "",
    deliveryNoteNumber: "",
    description: "",
  });
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData);
      setSuccess("Product created successfully!");
      setFormData({
        name: "",
        entryDate: "",
        expirationDate: "",
        batchNumber: "",
        deliveryNoteNumber: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      setSuccess("");
    }
  };

    return (
        <div className="new-product-page">
            <div className="title-wrapper">
                <h2>NEW PRODUCT</h2>
            </div>
            <div className="form-wrapper">
                <form className="new-product-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Entry date</label>
                    <input type="date" name="entryDate" value={formData.entryDate} onChange={handleChange} required />

                    <label>Expiration date</label>
                    <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />

                    <label>Batch number</label>
                    <input type="text" name="batchNumber" value={formData.batchNumber} onChange={handleChange} required />

                    <label>Delivery note number</label>
                    <input type="text" name="deliveryNoteNumber" value={formData.deliveryNoteNumber} onChange={handleChange} required />

                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />

                    <button type="submit">Create</button>
                    {success && <p className="success-msg">{success}</p>}
                </form>
            </div>
        </div>
    );
}

export default NewProduct;