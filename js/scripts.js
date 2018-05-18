var $p =  $('p'); 


//al hacer click en button el texto cambia de color
//$('button').on('click', function(){
//	$p.css('color','green');
//});


//cambia el color cuando el mouse entra y sale del button click
//$('button').on('mouseenter', function(){
//	$p.css("color","red");
//}).on('mouseleave', function(){
//	$p.css('color','initial')
//})

//Agreaga una clase de estilos con addClas
//$('button').on('click',function(){
//	$p.addClass('alerta');
//});

//agreaga y quita la clase de estilos con toggleClass
//$('button').on('click',function(){
//	$p.toggleClass('alerta');
//});

//remueve la clase aplicada a una etiqueta con removeClass
//$('button').on('click', function(){
//	$p.removeClass('alerta');
//});

//oculta el contemido de una etiqueta con hide
//muesta lo oculto con show
//$('button').on('click', function(){
//	$p.hide('alerta');
//}).on('click', function(){
//	$p.show('alerta');
//});

//mostrar o ocultar segun el caso
//$('button').on('click', function(){
//	$p.toggle('alerta');
//});

//agregar un atributo con attr
$('button').on('click', function(){
	$p.attr('id','agregado').toggle('agreagado');
});