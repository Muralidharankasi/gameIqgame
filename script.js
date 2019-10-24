var app = angular.module('Iqtest', []);
app.controller('icontroller', function($scope,$timeout) {
    $scope.q="abject aberration,bjure abnegation,abrogate abscond,abstruse accede,accost accretion,cumen adamant,admonish adumbrate,adverse advocate,affluent aggrandize,alacrity alias,ambivalent amenable,amorphous anachronistic,anathema annex,antediluvian antiseptic,apathetic antithesis,pocryphal approbation,arbitrary arborealarcane,archetypal arrogate,ascetic aspersion,assiduous atrophy,bane bashful,beguile bereft,blandishment bilk,bombastic,cajole callous,calumny camaraderie,candor capitulate,carouse carp,caucus cavort,circumlocution,circumscribe,circumvent,clamor,cleave cobbler,cogent cognizant,commensurate,complement,compunction,concomitant conduit,congruity consign,constituent construe,contusion contrite,contentious contravene,convivial corpulence,covet cupidity,dearth debacle,debauch debunk,defunct demagogue,denigrate derivative,despot,diaphanous,didactic dirge,disaffected,discomfit disparate,dispel disrepute,divisive,dogmatic".split(",");
   var random= Math.floor(Math.random()*$scope.q.length);
   
    $scope.inputs="";
     $scope.count=0; 
     $scope.wcount=-1;
      $scope.CORRECT="REQUIRED";
   $scope.exe=function(){
    var random= Math.floor(Math.random()*$scope.q.length); 
       $timeout(function(){$scope.x = "GIVE YOUR ANSWER"}, 4000);
     if( $scope.inputs== $scope.dum)
       {
       $scope.CORRECT="CORRECT";
       $timeout(function(){ $scope.CORRECT="REQUIRED";}, 1000);
        $scope.count++;
      }
       else
      {
        $scope.CORRECT="WRONG";
         $timeout(function(){ $scope.CORRECT="REQUIRED";}, 1000);
         $scope.wcount++;
      }
    $scope.inputs="";
   $scope.dum=$scope.q[random]
    $scope.x=$scope.dum;
    }  
});
