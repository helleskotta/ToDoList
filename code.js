
var app = angular.module("demoapp",[]);

app.controller("choreController", function($scope){
  $scope.chores = [];

  // Lägg till 
  $scope.addChore = function(){
    $scope.chores.push({ 
      desc: $scope.newChoreDesc 
    });
    $scope.newChoreDesc = '';
  };

  // Sortera lista
  $scope.sorted = [
    // {name:"", reverse:false, sort:null},
    {name:"Decending", reverse:true},
    {name:"Accending", reverse:false}
  ];
  $scope.order = $scope.sorted[0];

})

// NG-if