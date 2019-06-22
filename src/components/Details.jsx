import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <DetailWrapper className="container py-5">
              {/**title */}
              {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div> */}
              {/**end title */}
              {/**product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/**product text */}
                <div className="card col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2 className="text-title text-blue">
                    <strong>{title}</strong>
                  </h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    by <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>{"\u20A6"}</span>
                      {price}
                    </strong>
                  </h4>
                  <hr />
                  <h2 className="text-capitalize text-description text-center font-weight-bold mt-1 mb-1">
                    Description
                  </h2>
                  <hr />
                  <p className="text-muted lead">{info}</p>
                  {/**buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </DetailWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const DetailWrapper = styled.div`
  * {
    font-size: 0.9rem;
  }
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
    padding: 20px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.4s linear;
  }
  &:hover {
    .card {
      boder: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.4s linear;
  }
`;
