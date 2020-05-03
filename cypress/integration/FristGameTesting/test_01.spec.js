import { each } from 'bluebird';

describe('Dragtest', () => {
	it('should dragndrop', () => {
		cy.visit('https://manhcm00.github.io/DragonLearn-Triangle/Identify%20shapes/identifyShapesGame.html');
		cy.get('.shapes[type="triangle"]').each(($el, index) => {
			cy.wrap($el).drag('#target-2', { force: true });
			if (index === 3) {
				return false;
			}
		});
		cy.get('.shapes[type="cirle"]').each(($el, index) => {
			cy.wrap($el).drag('#target-1', { force: true });
			if (index === 3) {
				return false;
			}
		});
		cy.wait(3000);
		cy.get('.shapes[type="triangle"]').each(($el, index) => {
			if (index > 3 && index < 8) {
				cy.wrap($el).drag('#target-4', { force: true });
				if (index === 7) {
					return false;
				}
			}
		});
		cy.wait(3000);
		cy.get('.shapes[type="triangle"]').each(($el, index) => {
			if (index > 7 && index < 12) {
				cy.wrap($el).drag('#target-6', { force: true });
				if (index === 11) {
					return false;
				}
			}
		});
		cy.get('.shapes[type="square"]').each(($el, index) => {
			cy.wrap($el).drag('#target-5', { force: true });
			if (index === 3) {
				return false;
			}
		});
	});
});
