/// <reference types="Cypress" /> 

describe('Third Game E2E Testing', () => {
    it('start button', () => {
        cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/Color%20the%20shapes/colorShapes.html');
        cy.get("#start-play").click();
    }),

    it('screen', () => {
        cy.get('.button-next').click();
        cy.contains('Tiếp').click({ force: true });
        cy.contains('Xong!').click({ force: true });
    })

    it("screen1 finish", () => {
    
        cy.wait(25000);

        cy.get('.hidden-box[type="circle"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click({force: true});
            }
        });

        cy.get('.shape[type="circle"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click({force: true});
            }      
        });

        cy.get('.hidden-box[type="square"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click({force: true});
            }
        });
        
        cy.get('.shape[type="square"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click({force: true});
            }      
        });
    })
    
    it("screen2 finish", () => {
        cy.get(".Done").click();
        cy.get(".congrat-button").click({force: true}).wait(1000);

        cy.get("#start-play").click();

        cy.get('.hidden-box[type="circle"]').each( ($el, index) => {
            if(index == 1 ){
                cy.wrap($el).click({force: true});
            }
        });

        cy.get('.shape[type="circle"]').each( ($el, index) => {
            if(index == 1 ){
                cy.wrap($el).click({force: true});
            }      
        });

        cy.get('.hidden-box[type="traingle"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click({force: true});
            }
        });
        
        cy.get('.shape[type="traingle"]').each( ($el, index) => {
            if(index == 0 ){
                cy.wrap($el).click();
            }      
        });

    })

    it("screen3 finish", () => {
        cy.get(".Done").click();
        cy.get("#start-play").click();

        cy.get('.hidden-box[type="square"]').each( ($el, index) => {
            if(index == 1 ){
                cy.wrap($el).click();
            }
        });

        cy.get('.shape[type="square"]').each( ($el, index) => {
            if(index == 1 || index == 2){
                cy.wrap($el).click();
            }      
        });

        cy.get('.hidden-box[type="traingle"]').each( ($el, index) => {
            if(index == 1 ){
                cy.wrap($el).click();
            }
        });
        
        cy.get('.shape[type="traingle"]').each( ($el, index) => {
            if(index == 1 || index == 2 ){
                cy.wrap($el).click();
            }      
        });

    })

    it("screen4 finish", () => {
        cy.get(".Done").click();
        cy.get("#start-play").click();

        cy.get('.hidden-box[type="circle"]').each( ($el, index) => {
            if(index == 2 ){
                cy.wrap($el).click();
            }
        });

        cy.get('.shape[type="circle"]').each( ($el, index) => {
            if(index == 2 || index == 3 || index == 4){
                cy.wrap($el).click();
            }      
        });

        cy.get('.hidden-box[type="traingle"]').each( ($el, index) => {
            if(index == 2 ){
                cy.wrap($el).click();
            }
        });
        
        cy.get('.shape[type="traingle"]').each( ($el, index) => {
            if(index == 3 || index == 4 ){
                cy.wrap($el).click();
            }      
        });

    })
})