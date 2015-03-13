app.controller("notepadController", function($scope) {
	$scope.noteText = "";
	$scope.charLeft = function () {
		return (250 - $scope.noteText.length);
	}
	$scope.savedNotes = [];
	$scope.saveNote = function () {
		var duplicate = false;
		$scope.savedNotes.forEach( function (note) {
			if (note === $scope.noteText) {
				alert ("an identical note has already been saved.");
				duplicate = true;
			}
		});
		if (duplicate) {
			return;
		}
		
		if ($scope.charLeft() < 0 ) {
			alert("Your note could not be saved because it is too long.");
		} else {
			$scope.savedNotes.push($scope.noteText);
			alert("Your note was saved.");
		}
	}
	$scope.clearNote = function () {
		$scope.noteText = "";
	}
});