/// <reference types="Cypress" />

describe('Outline', function() {
	it('Outline', function() {
		cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/ouline/index.html');
		cy.get('a').contains('Identifying different shapes').click();
		cy.get('a').contains(' Trở lại').click();
		cy.get('a').contains('Match shape names to the actual shapes: squares, circles, and triangles').click();
		cy.get('a').contains(' Trở lại').click();
		cy.get('a').contains('Colour in the shapes').click();
		cy.get('div.traingle').click();
		cy.get('a').contains(' Trở lại').click();
	});
});

describe('Lose screen and Win screen', function() {
	it('Lose screen', function() {
		cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/lose%20screen/loseScreen.html');
		cy.get('a').contains('Đi đến bài học').click();
	});
	it('Win screen', function() {
		cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/win%20screen/winScreen.html');
		cy.get('a').contains('Đi đến bài học').click();
	});
});
