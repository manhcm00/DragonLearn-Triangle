describe('Second game', () => {
	describe('it should click to the the right answer', () => {
		it('it should finish the game', () => {
			cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/Match%20shape%20names/machShapeNames.html');
            cy.get('#triangleButton1').click();
            cy.wait(3000)
            cy.get('#circleButton2').click();
            cy.wait(3000)
            cy.get('#triangleButton3').click();
            cy.wait(3000)
            cy.get('#triangleButton1').click();
            cy.wait(3000)
            cy.get('#circleButton2').click();
            cy.wait(3000)
            cy.get('#circleButton2').click();
            cy.wait(3000)
            cy.get('#triangleButton3.result').click();
            cy.wait(3000)
        });
        

	});
});
