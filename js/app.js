var app = angular.module("myModule", [])
	.controller("myController", function ($scope) {

		$scope.newMember = {};
		$scope.updateMember = {};
		$scope.updatedid;
		$scope.members = [];
		$scope.name1;
		$scope.email1;
		$scope.gender1;
	

		$scope.saveMember = function () {

			$scope.members.push($scope.newMember);
			console.log($scope.members);
			$scope.newMember = {};
		};
		
		$scope.editMember = function (index) {
			console.log(index);
			$scope.updatedid = index;
			console.log("updatedid" + $scope.updatedid);
			console.log($scope.members[index]);
			console.log($scope.members[index].name);
			//console.log($scope.name1);
			$scope.newMember.name = $scope.members[index].name;
			$scope.newMember.email = $scope.members[index].email;
			$scope.newMember.gender = $scope.members[index].gender;
			//console.log($scope.members);

		}
		$scope.saveUpdate = function () {
			console.log("saveid" + $scope.updatedid);
			
			for (i = 0; i <= $scope.members.length; i++) {

				if ($scope.updatedid === i) {
	

					$scope.members[i].name=$scope.newMember.name;
					$scope.members[i].email=$scope.newMember.email;
					$scope.members[i].gender=$scope.newMember.gender;
				}
			}
			console.log($scope.members.name1);

		}

		$scope.deleteMember = function (index) {
			console.log($scope.members);
			console.log(JSON.stringify($scope.members.slice(0, $scope.members.length)));
			console.log(index);
			$scope.del = $scope.members.splice(index, 1);
			console.log($scope.del);
			console.log($scope.members);
		}


	});