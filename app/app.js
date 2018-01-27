var HeaderCtrl = function($scope){
	$scope.appDetails = {};
		$scopeDetails.title: "Bookart";
		$scopeDetails.tagline:"we have 1 million books for you";
}
var bootlistCtrl = function($scope){
	$scope.books={
		imgUrl:"2.jpeg",
		name: "Adultery",
		price:"205";
		Rating:"4",
		binding:"Paperback",
		publisher:"Random House India",
		releasedDate:"12-02-1997",
		detail:"linda is the thirties begins to question the routine and pradictability of the her days."
	}
}
$scope.Addtokart = function(book){
	console.log("Add to Kart:",book);
}
