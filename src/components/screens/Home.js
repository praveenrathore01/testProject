import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../Constants";
import { Banner, HomeSliderSection, HomeContentSec, Quate } from "../";
import { mainProducts } from "../Constants";
class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchHomeContent = this.fetchHomeContent.bind(this);
    this.state = {
      pageContent: {},
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchHomeContent();
    // window.addEventListener('load', this.fetchHomeContent)
  }
  componentWillUnmount() {
    // window.removeEventListener('load', this.fetchHomeContent)
  }
  fetchHomeContent() {
    console.log("fetchstart");
    axios
      .get(`${baseUrl}/pages/pagecontent/`, {
        params: {
          layout: "home",
          country: "Hong Kong"
        }
      })
      .then(response => {
        console.log(response, "fetch success");
        if (response.data) {
          if (response.data.success);
          this.setState({
            pageContent: response.data.content.pagecontent,
            loaded: true
          });
        }
      })
      .catch(function(error) {
        console.log(error, "fetch error");
      });
  }
  render() {
    const {
      pageContent: { firstsection, secondsection, thirdsection, fourthsection }
    } = this.state;
    return (
      <div>
        {/* <button
        onClick={()=>{
          console.log(this.state)
        }}
        >test</button> */}
        {firstsection && (
          <Banner
            title={firstsection.title}
            imagelink={firstsection.imagelink}
            btntext={firstsection.btntext}
            description={firstsection.description}
            {...this.props}
          />
        )}
        {secondsection && (
          <HomeSliderSection
            title={secondsection.title}
            productArr={mainProducts}
            noTitle={false}
            description={secondsection.description}
            {...this.props}
          />
        )}
        {thirdsection && (
          <HomeContentSec
            title={thirdsection.title}
            imagelink={thirdsection.imagelink}
            btntext={thirdsection.btntext}
            description={thirdsection.description}
            {...this.props}
          />
        )}
        {fourthsection && (
          <Quate
            title={fourthsection.title}
            description={fourthsection.description}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

export default Home;
