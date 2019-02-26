import React, { Component } from "react";
// import { Icon } from 'react-icons-kit';
// import { star } from 'react-icons-kit/icomoon/star';
import { Collapse } from "reactstrap";
import SelectMulti from "react-select";
import classNames from "classnames";
import { Icon } from "react-icons-kit";
import { starFull, starEmpty, starHalf } from "react-icons-kit/icomoon/";
// import imgSliderMed1 from "../assets/images/slider-medicine-1.png";
import { ProductViewSlider } from "./";
import { selectStyle } from "./Constants";

export class ProductDetailSec extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.varientChange = this.varientChange.bind(this);
    this.flavorChange = this.flavorChange.bind(this);
    this.qtyChange = this.qtyChange.bind(this);
    this.handleSubscribeChecked = this.handleSubscribeChecked.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      collapse: false,
      varientOptions: [
        {
          label: "CDB Strength",
          value: "CDB_Strength"
        },
        {
          label: "CDB op2",
          value: "CDB_op2"
        },
        {
          label: "CDB op3",
          value: "CDB_op3"
        }
      ],
      selectedVarient: null,
      flavorOptions: [
        {
          label: "Flavor",
          value: "Flavor"
        },
        {
          label: "Flavor 2",
          value: "Flavor_2"
        },
        {
          label: "Flavor 3",
          value: "Flavor_3"
        }
      ],
      selectedFlavor: null,
      qtyOptions: [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        },
        {
          label: "4",
          value: "4"
        },
        {
          label: "5",
          value: "5"
        },
        {
          label: "6",
          value: "6"
        },
        {
          label: "7",
          value: "7"
        },
        {
          label: "8",
          value: "8"
        },
        {
          label: "9",
          value: "9"
        },
        {
          label: "10",
          value: "10"
        }
      ],
      selectedQty: null,
      susTimeOptions: [
        {
          label: "1 Month",
          value: "1"
        },
        {
          label: "3 Months",
          value: "3"
        },
        {
          label: "1 Year",
          value: "12"
        }
      ],
      selectedSusTime: {
        label: "1 Month",
        value: "1"
      },
      subscribeChecked: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }));
  }
  varientChange = selectedVarient => {
    this.setState({ selectedVarient });
  };
  handleSubscribeChecked() {
    this.setState(prevState => ({
      subscribeChecked: !prevState.subscribeChecked
    }));
  }
  flavorChange = selectedFlavor => {
    this.setState({ selectedFlavor });
  };
  qtyChange = selectedQty => {
    this.setState({ selectedQty });
  };
  susTimeChange = selectedSusTime => {
    this.setState({ selectedSusTime });
  };
  renderReviewIcons() {
    return (
      <div className="rating-icon">
        <Icon icon={starFull} />
        <Icon icon={starFull} />
        <Icon icon={starFull} />
        <Icon icon={starHalf} />
        <Icon icon={starEmpty} />
        <h4 style={{ display: "inline-block", paddingLeft: 10 }}> 5 reviews</h4>
      </div>
    );
  }
  addToCart() {
    const { addToCard, cookies, product } = this.props;
    console.log({ aa: product });
    addToCard(product);
  }
  render() {
    const settings = {
      margin: 10,
      nav: true,
      loop: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
    const {
      state: {
        varientOptions,
        selectedVarient,
        flavorOptions,
        selectedFlavor,
        qtyOptions,
        selectedQty,
        subscribeChecked,
        selectedSusTime,
        susTimeOptions
      },
      props: { product, checkItemIncart }
    } = this;
    return (
      <div className="first_sec">
        <div className="container-fluid">
          <div className="large-container" style={{ paddingBottom: 100 }}>
            <div className="row">
              <div className="col-md-6">
                <div className="display-product-wrapper">
                  <div className="display-product-inner">
                    <div className="image-view text-center">
                      <div>
                        <ProductViewSlider imgArr={[{ img: product.img }]} />
                        {/* <img
                          src={imgSliderMed1}
                          className="img-fluid"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bullet-icon-wrapper">
                  <div className="bullt-icon-inner">
                    <form>
                      <input type="radio" name="quantity" value="100" /> <label> 100 ml </label>
                      <input type="radio" name="quantity" value="125" /> <label> 125 ml </label>
                      <input type="radio" name="quantity" value="150" /> <label> 150 ml  </label>
                    </form>
                  </div>
                </div> */}
              </div>
              <div className="col-md-6">
                <div className="product-detail-data">
                  <div className="product-detail-inner">
                    <div className="product-summary">
                      <h1 className="product-title">
                        {product.title}
                        {this.renderReviewIcons()}
                      </h1>

                      <p className="product-description">{product.desc}</p>
                    </div>
                    <div className="ProductDetails">
                      <ul className="ProductDetails-list">
                        <li className="ProductDetails-listItem ProductDetails-listItem--0">
                          <div className="ProductDetails-itemTitle">
                            Skin feel
                          </div>
                          <div className="ProductDetails-itemDescription">
                            Nourished, supple, with a grease-less finish
                          </div>
                        </li>
                        <li className="ProductDetails-listItem ProductDetails-listItem--1">
                          <div className="ProductDetails-itemTitle">Aroma</div>
                          <div className="ProductDetails-itemDescription">
                            Citrus, woody, herbaceous
                          </div>
                        </li>
                        <li className="ProductDetails-listItem ProductDetails-listItem--2">
                          <div className="ProductDetails-itemTitle">
                            Key ingredients
                            <button
                              aria-label="View more ingredients"
                              className="ProductDetails-moreBtn"
                              data-ref="ingredientOverlay-toggle"
                              type="button"
                              onClick={this.toggle}
                            >
                              <svg
                                className="Icon ProductDetails-moreBtnIcon"
                                data-ref="ingredientOverlay-icon"
                                role="img"
                                viewBox="0 0 50 50"
                              >
                                <g>
                                  <circle
                                    className="Glyph-addAndCloseWithCircle--circle"
                                    cx="25"
                                    cy="25"
                                    r="22"
                                    fill="none"
                                  />
                                  <polygon
                                    className="Glyph-addAndCloseWithCircle--plus"
                                    points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 "
                                  />
                                  <polygon
                                    className="Glyph-addAndCloseWithCircle--close"
                                    points="32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 "
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div className="ProductDetails-itemDescription">
                            <div style={{ width: "100%" }}>
                              {!this.state.collapse &&
                                `${product.topIngredient}`}
                            </div>
                            <Collapse isOpen={this.state.collapse}>
                              <div>{product.ingredients}</div>
                            </Collapse>
                          </div>
                        </li>
                        <li className=" ProductDetails-listItem--2">
                          <div className="">
                            <div className="row">
                              <div className="pt-3 col-sm-6">
                                <SelectMulti
                                  id={"selectVarient"}
                                  styles={selectStyle}
                                  value={selectedVarient}
                                  isMulti={false}
                                  placeholder={"CDB Strength"}
                                  onChange={this.varientChange}
                                  options={varientOptions}
                                />
                              </div>
                              <div className="pt-3 col-sm-6">
                                <SelectMulti
                                  id={"selectVarient"}
                                  styles={selectStyle}
                                  value={selectedFlavor}
                                  isMulti={false}
                                  placeholder={"Flavor"}
                                  onChange={this.flavorChange}
                                  options={flavorOptions}
                                />
                              </div>
                              <div className="pt-3 col-sm-6">
                                <SelectMulti
                                  id={"selectVarient"}
                                  styles={selectStyle}
                                  value={selectedQty}
                                  isMulti={false}
                                  input={false}
                                  placeholder={"Quantity"}
                                  onChange={this.qtyChange}
                                  options={qtyOptions}
                                />
                              </div>
                              <div className="pt-3 col-sm-6">
                                <div className="has-inputs has-checkbox-input">
                                  <input
                                    type="checkbox"
                                    checked={subscribeChecked}
                                    id="subscribeCheckBox"
                                    onChange={this.handleSubscribeChecked}
                                  />
                                  <label htmlFor="subscribeCheckBox">
                                    <span
                                      className={classNames("CheckIcon", {
                                        checked: subscribeChecked
                                      })}
                                    />
                                    Subscribe &amp; save 10%
                                  </label>
                                </div>
                              </div>
                              {subscribeChecked && (
                                <div className="pt-3 col-12">
                                  <SelectMulti
                                    id={"selectVarient"}
                                    styles={selectStyle}
                                    value={selectedSusTime}
                                    isMulti={false}
                                    onChange={this.susTimeChange}
                                    options={susTimeOptions}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </li>

                        {/* My Work */}
                        <li className="ProductDetails-addtocart ProductDetails-listItem ProductDetails-addtocart-2">
                          {/* <div className="cart-quantity">
                            <button>-</button>
                            <input type="text" value="1" />
                            <button className="sub-btn" style={{ fontSize: 19, }}>+</button>
                          </div> */}
                          <div
                            className={classNames("cart-btn-right", {
                              disable: checkItemIncart(product)
                            })}
                          >
                            <button onClick={this.addToCart}>
                              Add To Cart - ${product.basePrice}
                            </button>
                          </div>
                        </li>
                        {/* <li className="ProductDetails-listItem ProductDetails-listItem--4">
                          <div className="ProductDetails-itemTitle">
                            FAQ
                            <button
                              aria-label="View more ingredients"
                              className="ProductDetails-moreBtn"
                              data-ref="ingredientOverlay-toggle"
                              typel="button"
                              onClick={
                                ()=>{

                                }
                                // this.toggle
                              }
                            >
                              <svg
                                className="Icon ProductDetails-moreBtnIcon"
                                data-ref="ingredientOverlay-icon"
                                role="img"
                                viewBox="0 0 50 50"
                              >
                                <g>
                                  <circle
                                    className="Glyph-addAndCloseWithCircle--circle"
                                    cx="25"
                                    cy="25"
                                    r="22"
                                    fill="none"
                                  />
                                  <polygon
                                    className="Glyph-addAndCloseWithCircle--plus"
                                    points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 "
                                  />
                                  <polygon
                                    className="Glyph-addAndCloseWithCircle--close"
                                    points="32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 "
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                          {<div className="ProductDetails-itemDescription">
                            Nourished, supple, with a grease-less finish
                          </div> }
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
