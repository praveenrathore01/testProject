import React, { Component } from "react";
import SelectMulti from "react-select";
import { Icon } from "react-icons-kit";
import { ic_clear } from "react-icons-kit/md/ic_clear";
import { selectStyle } from "../Constants";
import { CatProductSlider } from "../";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          img: "http://via.placeholder.com/700x500",
          title: "demo product",
          link: "#",
          basePrice: "2000",
          sizes: ["200ml", "100ml"]
        },
        {
          img: "http://via.placeholder.com/700x500",
          title: "demo product",
          link: "#",
          basePrice: "2000",
          sizes: ["200ml", "100ml"]
        },
        {
          img: "http://via.placeholder.com/700x500",
          title: "demo product",
          link: "#",
          basePrice: "2000",
          sizes: ["200ml", "100ml"]
        },
        {
          img: "http://via.placeholder.com/700x500",
          title: "demo product",
          link: "#",
          basePrice: "2000",
          sizes: ["200ml", "100ml"]
        },
        {
          img: "http://via.placeholder.com/700x500",
          title: "demo product",
          link: "#",
          basePrice: "2000",
          sizes: ["200ml", "100ml"]
        }
      ],
      introList: [
        {
          title: "Cleanse",
          desc:
            "Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen."
        }
      ]
    };
  }

  render() {
    const {
      state: { productList, introList }
    } = this;

    return (
      <div className="start-section">
        <div className="CPBody CPBody--activeCategory">
          <CatProductSlider
            rowClassName="light"
            intro={introList[0]}
            productsArr={productList}
          />
          <CatProductSlider
            rowClassName="dark"
            intro={introList[0]}
            productsArr={productList}
          />
        </div>
      </div>
    );
  }
}
