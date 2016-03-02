app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'My Pics';
  $scope.promo = "Promo code: A4";
  $scope.pics = [{
    name: 'Freyja, the pup',
    price: 19,
    pubdate: new Date ('2016', '02', '25'),
    cover: 'img/Freyja.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Coder in disguise',
    price: 8,
    pubdate: new Date ('2013', '08', '01'),
    cover: 'img/headshot.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Addison/s Life',
    price: 10,
    pubdate: new Date ('2015', '03', '07'),
    cover: 'img/addison.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Peanuts Me',
    price: 20,
    pubdate: new Date ('2015', '08', '25'),
    cover: 'img/peanuts_profile.jpg',
    likes: 0,
    dislikes: 0
  }
  ]
  $scope.plusOne = function(index) {
    $scope.pics[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.pics[index].dislikes += 1;
  };
}]);
