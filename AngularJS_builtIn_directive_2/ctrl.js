function GradeController($scope){
    $scope.gradeList = [
        {"subject" : "Korean", "grade" : "A"},
        {"subject" : "English", "grade" : "B"},
        {"subject" : "Russian", "grade" : "C"},
        {"subject" : "Chinese", "grade" : "D"}
    ];
    $scope.showGrade = function(grade){
        console.dir(grade);
        grade.isShow = grade.isShow ? !grade.isShow : true;
    }
}

function KingController($scope){
    $scope.members = [
        {"id" : "user00", "name" : "영조", "years" : "52"},
        {"id" : "user01", "name" : "숙종", "years" : "46"},
        {"id" : "user02", "name" : "예종", "years" : "1"},
        {"id" : "user03", "name" : "문종", "years" : "2"},
        {"id" : "user04", "name" : "단종", "years" : "2"},
        {"id" : "user05", "name" : "세종", "years" : "32"},
    ]
    $scope.criteria = $scope.criteria | "id";
    $scope.search = {"id" : "", "name" : "", "years" : "", $ : ""};
    $scope.changeSearch = function(type){
        for(var prop in $scope.search){
            console.log(prop);
            if(prop !==type){
                $scope.search[prop] = "";
            }
        }
    }
}

function KeywordController($scope){
    $scope.content = [
        "HTML", "JavaScript", "Java", "Python", "C#", ".NET", "Objective-C", "AngularJs"
    ];
    $scope.check = function(actual, expected){
        return actual.toLowerCase()
            .indexOf(expected.toLowerCase()) >= 0 ? true : false;
    }
    $scope.members = [];
    for(var i =0 ; i<121 ; i++){
        $scope.members.push({"id" : "user" +(i+1), "name" : "사용자" + (i+1), "tel" : "123-00" +i});
    }
}