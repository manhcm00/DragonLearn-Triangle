/// <reference types="Cypress" /> 

describe('Third Game E2E Testing', () => {
    it('start button', () => {
        cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/Color%20the%20shapes/colorShapes.html');
        cy.get("#start-play").click();
    }),

    it('back button', () => {
        cy.contains("Trở lại").click();
    })

    it('Start ThirdGame', () => {
        cy.contains("Colour in the shapes").click();
    })

    it('add event listener for shapes', () => {
        cy.get(".shape").each(($el, index, list) => {
            cy.wrap($el).click({force: true});
        })
    }),

    it('add event listener for hidden box', () => {
        cy.get(".hidden-box").each(($el, index, list) => {
            cy.wrap($el).click({force: true});
        })
    }),

    it('screen', () => {
        cy.get('.button-next').click();
        cy.contains('Tiếp').click({ force: true });
        cy.contains('Xong!').click({ force: true });
    })

    
})
