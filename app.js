// JavaScript Document

//SculpterArrays
var furns = ['images/furn1_600x400.jpg',	//1
			'images/furn2_600x400.jpg',	//2
			'images/furn3_600x400.jpg'];	//3

var bats = ['images/bats1_600x400.jpg',	//1
			'images/bats2_600x400.jpg',	//2
			'images/bats3_600x400.jpg',	//3
			'images/bats4_600x400.jpg',	//4
			'images/bats5_600x400.jpg',	//5
			'images/bats6_600x400.jpg',	//6
			'images/bats7_600x400.jpg'];	//7

var altars = ['images/ 600x400/altars1_600x400.jpg',	//1
			 'images/altars2_600x400.jpg',	//2
			 'images/altars3_600x400.jpg',	//3
			 'images/altars4_600x400.jpg',];	//4

var hedges = ['../Content/Readied/hedges 600x400/hedge1_600x400.jpg'];	//1

//DrawingArray
var draw = ['images/draw1_600x400.jpg',		//1
			'images/draw2_600x400.jpg',		//2
			'images/draw3_600x400.jpg',		//3
			'images/draw4_600x400.jpg',		//4
			'images/draw5_600x400.jpg',		//5
			'images/draw6_600x400.jpg',		//6
			'images/draw7_600x400.jpg',		//7
			'images/draw8_600x400.jpg',		//8
			'images/draw9_600x400.jpg',		//9
			'images/draw010_600x400.jpg'];		//10

//InstallationArray
var installation = ['images/install1Web_600x400.jpg',	//1
					'images/install2Web_600x400.jpg',	//2
					'images/install3Web_600x400.jpg',	//3
					'images/install4Web_600x400.jpg',	//4
					'images/install5Web_600x400.jpg',	//5
					'images/install6Web_600x400.jpg',	//6
					'images/install7Web_600x400.jpg',	//7
					'images/install8Web_600x400.jpg',	//8
					'images/install1Per_600x400.jpg',	//9
					'images/install1FY_600x400.jpg'];	//10

//PaintingArray
var paint = ['images/paint1_600x400.jpg', 	//1
				'images/paint2_600x400.jpg', 	//2
				'images//paint3_600x400.jpg', 	//3
				'images/paint4_600x400.jpg', 	//4
				'images/paint5_600x400.jpg',	//5
				'images/paint6_600x400.jpg',	//6
				'images/paint7_600x400.jpg',];//7

//PortraitArray
var portraits = ['images/port1CT_600x400.jpg', //1
				'.images/port2CT_600x400.jpg', 	//2
				'images/port1EM_600x400.jpg', 	//3
				'images/port2EM_600x400.jpg', 	//4
				'images/port3EM_600x400.jpg',	//5
				'images/port4EM_600x400.jpg',	//6
				'images/port5EM_600x400.jpg',	//7
				'images/port6EM_600x400.jpg'];	//8

$(document).ready(function() {

	//MenuToggle
    $('.sculpt-menu').click(function(event)	{
		event.preventDefault();
        if ($(event.target).is('.sub-menu li a')) return; 
		$('.sub-menu').slideToggle('slow');
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
	});//end MenuToggle
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//EventHandlers////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Sculptures///////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Furniture Link
	
	$('.sub-menu .furn').click(function()	{
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
			});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/'
		+ furns.length + ' ' 
		+ '<a href="#" class="next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', furns[0]);
		
		//Inner Nav Furniture
		
		$('.next').click(function(){
			if (indexNum < furns.length){
				indexNum++;
			}
			if (indexNum == furns.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', furns[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = furns.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', furns[indexNum]);
		});
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Bats Link
	
	$('.sub-menu .bats').click(function()	{
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
			});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ bats.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', bats[indexNum]);
		
		//Inner Nav Bats
		
		$('.next').click(function(){
			if (indexNum < bats.length){
				indexNum++;
			}
			if (indexNum == bats.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', bats[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = bats.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', bats[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Altars Link
	
	$('.sub-menu .altars').click(function()	{
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
			});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ altars.length + ' ' 
		+ '<a href="#" class="next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', altars[indexNum]);
		
		//Inner Nav Altars
		
		$('.next').click(function(){
			if (indexNum < altars.length){
				indexNum++;
			}
			if (indexNum == altars.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', altars[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = altars.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', altars[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Hedges Link
	
	$('.sub-menu .hedges').click(function()	{
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
			});
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
			});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ hedges.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', hedges[indexNum]);
		
		//Inner Nav Hedges
		
		$('.next').click(function(){
			if (indexNum < hedges.length){
				indexNum++;
			}
			if (indexNum == hedges.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', hedges[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = hedges.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', hedges[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Drawings/////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.draw').click(function(){
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color': '#FFF'
		});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ draw.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', draw[indexNum]);
		
		//Inner Nav Drawings
		
		$('.next').click(function(){
			if (indexNum < draw.length){
				indexNum++;
			}
			if (indexNum == draw.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', draw[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = draw.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', draw[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//Installations////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.installation').click(function(){
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF', 
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
		});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ installation.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', installation[indexNum]);
		
		//Inner Nav Installations
		
		$('.next').click(function(){
			if (indexNum < installation.length){
				indexNum++;
			}
			if (indexNum == installation.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', installation[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = installation.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', installation[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Paintings////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.paintings').click(function(){
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
		});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ paint.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', paint[indexNum]);
		
		//Inner Nav paint
		
		$('.next').click(function(){
			if (indexNum < paint.length){
				indexNum++;
			}
			if (indexNum == paint.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', paint[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = paint.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', paint[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Portraits////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.portraits').click(function(){
		
		var indexNum = 0 ;
		var indexRef = indexNum + 1;
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF', 
			'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666', 
			'color' : '#FFF'
		});
		
		//Gallery Nav Builder
		
		$('.gallNav').html('<h4><a href="#" class="prev"><</a>' + ' ' 
		+ '<span class = "index"></span>/' 
		+ portraits.length + ' ' 
		+ '<a href="#" class = "next">></a></h4>');
		
		$('.index').html(indexRef);
		$('.imgHolder').attr('src', portraits[indexNum]);
		
		//Inner Nav Draawings
		
		$('.next').click(function(){
			if (indexNum < portraits.length){
				indexNum++;
			}
			if (indexNum == portraits.length){
				indexNum = 0;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', portraits[indexNum]);
		});	
		$('.prev').click(function(){
			if (indexNum == 0){
				indexNum = portraits.length;
			}
			if (indexNum > 0){
				indexNum--;
			}
			indexRef = indexNum + 1;
			$('.index').html(indexRef);
			$('.imgHolder').attr('src', portraits[indexNum]);
		});	
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Bio//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.bio').click(function(){
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			 'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
		});
		
	});
	
	//CV
	
	$('.cv').click(function(){
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			 'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
		});
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Contact//////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.contact').click(function(){
		
		//RollOver
		
		$('.sub-menu a').css({
			'background-color' : '#FFF',
			'color' : '#999'
		});
		
		$('.nav a').css({
			'background-color' : '#FFF',
			 'color' : '#999'
		});
		
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'
		});
	});
	
	
	$('.nav a').hover(function(){
		$(this).css({
			'background-color' : '#666',
			'color' : '#FFF'})
		}, function(){
			$(this).css({
				'background-color' : '#FFF',
			 	'color' : '#999',
				'text-decoration' : 'none'});
		});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Page Orig State//////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$('.logo').click(function()	{
		location.reload();
	});
	
});

