import React, { Component } from "react";
import SelectMulti from "react-select";
import { Icon } from "react-icons-kit";
import { ic_clear } from "react-icons-kit/md/ic_clear";
import { classNames } from "classnames";
import { selectStyle } from "../Constants";
import { CatProductSlider } from "../";
import { categoryList } from "../Constants";
import { getProductByCat } from "../../services/api";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.getProductByCategory = this.getProductByCategory.bind(this);
    this.state = {
      productList: this.props.products || [
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
      productByCategory: [],
      introList: [
        // {
        //   title: "Cleanse",
        //   desc:
        //     "Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen."
        // }
      ]
    };
  }
  componentDidMount() {
    this.getProductByCategory();
  }
  getProductByCategory() {
    categoryList.map((el, index) => {
      getProductByCat(el)
        .then(res => res.json())
        .then(resJson => {
          if (resJson.success) {
            this.setState(
              prevState => ({
                productByCategory: [
                  ...prevState.productByCategory,
                  {
                    productArr: [...resJson.products],
                    categoryName: el
                  }
                ],
                introList: [
                  ...prevState.introList,
                  {
                    title: el,
                    desc:
                      "Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen."
                  }
                ]
              }),
              () => {
                console.log(this.state.productByCategory);
              }
            );
          }
        });
    });
  }
  renderCateRow() {
    const { productByCategory, introList } = this.state;
    let categories = introList;
    return productByCategory.map((el, index) => {
      console.log(el);
      // categories[0].title = el.categoryName
      return (
        <CatProductSlider
          key={index}
          rowClassName={index % 2 ? "light" : "dark"}
          intro={introList[index]}
          productsArr={el.productArr}
        />
      );
    });
  }
  render() {
    const {
      state: { productList, introList }
    } = this;

    return (
      <div className="start-section">
        <div className="CPBody CPBody--activeCategory">
          {this.renderCateRow()}
          {/* <CatProductSlider
            rowClassName="light"
            intro={introList[0]}
            productsArr={productList}
          />
          <CatProductSlider
            rowClassName="dark"
            intro={introList[0]}
            productsArr={productList}
          /> */}
        </div>
      </div>
    );
  }
}
