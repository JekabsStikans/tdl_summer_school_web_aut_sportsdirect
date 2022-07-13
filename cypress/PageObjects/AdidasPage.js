import BasePage from "../pageObjects/basePage";

class AdidasPage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/adidas";
  }

  static selectByTextSliderBtn(text){
    return cy.get('.swiper-wrapper').contains(text).parent();
  }
}

export default AdidasPage;
