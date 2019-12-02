var app = angular.module('app', ['ngAnimate']);
app.controller('Controller', Controller);
app.controller('SwitchController', SwitchController);
app.controller('FormCtrl', function ($scope, $http) {

    $scope.postdata = function (name, dobd,dobm,doby) {
        dob = `${dobd}-${dobm}-${doby}`;
        var data = {
            name: name,
            dob: dob,

            // nationality: nationality,
            // location: location,
            // team: team,
            // gender: gender,
            // sports: sports,
            // about: about,
            // linkedin: linkedin,
            // facebook: facebook,
            // youtube: youtube
        };

        //Call the services
        $http.post('/players', JSON.stringify(data)).then(function (response) {
            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";
        })
    };

});

function Controller($scope){
    $scope.test = 'angular connected'
}


function SwitchController() {
    var stage = this;
    stage.current = "one";
    stage.stageOne = stageOne;
    stage.stageTwo = stageTwo;
    stage.stageThree = stageThree
    stage.stageFour = stageFour
    stage.stageFive = stageFive

    function stageOne() {
        stage.current = "one";
    }

    function stageTwo() {
        stage.current = "two";
    }

    function stageThree() {
        stage.current = "three";
    }

    function stageFour() {
        stage.current = "four";
    }

    function stageFive() {
        stage.current = "five";
    }
}



