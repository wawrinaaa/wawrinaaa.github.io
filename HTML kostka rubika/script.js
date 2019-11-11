//--------ekran startowy---------//
	var numer = 0;

	function dodawanie()
	{
		numer = numer + 1;
		akcja();
	}
	function akcja()
	{
		if(numer==1) $("#rubik").fadeIn(1000);
		else $("#start").fadeOut(750);
	}
	function zniknij()
	{
		$("#start").fadeOut(10);
	}

//----------jQuerry Scrolling---------//

	jQuery(function ($)
	{
		//zresetuj scrolla
		$.scrollTo(0);
		
		$('#link1').click(function() {$.scrollTo($('#Erno'), 500);} );
		$('#link2').click(function() {$.scrollTo($('#LBL'), 500);} );
		$('#link3').click(function() {$.scrollTo($('#Lidership'), 500);} );
		$('#link4').click(function() {$.scrollTo($('#Cross'), 500);} );
		$('#link5').click(function() {$.scrollTo($('#F2L'), 500);} );
		$('#link6').click(function() {$.scrollTo($('#OLL'), 500);} );
		$('#link7').click(function() {$.scrollTo($('#PLL'), 500);} );
		$('#go-up').click(function() {$.scrollTo($('body'), 750); } );
	}
	);

	$(window).scroll(function()
	{
		if($(this).scrollTop()>500) $("#go-up").fadeIn();
		else $("#go-up").fadeOut();
	}
	);
	
	

//---------pokazywanie algow f2la begginer---------------------//

	var copokazac = 0;

	function licz()
	{
		copokazac++;
		pokaz();
	}
	function pokaz()
	{
		if(copokazac%2==1)
		{
			document.getElementById("pole").innerHTML = "Algorytm do włożenia w lewo:<br /> U' (L' U L U) (F U' F'). <br /> Algorytm do włożenia w prawo:<br /> U (R U R' U') (F' U' F).<br />";
			document.getElementById("algi1").innerHTML = "Schowaj algortmy";
			document.getElementById("pole").style.backgroundColor = "rgba(0, 0, 0, 0.55)"
		}
		else
		{
			document.getElementById("pole").innerHTML = "";
			document.getElementById("pole").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
			document.getElementById("algi1").innerHTML = "Pokaż algortmy";
		}
	}
	
	
// Pokazywanie całej liczby kombinacji 3x3 //

	var point = 0;

	function liczby()
	{
		point++;
		
		if(point==1)
		{
			$("#liczba").fadeIn(350);
		}
		else //point==2
		{ 
			$("#liczba").fadeOut(420);
			point=0;
		}
	}