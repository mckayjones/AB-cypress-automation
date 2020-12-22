     
//Check the www.churchofjesuschrist.org home page
 describe('Check home page', function () {
    specify('Navigate to main home page', function () {
        cy.visit('https://www.churchofjesuschrist.org/?lang=eng');
    });
     specify('Check for title', () => {
        cy.title().should(
            'be.equal',
            ('The Church of Jesus Christ of Latter-day Saints'))
    });
    //abn
    specify('Navigate to abn home page', function () {
        cy.visit('https://abn.churchofjesuschrist.org');
    });
    specify('Check for title', () => {
        cy.title().should(
            'be.equal',
            ('The Church of Jesus Christ of Latter-day Saints'))
    });
    //abn-test
    specify('Navigate to abn-test home page', function () {
        cy.visit('https://abn-test.pvu.cf.churchofjesuschrist.org');
    });
    specify('Check for title', () => {
        cy.title().should(
            'be.equal',
            ('The Church of Jesus Christ of Latter-day Saints'))
    }); 
});

 //Check for the login page
describe('Navigate to okta login page', function () {
    specify('Check the login page. Check invalid login.', function () {
        cy.visit('https://id.churchofjesuschrist.org/');
        cy.get('#okta-signin-submit').click();
    });
})
 
//Check the /study pages
describe('Navigate to GLO', function() {
    specify(' Check www GLO', function() {
        cy.visit('https://www.churchofjesuschrist.org/study?lang=eng');
        //cy.get('tileImg-vFoPT');
        //cy.get('#PFmainHeader').click();
        //cy.get('#mawIcon').click();
        //cy.get('#loginButtonDisplay').click();
    }) 
    /* specify('Check login from /study', function() {
        cy.get('#okta-signin-submit').click();
    }) */
//abn
     specify('Check abn GLO', function() {
        cy.visit('https://abn.churchofjesuschrist.org/study?lang=eng');
        cy.get('.tileImg-vFoPT');
    })
//abn-test
    specify('Check abn-test GLO', function() {
        cy.visit('https://abn-test.pvu.cf.churchofjesuschrist.org/study?lang=eng');
        cy.get('.tileImg-vFoPT');
    }) 
})

//Check the /media pages
describe('Navigate to Media', function() {
    specify(' Check www Media', function() {
        cy.visit('https://www.churchofjesuschrist.org/media?lang=eng');
        cy.get('.cizuhu-0').type('Faith');
        // cy.get('.accountLink').click();
        // cy.get('#loginButtonDisplay').click();
    }) 
    // specify('Check login from /Media', function() {
        // cy.get('#okta-signin-submit').click();
    // })
//abn
    specify('Check abn Media', function() {
        cy.visit('https://abn.churchofjesuschrist.org/media?lang=eng');
        cy.get('.cizuhu-0').type('Faith');
        cy.get('.kl6okf-4').click();
    })
//abn-test
    specify('Check abn-test Media', function() {
        cy.visit('https://abn-test.pvu.cf.churchofjesuschrist.org/media?lang=eng');
        cy.get('.cizuhu-0').type('Faith');
        cy.get('.kl6okf-4').click();
    })
})

//Check the ComeUntoChrist.org pages
describe('Navigate to ComeUntoChrist.org', function() {
    specify(' Check www.ComeUntoChrist.org', function() {
        cy.visit('https://www.comeuntochrist.org/');
        cy.title().should('be.equal', 'Light the World | Christmas 2020')//'All are invited to come unto Christ | ComeUntoChrist.org')
    })
    specify(' Check /beliefs page', function() {
        cy.visit('https://www.comeuntochrist.org/beliefs');
        cy.title().should('be.equal', 'Believe | ComeUntoChrist.org')
    })
    specify(' Check /belong page', function() {
        cy.visit('https://www.comeuntochrist.org/belong');
        cy.title().should('be.equal', 'Belong | ComeUntoChrist.org')
    })
    specify(' Check /become page', function() {
        cy.visit('https://www.comeuntochrist.org/become');
        cy.title().should('be.equal', 'Become | ComeUntoChrist.org')
    })
})
 
 //Check the josephsmithpapers.org page
describe('Navigate to https://www.josephsmithpapers.org/', function() {
    specify(' Check the home page title', function() {
        cy.visit('https://www.josephsmithpapers.org/');
        cy.title().should('be.equal', 'The Joseph Smith Papers: A comprehensive digital collection of the papers of Joseph Smith')
    })
})

 //Check the store page
 describe('Navigate to https://store.churchofjesuschrist.org/usa/en', function() {
    specify(' Check the home page title', function() {
        cy.visit('https://store.churchofjesuschrist.org/usa/en');
        cy.title().should('be.equal', 'Welcome to United States Store')
    })
}) 


 //Check the /life-help pages
describe('Navigate to Media', function() {
    specify(' Check www Life Help LP', function() {
        cy.visit('https://www.churchofjesuschrist.org/topics/families-and-individuals/lifes-challenges/hope-and-help?lang=eng');
        cy.title().should('be.equal', 'Life Help')

    }) 
})  