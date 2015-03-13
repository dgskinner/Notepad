app.controller("notepadController", function($scope) {
	$scope.noteText = "";
	$scope.charLeft = function () {
		return (250 - $scope.noteText.length);
	};
	$scope.savedNotes = [];
	$scope.saveNote = function () {
		if ($scope.charLeft() >= 0 ) {
			$scope.savedNotes.push($scope.noteText);
			console.log($scope.savedNotes);
			alert("Your note was saved.");
		} else {
			alert("Your note could not be saved because it is too long.");
		}
	};
});