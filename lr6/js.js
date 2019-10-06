class Game {
  constructor() {
	  this.count = 0,
	  this.DOMcount = document.getElementById('points--count'),
	  this.DOMround = null
	}

  getRandom() {
	return Math.ceil(Math.random() * 10) % 9;
  }

  generateRound() {
    let prevRound, random;

    prevRound = this.removeRound();

    do {
  	  random = this.getRandom();
    } while (prevRound == random);

    this.DOMround = document.getElementById(`field__cell--${random}`);
    this.DOMround.classList.add('active');
  }

  removeRound() {
  	if (document.querySelector('.active')) {
  	 let prevRound = document.querySelector('.active').id.substring(13);
     document.querySelector('.active').classList.remove('active');
     return prevRound;
    }
  }

  init() {
	document.addEventListener('click', (e) => {
	  if (e.target === document.querySelector('.active')) {
		this.count++;
		document.querySelector('.active').classList.remove('active');
	  } else this.count--;
	  this.DOMcount.innerHTML = this.count;
	})

	setInterval(() => this.generateRound(), 1500);
  }
}

const game = new Game();
game.init();