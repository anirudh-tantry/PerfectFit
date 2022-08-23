import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import millify from "millify";
import "./style.css";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const {
    landingPageUrl,
    name,
    displayImage,
    additionalInfo,
    rating,
    ratingCount,
    brand,
    mrp,
    price,
    discountDisplayLabel,
    discount,
  } = props.product;

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/${landingPageUrl}`)}
    >
      <div className="product-card-img-container">
        <img
          src={`https://images.weserv.nl/?url=${displayImage}&width=210&dpr=1`}
          srcSet={`https://images.weserv.nl/?url=${displayImage}&width=210&dpr=1 1x, https://images.weserv.nl/?url=${displayImage}&width=210&dpr=1.5 1.5x, https://images.weserv.nl/?url=${displayImage}&width=210&dpr=1.5 2x, https://images.weserv.nl/?url=${displayImage}&width=210&dpr=2.5 2.5x, https://images.weserv.nl/?url=${displayImage}&width=210&dpr=2.8 2.8x`}
          alt={name}
          loading="lazy"
        />
        <div className="product-card-ratings">
          <span>{millify(rating)}</span>
          <StarIcon color="primary" sx={{ fontSize: { xs: 12, sm: 14 } }} />
          <div className="product-card-ratings-info">
            <span>|</span>
            {millify(ratingCount, { lowercase: true })}
          </div>
        </div>
      </div>
      <div className="product-card-product-info">
        <h3>{brand}</h3>
        <h4>{additionalInfo}</h4>
        <div className="product-card-product-price-info">
          <span className="price">{`₹${price}`}</span>
          {mrp > price && <span className="mrp">{`₹${mrp}`}</span>}
          {discount > 0 && (
            <span className="discount">{discountDisplayLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
