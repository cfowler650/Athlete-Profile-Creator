var app = angular.module('app', ['ngAnimate']);
app.controller('SwitchController', SwitchController);


app.controller('FormCtrl', function ($scope, $http) {

    $scope.Nationalities = ['American',
        'Australian',
        'Austrian',
        'Belarusian',
        'Brazilian',
        'British',
        'Canadian',
        'Chilean',
        'Croatian',
        'Czech',
    ];;

    $scope.Locations = ['Alabama',
        'Alaska',
        'Arizona',
        'Arkanas',
        'California',
        'Colorado',
        'Conneticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois'
    ];

    $scope.Sports = ['Golf',
        'Tennis',
        'Cricket',
        'Basketball',
        'Baseball',
        'American Football',
        'Aquatics',
        'Archery',
        'Automobile Racing',
        'Badminton',
        'Beach Volleyball',
        'Bobsleigh'
    ];;


    $scope.postdata = function (name, dobd,dobm,doby,nationality,gender,location,sports,team, about, linkedin, facebook, twitter, youtube) {

        dob = `${dobd}-${dobm}-${doby}`;
        var data = {
            name: name,
            dob: dob,
            nationality: nationality,
            gender: gender,
            location: location,
            sports: sports,
            team: team,
            about: about,
            linkedin: linkedin,
            facebook: facebook,
            youtube: youtube
        };

        //Call the services
        $http.post('/players', JSON.stringify(data)).then(function (response) {

            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";
        })


    };




});




function SwitchController() {
    var stage = this;
    stage.current = "one";
    stage.stageOne = stageOne;
    stage.stageTwo = stageTwo;
    stage.stageThree = stageThree;
    stage.stageFour = stageFour;
    stage.stageFive = stageFive;
    stage.checkCurrentStageOne = checkCurrentStageOne;
    stage.checkCurrentStageTwo = checkCurrentStageTwo;
    stage.checkCurrentStageThree = checkCurrentStageThree;
    stage.checkCurrentStageFour = checkCurrentStageFour;
    stage.checkCurrentStageFive = checkCurrentStageFive;

    function checkCurrentStageOne() {
       if (stage.current === "one"){
           return true;
       } else {
           return false;
       }
    }

    function checkCurrentStageTwo() {
        if (stage.current === "two") {
            return true;
        } else {
            return false;
        }
    }

    function checkCurrentStageThree() {
        if (stage.current === "three") {
            return true;
        } else {
            return false;
        }
    }

    function checkCurrentStageFour() {
        if (stage.current === "four") {
            return true;
        } else {
            return false;
        }
    }

    function checkCurrentStageFive() {
        if (stage.current === "five") {
            return true;
        } else {
            return false;
        }
    }


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



