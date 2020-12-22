     
/* //Example alt tag test with Cypress
describe('Check home page', function () {
    specify('Navigate to media example page', function () {
        cy.visit('https://www.churchofjesuschrist.org/media/collection/living-the-gospel-images?lang=eng');
    });

    specify('Check image size', () => {
        cy.wait(5000); //Waiting for images to load.
        cy.get('img').each($el => {
            cy.wrap($el).should('have.attr', 'alt');
         })
    });
})
 */

 //Check the /study pages
describe('Navigate to GLO', function() {
    specify(' Check www GLO', function() {
        cy.visit('https://www.churchofjesuschrist.org/study?lang=eng');
        //cy.get('tileImg-vFoPT');
        //cy.get('#PFmainHeader').click();
        //cy.get('#mawIcon').click();
        //cy.get('#loginButtonDisplay').click();
        cy.get("li.topItem.accountLink").click();
        cy.get("#loginButtonDisplay").click();
    }) 
    specify('Check login from /study', function() {
        cy.get('#okta-signin-submit').click();
    })
})