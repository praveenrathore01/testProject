import React, { Component } from "react";
// import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";
import imgSliderMed1 from "../assets/images/slider-medicine-1.png";
import imgSliderMed2 from "../assets/images/slider-medicine-2.png";
import imgSliderMed3 from "../assets/images/slider-medicine-3.png";

export class HomeSliderSection extends Component {
  constructor(props) {
    super(props);
    this.setLeft = this.setLeft.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      flLeft: 0,
      flWidth: "20%",
      isSmall: window.innerWidth >= 640 ? false : true
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize());
    window.addEventListener("load", this.handleResize());
    // You can register events in componentDidMount hook
    this.flkty.on("scroll", progress => {
      // console.log(progress*100)
      // let Flwidth = 20;
      let left = `${progress * 80}%`;
      // this.setLeft(left)
      $(this.refs.slideDisplay).css({
        left: left
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize());
    window.removeEventListener("load", this.handleResize());
  }
  handleResize() {
    this.setState({
      isSmall: window.innerWidth >= 640 ? false : true
    });
    // this.flkty
  }
  setLeft(flLeft) {
    this.setState({ flLeft });
  }
  renderSlides(arr) {
    return arr.map((el, index) => {
      const { title, imgLg, imgsm, img } = el;
      return (
        <div className="MCItemCarousel-Item" key={index}>
          <div className="MCItemCarouselProduct">
            <Link
              className="MCItemCarouselProduct-wrapper has-overflowHidden"
              // href={'#'}
              // to="product"
              params={{ id: el.pid }}
              to={{ pathname: `product/${el.pId}`, state: { product: el } }}
            >
              <picture className="Picture ProductPicture MCItemCarouselProduct-picture">
                {imgLg && <source srcSet={imgLg} media="(min-width: 1025px)" />}
                {imgsm && <source srcSet={imgsm} media="(min-width: 640px)" />}
                <source srcSet={img} media="(min-width: 0px)" />
                <img alt={"el.alt"} />
              </picture>
            </Link>
          </div>
          <div className="MCItemCarouselCaption has-intro">
            <Link
              className="MCItemCarouselCaption-link"
              to={{ pathname: "product", state: { product: el } }}
            >
              <h5 className="MCItemCarouselCaption-title">{title}</h5>
            </Link>
          </div>
        </div>
      );
    });
  }
  ProductSliderEl() {
    // const productArr = [
    //   // {
    //   //   img: imgSliderMed1,
    //   //   imgsm: imgSliderMed1,
    //   //   imglg: imgSliderMed1,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // },
    //   // {
    //   //   img: imgSliderMed2,
    //   //   imgsm: imgSliderMed2,
    //   //   imglg: imgSliderMed2,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // },
    //   // {
    //   //   img: imgSliderMed3,
    //   //   imgsm: imgSliderMed3,
    //   //   imglg: imgSliderMed3,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // },
    //   // {
    //   //   img: imgSliderMed1,
    //   //   imgsm: imgSliderMed1,
    //   //   imglg: imgSliderMed1,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // },
    //   // {
    //   //   img: imgSliderMed2,
    //   //   imgsm: imgSliderMed2,
    //   //   imglg: imgSliderMed2,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // },
    //   // {
    //   //   img: imgSliderMed3,
    //   //   imgsm: imgSliderMed3,
    //   //   imglg: imgSliderMed3,
    //   //   alt: "Parsley Seed Anti-Oxidant",
    //   //   productLink: "#",
    //   //   name: "Parsley Seed Anti-Oxidant Facial Treatment"
    //   // }
    // ];
    const flickityOptions = {
      initialIndex: 0,
      pageDots: false,
      cellAlign: "left",
      contain: true
    };
    const { isSmall } = this.state;
    const { title, description, noTitle, productArr } = this.props;

    return (
      <div className="MCItemCarousel MCItemCarousel--hasIntro is-visible">
        <div className="MCItemCarousel-scrollable">
          <div
            className="MCCarouselNav MCCarouselNav--prev"
            style={{ display: "flex" }}
          >
            <button className="MCCarouselNav-btn">
              <div className="MCCarouselNav-btnWrapper">
                <svg
                  aria-labelledby="37f650ea-d1e7-4c52-b5bc-ce00d6f0e81a"
                  className="Icon MCCarouselNav-btnIcon"
                  role="img"
                  viewBox="0 0 50 50"
                >
                  <title id="37f650ea-d1e7-4c52-b5bc-ce00d6f0e81a">PREV</title>
                  <g>
                    <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 " />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div
            className="MCCarouselNav MCCarouselNav--next"
            style={{ display: "flex" }}
          >
            <button className="MCCarouselNav-btn">
              <div className="MCCarouselNav-btnWrapper">
                <svg
                  aria-labelledby="9ab42d0a-6c07-4f1a-8816-77b12d9d094d"
                  className="Icon MCCarouselNav-btnIcon"
                  role="img"
                  viewBox="0 0 50 50"
                >
                  <title id="9ab42d0a-6c07-4f1a-8816-77b12d9d094d">NEXT</title>
                  <g>
                    <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 " />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div className="MCItemCarousel-viewport">
            <div className="MCItemCarousel-productWrapper flickity-enabled">
              <Flickity
                className={"carousel"} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                flickityRef={c => (this.flkty = c)}
              >
                {!isSmall && !noTitle && (
                  <div className="MCItemCarouselIntro">
                    <div className="MCItemCarouselIntro-wrapper">
                      <div className="MCItemCarouselIntro-group">
                        <h2 className="MCItemCarouselIntro-title">{title}</h2>
                      </div>
                      <div className="MCItemCarouselIntro-group">
                        <div className="MCItemCarouselIntro-copy">
                          <p className="MCItemCarouselIntro-copyParagraph">
                            {description}
                          </p>
                        </div>
                        <div>
                          <a
                            className="MCItemCarouselIntro-link"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Explore winter skin care
                            <svg
                              className="Icon MCItemCarouselIntro-linkIcon"
                              role="img"
                              viewBox="0 0 50 50"
                            >
                              <g>
                                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z" />
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.renderSlides(productArr)}
              </Flickity>
              <div className="MCCarouselScrollbar">
                <div
                  className="MCCarouselScrollbar-bar"
                  ref="slideDisplay"
                  style={{ left: this.state.flLeft, width: this.state.flWidth }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
    const { productArr } = this.props;
    return (
      <div>
        <div>{this.ProductSliderEl(productArr)}</div>
        {/* <OwlCarousel className="owl-theme owl-carousel-type-1" {...settings}>
          <div className="owl-inside-text-wrapper">
            <div className="text-inside">
              <h4>Cool-Weather Care</h4>
              <p>
                A seasonally appropriate skin care routine includes formulations
                that impart incremental layers of hydration in the face of
                crisp, ever-changing conditions.
              </p>
            </div>
            <div className="insite-btn">
              <a href="#">
                Explore Skin Care
                <svg className="Icon Link-icon" role="img" viewBox="0 0 50 50">
                  <g>
                    <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="owl-inside-img-wrapper owl-inside-img-wrapper-1">
            <div className="img-display-1">
              <img src={imgSliderMed1} />
            </div>
          </div>
          <div className="owl-inside-img-wrapper owl-inside-img-wrapper-1">
            <div className="img-display-2">
              <img src={imgSliderMed2} />
            </div>
          </div>
          <div className="owl-inside-img-wrapper owl-inside-img-wrapper-1">
            <div className="img-display-3">
              <img src={imgSliderMed3} />
            </div>
          </div>
          <div className="owl-inside-img-wrapper">
            <div className="img-display-4">
              <img src={imgSliderMed1} />
            </div>
          </div>
          <div className="owl-inside-img-wrapper">
            <div className="img-display-5">
              <img src={imgSliderMed1} />
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    );
  }
}
