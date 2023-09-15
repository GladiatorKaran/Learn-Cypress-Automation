///  <reference types="Cypress" />

describe("Test Contstc us from via wedriverUni", () => {
    it("Submit the Contact us form",() => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr","target").click();
        cy.wait (3000);
        cy.get("h2").should("have.text", "CONTACT US");
        cy.get('[name="first_name"]').type("Muruga");
        cy.get('[name="last_name"]').type("Shiva");
        cy.get('[name="email"]').type("nv001@yopmail.com");
        cy.get('textarea.feedback-input').type("1st class of automation");
        cy.get('[type="submit"]').click();
        cy.get('h1').should("have.text","Thank You for your Message!")
    });
    it("Submit the Contact us form by mandatory fields without",() => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr","target").click();
        cy.wait (3000);
        cy.get("h2").should("have.text", "CONTACT US");
        cy.get('[name="first_name"]').type("Muruga");
        cy.get('[name="last_name"]').type("Shiva");
        //cy.get('[name="email"]').type("nv001@yopmail.com");
        cy.get('textarea.feedback-input').type("1st class of automation");
        cy.get('[type="submit"]').click();
        //cy.get('body').should("have.text","Error: Invalid email address")
    });
});

