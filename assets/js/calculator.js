$(document).ready(function() {
	var tariffCost,
		additionsCost1,
		additionsCost2,
		additionsCost3,
		additionsCost4,
		additionsCost5,
		additionsCost6,
		additionsCost7,
		additionsCost8,
		additionsCost9,
		additionsCost10,
		totalPrice,
		totalPriceHolder;

	totalPrice = 0;
	// totalPriceHolder = ('#total-price');








	function CalculatePrice() {
		tariffCost = parseInt($('input[name=tariff]:checked', '#tariffDesc').val());
		if(isNaN(tariffCost)) {
			tariffCost = 0;
		};


		additionsCost1 = parseInt($('input[name=tariff-adds1]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost1)) {
			additionsCost1 = 0;
		};


		additionsCost2 = parseInt($('input[name=tariff-adds2]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost2)) {
			additionsCost2 = 0;
		};


		additionsCost3 = parseInt($('input[name=tariff-adds3]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost3)) {
			additionsCost3 = 0;
		};

		additionsCost4 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost4)) {
			additionsCost4 = 0;
		};

		additionsCost5 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost5)) {
			additionsCost5 = 0;
		};

		additionsCost6 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost6)) {
			additionsCost6 = 0;
		};

		additionsCost7 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost7)) {
			additionsCost7 = 0;
		};

		additionsCost8 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost8)) {
			additionsCost8 = 0;
		};

		additionsCost9 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost9)) {
			additionsCost9 = 0;
		};

		additionsCost10 = parseInt($('input[name=tariff-adds4]:checked', '#tariff-adds').val());
		if(isNaN(additionsCost10)) {
			additionsCost10 = 0;
		};




		totalPrice = tariffCost + additionsCost1 + additionsCost2 + additionsCost3 + additionsCost4 + additionsCost5 + additionsCost6 + additionsCost7 + additionsCost8 + additionsCost9 + additionsCost10;
		$('#total-price').text("\n" + totalPrice + " $");
		console.log('totalPrice ' + totalPrice);


	};
	// $('#tariffContainer input').on('click', function() {
	// 	CalculatePrice();
	// });
	CalculatePrice();






	$("input[name='tariff']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff']").data('last-checked', false);
			// $(this).data('last-value', 0);
			CalculatePrice();


		} else {
			$("input[name='tariff']").data('last-checked', false);
			$(this).data('last-checked', true);
			CalculatePrice();

		}

	});

	$("input[name='tariff-adds1']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds1']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds1']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();

		}
	});


	$("input[name='tariff-adds2']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds2']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds2']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();

		}
	});


		$("input[name='tariff-adds3']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds3']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds3']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});


		$("input[name='tariff-adds4']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds4']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds4']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});


	$("input[name='tariff-adds5']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds5']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds5']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});

	$("input[name='tariff-adds6']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds6']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds6']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});

	$("input[name='tariff-adds7']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds7']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds7']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});

	$("input[name='tariff-adds8']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds8']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds8']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});

	$("input[name='tariff-adds9']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds9']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds9']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});

	$("input[name='tariff-adds10']").on('click', function(event) {
		if($(this).data('last-checked')) {
			this.checked = false;
			$("input[name='tariff-adds10']").data('last-checked', false);
			CalculatePrice();

		} else {
			$("input[name='tariff-adds10']").data('last-checked', false);
			$(this).data('last-checked', true);
			// $(this).value = 0;
			CalculatePrice();
			
		}
	});




})

