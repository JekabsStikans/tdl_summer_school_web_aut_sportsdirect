import BasePage from "../pageObjects/basePage";

class BrandsPage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/brands";
  }

  static get adidasButton(){
    return cy.get('.Adidas');
  }
}

export default BrandsPage;
