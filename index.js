// 1. Create a node package (in Github as well) called PaperRockScissors.
// 2. This node package will export a Javascript class called PaperRockScissors that will not take any arguments in the constructor.
class PaperRockScissors {
	results = {
		win: 0,
		loss: 0,
		tie: 0,
		total: 0
	}

	resultsByChoice = {
		paper: {
			win: 0,
			loss: 0,
			tie: 0,
			total: 0
		},
		rock: {
			win: 0,
			loss: 0,
			tie: 0,
			total: 0
		},
		scissors: {
			win: 0,
			loss: 0,
			tie: 0,
			total: 0
		}
	}

	PaperRockScissors(difficulty) {
		
	}

	win(choice) {
		if ( choice ) {
			return ((this.resultsByChoice[choice]['win'] / this.resultsByChoice[choice]['total']) * 100) + '%';
		}
		return ((this.results['win'] / this.results['total']) * 100) + '%';
	}
	loss(choice) {
		if ( choice ) {
			return ((this.resultsByChoice[choice]['loss'] / this.resultsByChoice[choice]['total']) * 100) + '%';
		}
		return ((this.results['loss'] / this.results['total']) * 100) + '%'
	}
	tie(choice) {
		if ( choice ) {
			return ((this.resultsByChoice[choice]['tie'] / this.resultsByChoice[choice]['total']) * 100) + '%';
		}
		return ((this.results['tie'] / this.results['total']) * 100) + '%'
	}

	randomWinner() {
		// paper rock scissors has a 
		// randomly chosen winner from a random number between 1-3
		let choice = Math.floor( Math.random() * 3 + 1 );
		if ( choice == 1 ) { 
			return 'win'; 
		} else if ( choice == 2 ) {
			return 'loss';
		} else {
			return 'tie';
		}
	}

	paper() {
		let result = this.randomWinner();
		this.results[ result ] = this.results[ result ] + 1;
		this.results[ 'total' ] = this.results[ 'total' ] + 1;
		this.resultsByChoice['paper'][ result ]++;
		this.resultsByChoice['pape']['total']++;
		return result;
	}

	rock() {
		let result = this.randomWinner();
		this.results[ result ] = this.results[ result ] + 1;
		this.results[ 'total' ] = this.results[ 'total' ] + 1;
		this.resultsByChoice['rock'][ result ]++;
		this.resultsByChoice['rock']['total']++;
		return result;
	}

	scissors() {
		let result = this.randomWinner();
		this.results[ result ] = this.results[ result ] + 1;
		this.results[ 'total' ] = this.results[ 'total' ] + 1;
		this.resultsByChoice['scissors'][ result ]++;
		this.resultsByChoice['scissors']['total']++;
		return result;
	}

}

module.exports = PaperRockScissors;