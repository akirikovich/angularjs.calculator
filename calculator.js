(function() {
	var app = angular.module("simpleCalculator", []);

	app.controller("calculatorController", ["$scope", function() {
		var calculator = this;

		calculator.count = null;
		calculator.speed = 5;
		calculator.cms = 0;
		calculator.responsive = false;
		calculator.retina = false;
		calculator.microdata = false;

		calculator.calc = function() {
			calculator.result = calculator.count * 25;
			calculator.result = calculator.result * (1 + (calculator.speed - 5) / 20);
			switch(calculator.cms) {
				case "2":
					calculator.result += calculator.result * 1.1;
				break;
				case "3":
					calculator.result += calculator.result * 1.15;
				break;
				case "4":
					calculator.result += calculator.result * 1.2;
				break;
			}

			if(calculator.responsive) {
				calculator.result = calculator.result * 1.2;
			}
			if(calculator.retina) {
				calculator.result += 50;
			}
			if(calculator.microdata) {
				calculator.result += calculator.count * 3;
			}
		}

	}]);
})();