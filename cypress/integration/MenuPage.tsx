///<reference types="cypress" />

describe("renders the menu page", () => {
    it("renders correctly", () => {
        cy.visit("/table/5");
        cy.get("container").should("exist")
    })
})