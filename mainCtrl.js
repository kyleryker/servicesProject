angular.module('mainModule').controller('mainCtrl', function($scope, mainService){
$scope.quotes = mainService.getQuotes();
$scope.addData = function(){
  var newQuote = {
    text: $scope.itemAddText,
    author: $scope.itemAddAuthor
  };
  if (mainService.addData(newQuote)){
    $scope.itemAddText = '';
    $scope.itemAddAuthor = '';
  }
};
$scope.deleter = function (textToDelete){
  mainService.removeData(textToDelete);
};
});
