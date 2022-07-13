import AdidasPage from "../PageObjects/AdidasPage";
import AdidasTrainersPage from "../PageObjects/AdidasTrainersPage";
import BrandsPage from "../PageObjects/BrandPage";
import HomePage from "../PageObjects/HomePage";



describe("Juice-shop without auto login", () => {
    //     - Open Sportsdirect page
    beforeEach(() => {
      HomePage.visit();
    });

    it("Filter brands", () => {
    //     - Click on Brands menu option
    HomePage.selectByTextTopMenu("Brands").click();
    //     - Click on Addidas logo
    BrandsPage.adidasButton.click();
    //     - Select Trainers option (in middle of page)
    AdidasPage.selectByTextSliderBtn("Trainers").click();

    //     - Check the following checkboxes:
    //       - Mens
    //       - Trainers
    //       - Court Trainers
    //       - Leather
    //       - Black
    const filtersList = ["Mens", "Trainers", "Court Trainers", "Leather", "Black"];
    AdidasTrainersPage.filterButton.click();
    AdidasTrainersPage.filtersList.find(".productFilter").click({multiple: true});
    filtersList.forEach(filterName => {
        AdidasTrainersPage.selectByTextFilterCheckbox(filterName).click();
    });
    AdidasTrainersPage.filterApplyBtn.click();
    //   -  Validate that 2 product boxes are visible
    AdidasTrainersPage.productsList.find(".s-productthumbbox").should("have.length", 2);
    //   - Open box that contains "SE Trainers"
    AdidasTrainersPage.productsList.contains("SE Trainers").click();
    //   - Validate product title "Grand Court SE Trainers Mens"
    cy.get("#lblProductName").contains("Grand Court SE Trainers Mens").should("exist");
    });
});