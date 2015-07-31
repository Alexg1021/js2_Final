app.controller('MainController',['$scope', function($scope){


  //Array of arbitrary contacts
    $scope.contacts = 
	[ 
  { 
    name: 'Bruce Wayne', 
    phone: '(555) 555-555', 
    email: 'batman@dcuniverse.org', 
    picture: 'img/batman.jpg',
    editing: false
  }, 
  { 
    name: 'Logan', 
    phone: '(555) 555-555', 
    email: "wolverine@xmen.org", 
    picture: 'img/wolverine.jpeg',
    editing: false
  } , 
  { 
    name: 'Tony Stark', 
    phone: '(555) 555-555', 
    email: "ironman@starkindustries.org", 
    picture: 'img/ironman.jpg',
    editing: false
  }
  , 
  { 
    name: 'Peter Parker', 
    phone: '(555) 555-555', 
    email: 'spidey@marvel.com', 
    picture: 'img/spiderman.jpg',
    editing: false
  }
];

//Add a contact
$scope.addContact = function(n,p,e,pc){
    $scope.contacts.push({ 
    name: n, 
    phone: p, 
    email: e, 
    picture: pc
    
  })
  };

//Delete Contact
  $scope.deleteContact = function(index){
    $scope.contacts.splice([index],1);
  };

  //Edit the contact
  $scope.updateContact = function(index,n,p,e,pc){
    console.log(n) ;
    $scope.contacts[index].name = n  || $scope.contacts[index].name;
    $scope.contacts[index].phone = p  || $scope.contacts[index].phone;
    $scope.contacts[index].email = e || $scope.contacts[index].email;
    $scope.contacts[index].picture = pc || $scope.contacts[index].picture;
  };

	}]);