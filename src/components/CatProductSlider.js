import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CatProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderProducts(arr) {
    return arr.map((el, index) => {
      const { imgXL, imgLg, img, title, link, basePrice, sizes } = el;
      const {
        productid: { producttitle, productdescription, sku },
        variation,
        galleryimgdetails,
        attributes
      } = el;
      let productSize = [];
      attributes.map(el => {
        if (el.names === "size") {
          productSize = el.values;
        }
      });
      return (
        <div
          key={index}
          className={`CPBodyRow-scrollableProduct CPBodyRow-scrollableProduct--${index} has-overflowHidden CPSubcatProduct`}
        >
          <div className="CPSubcatProduct-wrapper">
            {/* <a href={link}> */}
            <Link to={`product/${sku}`}>
              <picture className="Picture ProductPicture CPSubcatProduct-picture">
                {imgXL && <source srcSet={imgXL} media="(min-width: 1025px)" />}
                {imgLg && <source srcSet={imgLg} media="(min-width: 640px)" />}
                <source
                  srcSet={galleryimgdetails[0]}
                  media="(min-width: 0px)"
                />
                <img alt={title} />
              </picture>
            </Link>
            {/* </a> */}
            <div className="CPSubcatProductSizePrice">
              <a href={link}>
                <h5 className="CPSubcatProductSizePrice-name">
                  {producttitle}
                </h5>
                <div className="CPSubcatProductSizePrice-info false">
                  <span>{productSize.length} Sizes</span>
                  <span className="CPSubcatProductSizePrice-separator">/</span>
                  <span>From ${variation[3].sale_price}</span>
                </div>
              </a>
            </div>
            <a href={link} />
          </div>
        </div>
      );
    });
  }
  render() {
    const {
      props: { productsArr, rowClassName, intro }
    } = this;
    return (
      <div className={`CPBodyRow CPBodyRow--${rowClassName}`}>
        <div className="CPSubcatIntro CPBodyRow-intro">
          <div className="CPSubcatIntroDescription">
            <button className="CPSubcatIntroDescription-btn" type="button">
              <h2 className="CPSubcatIntroDescription-name">{intro.title}</h2>
            </button>
            <p className="CPSubcatIntroDescription-info">{intro.desc}</p>
          </div>
          <div className="CPSubcatIntroCTA">
            <button className="CPSubcatIntroCTA-btn" type="button">
              <div className="CPSubcatIntroCTA-wrapper">
                <span className="CPSubcatIntroCTA-text">
                  See all {intro.title} ({productsArr.length})
                </span>
                <svg
                  aria-labelledby="58bc44ca-c20b-4103-bce2-9377bccdcbf4"
                  className="Icon CPSubcatIntroCTA-icon"
                  role="img"
                  viewBox="0 0 50 50"
                >
                  <title id="58bc44ca-c20b-4103-bce2-9377bccdcbf4">
                    See all 6 Cleansers
                  </title>
                  <g>
                    <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="CPBodyScrollable">
          <div className="CPBodyScrollable-wrapper">
            {this.renderProducts(productsArr)}
          </div>
          <div className="CPBodyScrollable-nav">
            <div className="CPBodyScrollable-navBtnTrigger CPBodyScrollable-navBtnTrigger--left is-disabled">
              <button
                className="CPBodyScrollable-navBtn"
                disabled=""
                tabIndex="-1"
              >
                <div className="CPBodyScrollable-navBtnWrapper">
                  <svg
                    aria-labelledby="f7ce7cf1-489f-4a8e-97b6-f282be26b629"
                    className="Icon CPBodyScrollable-navBtnIcon"
                    role="img"
                    viewBox="0 0 50 50"
                  >
                    <title id="f7ce7cf1-489f-4a8e-97b6-f282be26b629">
                      Scroll left
                    </title>
                    <g>
                      <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 " />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
            <div className="CPBodyScrollable-navBtnTrigger CPBodyScrollable-navBtnTrigger--right">
              <button className="CPBodyScrollable-navBtn" tabIndex="-1">
                <div className="CPBodyScrollable-navBtnWrapper">
                  <svg
                    aria-labelledby="fe43df96-3faa-4f0d-89af-423aa37f6562"
                    className="Icon CPBodyScrollable-navBtnIcon"
                    role="img"
                    viewBox="0 0 50 50"
                  >
                    <title id="fe43df96-3faa-4f0d-89af-423aa37f6562">
                      Scroll right
                    </title>
                    <g>
                      <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 " />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
