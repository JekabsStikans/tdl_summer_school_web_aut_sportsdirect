import BasePage from "../pageObjects/basePage";

class AdidasTrainersPage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/adidas";
  }

  static get filterButton(){
      return cy.get("#mobControlBar");
  }

  static get filtersList(){
      return cy.get("#filterlist");
  }

  static selectByTextFilterCheckbox(text){
    return cy.get('#filterlist').contains(text).parent();
  }

  static get filterApplyBtn(){
    return cy.get('#mobFilterControls').contains("Apply").parent();
  }

  static get productsList(){
      return cy.get("#navlist");
  }
}

export default AdidasTrainersPage;
