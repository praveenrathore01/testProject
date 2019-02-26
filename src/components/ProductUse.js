import React, { Component } from "react";

import ProductImage from "../assets/images/Aesop-Hair.jpg";

export class ProductUse extends Component {
  render() {
    return (
      <section
        className="PDPExpectations-wrapper theme-alabaster-2 is-visible"
        data-component="PDPExpectations"
        data-global-ref="ScrollRevealer-reveal"
      >
        <div
          className="PDPExpectations-fullImageWrapper PDPExpectations-fullImageWrapper--withObjectFit"
          data-ref="PDPExpectations-fullImageWrapper"
        >
          <span className="PDPExpectations-fullImageInner">
            <picture
              className="Picture PDPExpectations-fullImage"
              data-ref="PDPExpectations-fullImage"
            >
              <source srcSet={ProductImage} />
              <img alt="Resurrection Aromatique Hand Balm" />
            </picture>
          </span>
        </div>

        <div className="PDPExpectationsContent-wrapper">
          <div className="PDPExpectationsContent-inner">
            <div className="PDPExpectationsContent-sectionOne">
              <div className="PDPExpectationsContentSummary">
                <h5 className="PDPExpectationsContentSummary-type">
                  How to use
                </h5>
                <h2 className="PDPExpectationsContentSummary-title">
                  Apply to clean hands as often as desired, paying close
                  attention to cuticles.
                </h2>
              </div>
            </div>
            <div className="PDPExpectationsContent-sectionTwo">
              <ul className="PDPExpectationsContentList-details">
                <li className="PDPExpectationsContentList-detailsItem">
                  <span className="PDPExpectationsContentList-detailsHeadline">
                    Dosage
                  </span>
                  <span className="PDPExpectationsContentList-detailDescription">
                    Half teaspoon
                  </span>
                </li>

                <li className="PDPExpectationsContentList-detailsItem">
                  <span className="PDPExpectationsContentList-detailsHeadline">
                    Texture
                  </span>
                  <span className="PDPExpectationsContentList-detailDescription">
                    Medium-weight cream
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
