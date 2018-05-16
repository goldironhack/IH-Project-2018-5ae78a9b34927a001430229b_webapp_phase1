const DATASETNNG = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const DATASETCNY= "https://data.cityofnewyork.us/api/views/bydc-d8tj/rows.json?accessType=DOWNLOAD" ;
const DATASETHNYUB= "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD" ;


var nng = [];
var cny = [];
var hnyub = [];
function getData(URL, arreglo = []){
	var data =$.get(URL,function(){
		console.log(URL);
	})
		.done(function(){
			console.log(data);
			for(var i = 0; i<data.responseJSON.data.length; i++){
				arreglo.push(data.responseJSON.data[i]);
			}
		})
		.fail(function(error){
			console.error(error);
		})
}

function getnng(){
	getData(DATASETNNG, nng);
}

function gethnyub(){
	getData(DATASETHNYUB, hnyub);
}

function getcny(){
	getData(DATASETCNY, cny);
}

function getall(){
	getnng();
	getcny();
	gethnyub();
}
function updatenng(){
	tableReference = $("#tablanng")[0];
	var newrow, punto, condado;
	console.log(nng.length);
	for(var i = 0; i <nng.length; i++){
		newrow =tableReference.insertRow(tableReference.rows.length);
		punto = newrow.insertCell(0);
		condado= newrow.insertCell(1);
		punto.innerHTML =nng[i][9];
		condado.innerHTML = nng[i][16];
	}	
}

function updatecny(){
	tableReference = $("#tablacny")[0];
	var newrow, bname, dcrime, ll, date;
	console.log(cny.length);
	for(var i = 0; i <cny.length; i++){
		newrow =tableReference.insertRow(tableReference.rows.length);
		bname = newrow.insertCell(0);
		dcrime= newrow.insertCell(1);
		ll = newrow.insertCell(2);
		date= newrow.insertCell(3);
		bname.innerHTML =cny[i][21];
		dcrime.innerHTML = cny[i][15];
		ll.innerHTML = cny[i][31];
		date.innerHTML = cny[i][9];
	}	
}

function updatehnyub(){
	tableReference = $("#tablahnyub")[0];
	var newrow, bname, lat, long, nba;
	console.log(hnyub.length);
	for(var i = 0; i <hnyub.length; i++){
		newrow =tableReference.insertRow(tableReference.rows.length);
		bname = newrow.insertCell(0);
		lat= newrow.insertCell(1);
		long = newrow.insertCell(2);
		nba= newrow.insertCell(3);
		bname.innerHTML =hnyub[i][15];
		lat.innerHTML = hnyub[i][23];
		long.innerHTML = hnyub[i][24];
		nba.innerHTML = hnyub[i][31];
	}	
}

function updateall(){
	updatenng();
	updatecny();
	updatehnyub();
}

$(document).ready(function(){
	$("#gdnng").on("click",getall);
	$("#uptable").on("click",updateall);
	
})
// JavaScript Document