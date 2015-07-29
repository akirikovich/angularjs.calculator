(function() {
	var app = angular.module("simpleCalculator", []);

	app.directive("calculator", function() {
		return {
			restrict: "E",
			template: function(element, attributes) {
				var settings = angular.fromJson(attributes.settings),
					form = [];

				for(var i = 0, len = settings["items"].length; i < len; i++) {
					var elem = settings["items"][i];

					form.push('<div class="form-group">');
					switch(elem.field.type) {
						case "select":
							form.push('<select \
											class="form-control" \
											ng-change="calculator.reCalculate()" \
											ng-model="calculator.' + elem.field.model + '" \
								>');
							angular.forEach(elem.field.options, function(value, name) {
								form.push('<option value="' + value + '">' + name + '</option>')
							});
							form.push('</select>');
						break;
						case "checkbox":
							form.push('<div class="checkbox"> \
											<label> \
											<input \
												type="' + elem.field.type + '" \
												ng-change="calculator.reCalculate()" \
												ng-model="calculator.' + elem.field.model + '"/> \
											' + elem.label + ' \
											</label> \
										</div> \
							');
						break;
						default:
							if(elem.label) {
								form.push('<label>' + elem.label + '</label>');
							}
							form.push('<input \
											type="' + elem.field.type + '" \
											ng-change="calculator.reCalculate()" \
											ng-model="calculator.' + elem.field.model + '"');
							if(elem.field.type !== "range") {
								form.push('class="form-control"');
							}
							angular.forEach(elem.field.attrs, function(value, name) {
								form.push(name + '="' + value + '"');
							});
							form.push("/>");
						break;
					}
					form.push('</div>');

				}
				form.push('\
					<div class="form-group">\
						<div class="alert alert-success">\
							<b>Result:</b>\
							<span>{{calculator.result | currency}}</span>\
						</div>\
					</div>\
				');

				return form.join("");
			},
			controller: function($scope) {
				$scope.calculator = {
					count: 1,
					speed: 5,
					cms: 0,
					responsive: false,
					retina: false,
					microdata: false,
					reCalculate: function() {
						var calculator = this;

						calculator.result = calculator.count * 25;
						calculator.result = calculator.result * (1 + (calculator.speed - 5) / 20);
						switch(calculator.cms) {
							case "2":
								calculator.result *= 1.5;
							break;
							case "3":
								calculator.result *= 1.6;
							break;
							case "4":
								calculator.result *= 1.7;
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
				};
				
				$scope.calculator.reCalculate();

			},
			contollerAs: "calculator"
		}
	});

})();