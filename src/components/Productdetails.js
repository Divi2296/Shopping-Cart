import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clothes, electronics } from "../data/data";
import { useState } from "react";

function Productdetails() {
    const { id, category } = useParams();
    const [prod, setProd] = useState([]);
    const [product, setProduct] = useState(null);


  useEffect(() => {
    console.log(id);
    console.log(category);

    if (category === 'clothes') {
      setProd(clothes);
    } else {
      setProd(electronics);
    }
  }, [category]);

  useEffect(() => {
    if (prod.length > 0) {
      const foundProduct = prod.find(
        (item) => item.id === parseInt(id) && item.cat === category
      );
      setProduct(foundProduct);
    //   console.log(foundProduct);
    }
  }, [id, category, prod]);

  return (<div>
    {product && (
        <div className="productdetails">
            <div className="productdetails__image">
                <img src={product.image} alt={product.Cardtitle} />
            </div>
            <div className="productdetails__info">
                <h2>{product.Cardtitle}</h2>
                <p>{product.desc}</p>
                <p>Price : ₹ {product.price}</p>
            </div>
        </div>
    )}
    
  </div>);
}

export default Productdetails;
