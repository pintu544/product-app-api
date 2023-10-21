import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./App.css"; // Import your CSS file for styling

const API_BASE_URL = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

function App() {
  const [productName, setProductName] = useState("");
 // const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [productDescription, setProductDescription] = useState("");


  const handleProductNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
  };
  

  const handleProductCategoryChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setProductCategory(event.target.value);
  };

  const handleAddProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.post<Product>(API_BASE_URL, {
        title: productName,
        description: productDescription, // Replace price with description
        image: "https://i.pravatar.cc",
        category: productCategory,
      });
      setProducts([...products, response.data]);
      setProductName("");
      setProductDescription(""); // Clear description input field after submission
      setProductCategory("");
      setError("");
    } catch (error) {
      setError("Failed to add product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(API_BASE_URL);
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div className="App">
      <div className="container">
  <p style={{ 'backgroundColor': '#D9D9D9', 'padding': '2% 30% 6% 5%' }}>
    Input field to insert text
  </p>
  <button
    type="button"
    onClick={handleAddProduct}
    disabled={loading}
    className="insert-button"
  >
    Insert Button
  </button>
</div>

      <form className="product-form">
      
        
        
        <div style={{'backgroundColor':'#D9D9D9','padding':'3% 30% 5% 5%'}}>
        <div className="form-group" style={{'backgroundColor':'#D9D9D9'}}>
          {/* <label>Product Name:</label> */}
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            placeholder="Text one"
          />
        </div>
        <div className="form-group" style={{'backgroundColor':'#D9D9D9'}}>
          {/* <label>Price:</label> */}
          <input
  type="text"
  value={productDescription}
  onChange={handleProductDescriptionChange}
  placeholder="Text two"
/>

        </div>
        <div className="form-group" style={{'backgroundColor':'#D9D9D9'}}>
          {/* <label>Category:</label> */}
          <input
            type="text"
            value={productCategory}
            onChange={handleProductCategoryChange}
            placeholder="Text three"
          />
        </div>
        </div>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>Text one:{product.title}</div>
        
            <div>Text two: {product.category}</div>
            <div>Text three: {product.description}</div>
            {/* <div>
              Price: ${product.price ? product.price.toFixed(2) : "N/A"}
            </div>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "200px", marginTop: "10px" }}
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
