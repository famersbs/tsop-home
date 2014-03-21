/**
OB * Controllerss
 */

define(function() {

		return function( module ){

				// Tsop Main Ctrl
				module.controller('TsopCtrl', ['$scope','HomeSrvc', function($scope,HomeSevc) {


						//this is credentail var
					$scope.user = {name : "", img : "", aboutMe : ""};
						//console.log('tsop');

				    $scope.login = function(authResult){
					//		console.log(authResult);
					//		console.log('login click');
					
					HomeSevc().connect(authResult.code);
				    
	//			    gapi.client.load('plus','v1',this.renderProfile);
				    //console.log($scope.user);
				}
				    $scope.logout = function(){			
					//console.log(HomeSevc().logout());
						  //  console.log('logout click');
					HomeSevc().logout();
					}

				    $scope.renderProfile = function(code){
					var request = gapi.client.plus.people.get({'userId' : 'me'});
					request.execute( function(profile){
					    $scope.setUser(profile);
					    var user = {};
					    user['name'] = profile.displayName;
					    user['image'] = profile.image.url;
					    user['aboutMe'] = profile.aboutMe;
					   // user['code'] = $scope.code;
					    console.log(HomeSevc().login(user));
					});

				    }
				    $scope.setUser = function(profile){
					console.log(profile);
	
					// scope.user['name'] = profile.displayName;
					// scope.user['img'] = profile.image.url;
					// scope.user['aboutMe'] = profile.aboutMe;
				    }

				}]);
				
				module.controller('RegistCtrl',['$scope',function($scope){
					console.log('regist');
				}]);
				
				
				// T-sop Link Ctlr
				module.controller('TsopSnsLinkCtrl', ['$scope', function($scope) {
					
					$scope.snslist = [{name:'FaceBook', url:'https://www.facebook.com/groups/231252133706403/', target:'_blank'},
					                  {name: 'Google+', url:'https://plus.google.com/communities/105507378655558718131', target:'_blank'}];
					
					
					

				}]);
				
				// T-sop Login Ctrl
				module.controller('TsopLoginCtrl', ['$scope', function($scope) {
					
					$scope.loginList = [{name:'GitHub Login', url:'/authenticate/github', target:''}];
					
				}]);

				module.controller('MemberCtrl', ['$scope', function($scope) {
						console.log('member');
						$scope.test = 'member';

				}]);

				module.controller('AboutCtrl', ['$scope', function($scope) {
						console.log('AboutCtrl');
						$scope.test = 'AboutCtrl';

				}]);

				module.controller('HomeCtrl', ['$scope', function($scope) {
						console.log('HomeCtrl');
						$scope.test = 'HomeCtrl';

				}]);

		};

});
