app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/lyman_headshot.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/marss_freyja.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/marssy_niners.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/ava.jpg',
    title: 'Wedding',
    developer: 'Joe Mamma',
    price: 19.99
  };

  $scope.apps = [
    {
    icon: 'img/lyman_headshot.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },

  {
    icon: 'img/marss_freyja.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },

  {
    icon: 'img/marssy_niners.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  },

  {
    icon: 'img/ava.jpg',
    title: 'Wedding',
    developer: 'Joe Mamma',
    price: 19.99
  }
  ]
}]);
