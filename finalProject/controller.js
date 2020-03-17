
var app = angular.module("myShoppingList", ['googlechart','kendo.directives']); 
app.controller("myCtrl", function($scope,$http) {
	
	$scope.dashBoard = true;
    $scope.names =[];
	$scope.HIGH24HOUR =[];
	$scope.LOW24HOUR =[];
   $http.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
  .then(function(response) {
      $scope.coins = response.data.Data;
	  angular.forEach($scope.coins, function (value, key) { 
                $scope.names.push(value.CoinInfo.FullName); 
				$scope.HIGH24HOUR.push(value.DISPLAY.USD.HIGH24HOUR.replace("$", "").replace(",", "").trim()); 
				$scope.LOW24HOUR.push(value.DISPLAY.USD.LOW24HOUR.replace("$", "").replace(",", "").trim()); 
            });
  });
  
  
    var chart1 = {};
	var tempc = $scope.countryName
	var tempN = 450;
	    var temp = [tempc, tempN];
		chart1.type = "GeoChart";
    

chart1.data = [
  ['Country', 'heelo'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
];

chart1.data.push(temp);

chart1.options = {
  width: 600,
  height: 400,
  chartArea: {left:10,top:10,bottom:0,height:"100%"},
  colorAxis: {colors: ['blue', 'red']},
  displayMode: 'regions'
};

chart1.formatters = {
  number : [{
    columnNum: 1,
    pattern: " #,##0.00"
  }]
};

$scope.chart = chart1;

$scope.OpenWindow= function()  // custom function on click
{
  

    //   $scope.win2.content("{ content: 'C:/Users/shaik/Desktop/final project/try.html'}");
        $scope.win2.center();  // open dailog in center of screen
        $scope.win2.open();
};

$scope.crawlerTab= function()  // custom function on click
{
	document.getElementById("dashboardTab").classList.remove('active');
   document.getElementById("crawlerTab").classList.add('active');
$scope.crawler = true;
$scope.dashBoard = false;
    
};

$scope.dashboardTab= function()  // custom function on click
{
	document.getElementById("crawlerTab").classList.remove('active');
   document.getElementById("dashboardTab").classList.add('active');
$scope.crawler = false;
$scope.dashBoard = true;
    
};
 
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [{
label: "entered data",
data: [65, 59, 80, 81, 56, 55, 40],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "crawler progress",
data: [28, 48, 40, 19, 86, 27, 90],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});

});
