import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../Constants";
import {
  HomeSliderSection,
  ProductDetailSec,
  ProductUse,
  Reviews,
  Faqs
} from "../";
import { mainProducts } from "../Constants";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.fetchHomeContent = this.fetchHomeContent.bind(this);
    this.getProductDetail = this.getProductDetail.bind(this);
    this.state = {
      pageContent: {},
      productId: this.props.match.params.id,
      product: null,
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchHomeContent();
    this.getProductDetail();
    console.log({ props: this.props }, this.props.location.state);
  }
  fetchHomeContent() {
    axios
      .get(`${baseUrl}/pages/pagecontent/`, {
        params: {
          layout: "home",
          country: "Hong Kong"
        }
      })
      .then(response => {
        console.log(response);
        if (response.data) {
          if (response.data.success);
          this.setState({
            pageContent: response.data.content.pagecontent,
            loaded: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  getProductDetail() {
    mainProducts.map(product => {
      // console.log(`hii ${product.pId} ${this.props.match.id} ${this.state.productId}`)
      if (product.pId === this.props.match.params.id) {
        this.setState({ product });
      }
    });
  }
  render() {
    const {
      pageContent: { secondsection },
      product
    } = this.state;
    return (
      <div>
        {product && (
          <ProductDetailSec
            addToCard={this.props.addToCard}
            checkItemIncart={this.props.checkItemIncart}
            product={product}
          />
        )}
        <ProductUse />
        <div className="container-padding flex-container top-gap">
          <Reviews />
          <Faqs />
        </div>
        {secondsection && (
          <HomeSliderSection
            title={secondsection.title}
            productArr={mainProducts}
            description={secondsection.description}
          />
        )}
      </div>
    );
  }
}
export default ProductDetail;
