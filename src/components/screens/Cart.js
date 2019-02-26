import React, { Component } from "react";
import SelectMulti from "react-select";
import { Icon } from "react-icons-kit";
import { ic_clear, ic_close, ic_add } from "react-icons-kit/md";
import { Collapse } from "reactstrap";
import { selectStyle, mainProducts } from "../Constants";
import { HomeSliderSection } from "../";
import productImage from "../../assets/images/slider-medicine-1.png";
import secImage from "../../assets/images/getseal.gif";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.varientChange = this.varientChange.bind(this);
    this.flavorChange = this.flavorChange.bind(this);
    this.qtyChange = this.qtyChange.bind(this);
    this.shippingChange = this.shippingChange.bind(this);
    this.toggleTaxCol = this.toggleTaxCol.bind(this);
    this.changeTaxInValue = this.changeTaxInValue.bind(this);
    this.renderCartItem = this.renderCartItem.bind(this);
    this.state = {
      shippingOptions: [
        {
          label: "India",
          value: "india"
        },
        {
          label: "USA",
          value: "usa"
        },
        {
          label: "hong kong",
          value: "hongKong"
        }
      ],
      selectedShipping: {
        label: "India",
        value: "india"
      },
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
      isTaxOpen: false,
      taxInValue: "",
      shippingCharge: 10
    };
  }

  shippingChange = selectedShipping => {
    this.setState({ selectedShipping });
  };
  varientChange = selectedVarient => {
    this.setState({ selectedVarient });
  };
  flavorChange = selectedFlavor => {
    this.setState({ selectedFlavor });
  };
  qtyChange = selectedQty => {
    this.setState({ selectedQty });
  };
  toggleTaxCol() {
    this.setState(prevState => ({
      isTaxOpen: !prevState.isTaxOpen
    }));
  }
  changeTaxInValue(e) {
    this.setState({
      taxInValue: e.target.value
    });
  }
  renderCartItem(cart) {
    const {
      state: {
        varientOptions,
        selectedVarient,
        flavorOptions,
        selectedFlavor,
        qtyOptions,
        selectedQty,
        shippingOptions,
        selectedShipping,
        isTaxOpen,
        taxInValue
      }
    } = this;
    return cart.map((item, index) => {
      return (
        <div className="cart-product-div" key={index}>
          <div
            className="cart-product-remove"
            onClick={() => {
              console.log(this.props);
              this.props.removeCartByIndex(index);
            }}
          >
            <Icon icon={ic_clear} />
          </div>
          <div className="cart-product-image-wrap">
            <img src={item.img} alt="product" />
            <div className="cart-product-price">
              <p>${item.basePrice}</p>
            </div>
          </div>
          <div className="cart-product-detail">
            <div className="cart-product-name">{"lorem ipsum"}</div>
            <div className="product-options">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="row">
                      <div className="pt-3 pl-2 pr-2 col-xs-6 col-lg-5 ">
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
                      <div className="pt-3 pl-2 pr-2 col-xs-6 col-lg-4 ">
                        <SelectMulti
                          id={"selectedFlavor"}
                          styles={selectStyle}
                          value={selectedFlavor}
                          isMulti={false}
                          placeholder={"Flavor"}
                          onChange={this.flavorChange}
                          options={flavorOptions}
                        />
                      </div>
                      <div className="pt-3 pl-2 pr-2 col-xs-6 col-lg-3">
                        <SelectMulti
                          id={"selectedQty"}
                          styles={selectStyle}
                          value={selectedQty}
                          isMulti={false}
                          input={false}
                          placeholder={"Qty"}
                          onChange={this.qtyChange}
                          options={qtyOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="product-info ">
                      <p className="product-info-price">${item.basePrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info text-left">
              {/* <p className="product-info-price">$88.00</p> */}
              <p className="product-info-shipping">FREE RETURN SHIPPING.</p>
            </div>
          </div>
        </div>
      );
    });
  }
  getCartPrice(extra = 0) {
    const { cart } = this.props;
    if (!cart) return 0;
    if (cart.length < 1) return 0;

    let price = 0;
    cart.map(item => {
      price = price + item.basePrice;
    });

    return price + extra;
  }
  render() {
    const {
      state: {
        varientOptions,
        selectedVarient,
        flavorOptions,
        selectedFlavor,
        qtyOptions,
        selectedQty,
        shippingOptions,
        selectedShipping,
        isTaxOpen,
        taxInValue,
        shippingCharge
      },
      props: { cart }
    } = this;

    return (
      <div className="start-section">
        {/* <Header /> */}
        <div className="cart-page-container">
          <div className="container-extend">
            <div className="row">
              <div className="col-lg-8">
                <div className="cart-heading">
                  <h3 className="MCItemCarouselIntro-title">
                    My Bag ({cart ? cart.length : 0})
                  </h3>
                </div>
                <div className="cart-product-container">
                  <div className="cart-product-inner">
                    <div className="cart-product-header">
                      <p className="sm-title">Product</p>
                    </div>
                    <div className="cart-product-body">
                      <div className="cart-product-list">
                        {this.renderCartItem(cart ? cart : [])}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 offset-xl-1 col-lg-4">
                <div className="order-summary-wrapper">
                  <div className="cart-heading">
                    <h3 className="sm-title">ORDER SUMMARY</h3>
                  </div>
                  <div className="order-summary-form">
                    <form
                      onSubmit={e => {
                        e.preventDafault();
                      }}
                    >
                      <div className="order-summary-row lr">
                        <p className="order-summary-label">SUBTOTAL</p>
                        <p className="value">${this.getCartPrice()}</p>
                      </div>
                      <div className="order-summary-row lr nbr">
                        <p className="order-summary-label">ESTIMATED TAX</p>
                        <Icon
                          onClick={this.toggleTaxCol}
                          icon={isTaxOpen ? ic_close : ic_add}
                        />
                      </div>
                      <div className="order-summary-row lr">
                        <Collapse isOpen={this.state.isTaxOpen}>
                          <div className="container">
                            <div className="row">
                              <div className="row">
                                <div className="col-5 has-input">
                                  <input
                                    type="text"
                                    onChange={this.changeTaxInValue}
                                    value={taxInValue}
                                  />
                                </div>
                                <div className="col-7 has-input">
                                  <input
                                    type="button"
                                    className="btn btn-red"
                                    value={"Calculate"}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="order-summary-row lr nbr">
                        <p className="order-summary-label">SHIPPING</p>
                        <p className="value">${shippingCharge}</p>
                      </div>
                      <div className="order-summary-row">
                        <div>
                          <SelectMulti
                            id={"selectedQty"}
                            styles={selectStyle}
                            value={selectedShipping}
                            isMulti={false}
                            input={false}
                            placeholder={"Quantity"}
                            onChange={this.shippingChange}
                            options={shippingOptions}
                          />
                        </div>
                      </div>
                      <div className="order-summary-row lr nbr">
                        <p className="order-summary-label">ORDER TOTAL</p>
                        <p className="value">
                          ${this.getCartPrice(shippingCharge)}
                        </p>
                      </div>
                      <div className="order-summary-row order-summary-footer">
                        <div className="order-summary-btns">
                          <span className="btn or-btn btn-red btn-icon">
                            Checkout
                          </span>
                          <span className="btn or-btn btn-blue btn-icon">
                            Paypal
                          </span>
                          <span className="btn or-btn btn-light-grey btn-icon">
                            Express
                          </span>
                          <span className="btn or-btn btn-outline-shopping btn-icon">
                            continue shopping
                          </span>
                        </div>
                        <div className="text-center">
                          <img
                            src={secImage}
                            alt="secure"
                            className="img-fluid "
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <HomeSliderSection productArr={mainProducts} noTitle={true} />
          </div>
        </div>
      </div>
    );
  }
}
