var jsdom = require('mocha-jsdom');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var firstGame = require('../Identify shapes/game');

describe('First game: Identify different shapes', () => {
	jsdom({
		url: 'http://localhost'
	});

	it('endScreen function', () => {
		it('End first screen', () => {
			var $;
			jsdom();
			firstGame.targets[0].isSleeping = true;
			firstGame.targets[1].isSleeping = true;
			firstGame.endScreen();
			expect(firstGame.screen1.style.animation).to.equal('fadeScreen 3s ease-in');
			expect(firstGame.progressBalls[0].style.float).to.equal('right');
			expect(firstGame.screen1.style.display).to.equal('none');
			expect(firstGame.screen2.style.display).to.equal('block');
			expect(firstGamescreen2.style.animation).to.equal('appear 2s ease-in`');
		});
		it('End second screen', () => {
			var $;
			jsdom();
			firstGame.targets[2].isSleeping = true;
			firstGame.endScreen();
			expect(firstGame.screen2.style.animation).to.equal('fadeScreen 3s ease-in');
			expect(firstGame.progressBalls[1].style.float).to.equal('right');
			expect(firstGame.screen2.style.display).to.equal('none');
			expect(firstGame.screen3.style.display).to.equal('block');
			expect(firstGamescreen3.style.animation).to.equal('appear 2s ease-in`');
		});
		it('End third screen', () => {
			var $;
			jsdom();
			firstGame.targets[3].isSleeping = true;
			firstGame.targets[4].isSleeping = true;
			firstGame.endScreen();
			expect(firstGame.progressBalls[2].style.float).to.equal('right');
			expect(firstGame.window.location.href).to.equal('../win screen/winScreen.html');
		});
	});
});
