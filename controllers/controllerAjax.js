angular.module('Aula',[]).controller('controllerAjax', function($scope, $http){

    $scope.titulo = 'Aula AJAX'

    $scope.nomeLista = 'Lista de buscas'
    $scope.termoBusca = ''

    $scope.listaBusca = [];

    $scope.carregarBusca  = function() {
        $http.jsonp('https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&callback=JSON_CALLBACK&srsearch=' + $scope.termoBusca
        ).then(function(resposta) {

            let pages = resposta.data.query.search[1].title;
            let nomePropriedade = resposta.data.query.search[0];

            $scope.listaBusca.push(nomePropriedade)


            console.log(pages);
            console.log(nomePropriedade);

            // console.log(nomePropriedade);
            // console.log($scope.listaBusca[0]);
        })
    }



})