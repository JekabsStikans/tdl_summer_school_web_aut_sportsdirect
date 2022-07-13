import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/";
  }

  static selectByTextTopMenu(text){
    return cy.get('#ulTopLevelMenu').contains(text).parent();
  }
}

export default HomePage;
