import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { withCookies, Cookies } from "react-cookie";
import { Header, Footer, baseUrl } from "./components";
import WithoutLang from "./components/screens/WithoutLang";
import Home from "./components/screens/Home";
import ProductDetail from "./components/screens/ProductDetail";
import Cart from "./components/screens/Cart";
import Category from "./components/screens/Category";
import Products from "./components/screens/Products";
import { CountryCodes } from "./services/extra";
import { getClientInfo } from "./services/api";
class App extends Component {
  constructor(props) {
    super(props);
    this.addToCard = this.addToCard.bind(this);
    this.removeCartByIndex = this.removeCartByIndex.bind(this);
    this.checkItemIncart = this.checkItemIncart.bind(this);
    this.state = {
      id: 1,
      pathname: window.location.pathname,
      url: window.location.href,
      origin: window.location.origin,
      gotCountry: false
    };
  }
  componentDidMount() {
    this.setThemeVar();
    this.getUserInfo();
  }
  getUserInfo() {
    if (
      localStorage.getItem("country_code") &&
      localStorage.getItem("continent_name")
    ) {
      this.setState(
        {
          country_code: localStorage.getItem("country_code"),
          continent_name: localStorage.getItem("continent_name"),
          gotCountry: true
        },
        () => {
          this.returnToCountry();
        }
      );
      return;
    }
    getClientInfo()
      .then(res => res.json())
      .then(resJson => {
        console.log({ resJson });
        const {
          info: { country_code, continent_name },
          success
        } = resJson;
        if (success) {
          localStorage.setItem("country_code", country_code);
          localStorage.setItem("continent_name", continent_name);
          // localStorage.setItem("country_name", continent_name);
          this.setState(
            {
              country_code,
              continent_name,
              gotCountry: true
            },
            () => {
              this.returnToCountry();
            }
          );
        } else {
          this.returnToCountry();
        }
      })
      .catch(err => {
        console.log({ err });
        this.returnToCountry();
      });
  }
  returnToCountry() {
    const { pathname, gotCountry, country_code } = this.state;
    let countryCode = pathname.split("/")[1];
    if (CountryCodes.includes(countryCode.toUpperCase())) {
      this.setState({ headerPath: countryCode });
    } else {
      if (gotCountry) {
        if (true) window.location.pathname = `/${country_code}${pathname}`;
      } else {
        window.location.pathname = `/IN${pathname}`;
      }
    }
  }
  addToCard(item = {}) {
    // this.setState({id: this.state.id + 1})
    // console.log({pp: item})
    const { cookies, allCookies } = this.props;
    // console.log({pp1: allCookies.cart})
    if (!allCookies.cart) {
      cookies.set("cart", [item], { path: "/" });
    }
    if (allCookies.cart) {
      if (allCookies.cart.length < 1) {
        cookies.set("cart", [item], { path: "/" });
        return;
      }
      allCookies.cart.map(el => {
        if (el.pId === item.pId && item.pId) {
          console.log("already added", el.pId, item.pId);
        } else {
          console.log("noot");
          cookies.set("cart", [...allCookies.cart, item], { path: "/" });
        }
      });
    }
    // if (item) cookies.set("cart", [...allCookies.cart, item], { path: "/" });
  }
  removeCartByIndex(index) {
    const { cookies, allCookies } = this.props;
    if (!allCookies.cart) {
      return;
    }
    if (allCookies.cart.length < 1) return;

    let cart = allCookies.cart;
    cart.splice(index, 1);
    cookies.set("cart", cart, { path: "/" });

    // var array = [2, 5, 9];
    // console.log(array)
    // var index = array.indexOf(5);
    // if (index > -1) {
    //   array.splice(index, 1);
    // }
    // // array = [2, 9]
    // console.log(array);
  }
  checkItemIncart(item) {
    const { allCookies } = this.props;
    if (!allCookies.cart) return false;
    if (allCookies.cart.length < 1) return false;

    let isItem = false;
    allCookies.cart.map(cartItem => {
      if (item.pId === cartItem.pId) isItem = true;
    });

    return isItem;
  }
  setThemeVar() {
    fetch(`${baseUrl}/options/getsitesettings`)
      .then(rs => rs.json())
      .then(res => {
        console.log({ res });
        res.options.map(el => {
          document.body.style.setProperty(`--${el.optionname}`, el.optionvalue);
        });
      });
  }
  render() {
    const {
      cookies: { cookies },
      allCookies: { cart }
    } = this.props;
    const { headerPath } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header headerPath={headerPath} cart={cart} />
          <Switch>
            <Route
              path="/:lang"
              exact
              component={props => (
                <Home cookies={cookies} {...props} addToCard={this.addToCard} />
              )}
            />
            <Route
              path="/"
              exact
              component={props => (
                <WithoutLang
                  cookies={cookies}
                  {...props}
                  addToCard={this.addToCard}
                />
              )}
            />
            <Route
              path="/:lang/product/:id"
              exact
              component={props => (
                <ProductDetail
                  cookies={cookies}
                  {...props}
                  addToCard={this.addToCard}
                  checkItemIncart={this.checkItemIncart}
                />
              )}
            />
            <Route
              path="/:lang/product"
              exact
              component={props => (
                <Products
                  cookies={cookies}
                  {...props}
                  addToCard={this.addToCard}
                  checkItemIncart={this.checkItemIncart}
                />
              )}
            />
            <Route
              path="/:lang/cart"
              exact
              component={props => (
                <Cart
                  cookies={cookies}
                  cart={cart}
                  removeCartByIndex={this.removeCartByIndex}
                  {...props}
                />
              )}
              addToCard={this.addToCard}
            />
            <Route
              path="/:lang/category"
              exact
              component={props => (
                <Category
                  cookies={cookies}
                  {...props}
                  addToCard={this.addToCard}
                />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
