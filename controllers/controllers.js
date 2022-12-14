angular.module('Aula',[]).controller('PrimeiroController', function($scope, $http){

            $scope.titulo = 'Aula Angular'

            $scope.formInclusao = {
                                    "nome" : "",
                                    "idade" : "",
                                    "pais" : ""
                                  }

            $scope.nomeListaPessoas = 'Lista de Pessoas'

            $scope.listaPessoas = [];

            $scope.pessoa1 = {
                                "nome" : "Danilo",
                                "idade" : 34,
                                "pais" : "Brasil"
                             };
            $scope.pessoa2 = {
                                "nome" : "João",
                                "idade" : 23,
                                "pais" : "Brasil"
                             };

            $scope.listaPessoas.push($scope.pessoa1);
            $scope.listaPessoas.push($scope.pessoa2);

            $scope.exibirFormularioInclusao = false;

            $scope.trueOrFalse = function (boolean) {
                if(boolean) {
                    boolean = false
                } else {
                    boolean = true
                }
            }

            $scope.incluirPessoa = function () {

                $scope.listaPessoas.push({
                                            nome: $scope.formInclusao.nome, 
                                            idade: $scope.formInclusao.idade, 
                                            pais: $scope.formInclusao.pais
                                        });
                $scope.formInclusao = {
                                    "nome" : "",
                                    "idade" : "",
                                    "pais" : ""
                                  }                
            }

            $scope.excluirPessoa = function (sNome) {
                var listaPessoasNova = $scope.listaPessoas.filter(
                    function(pessoa) {
                        return pessoa.nome != sNome;
                                    });

                $scope.listaPessoas = listaPessoasNova;
            }

            $scope.carregarPessoas= function() {
                $scope.carregandoPessoas = true;
                $http({
                    url: 'Ajax.json',
                    method: 'GET'
                }).then(function(resposta) {
                    console.log(resposta);
                    $scope.listaPessoas = resposta.data
                }, function(resposta){
                    console.log(resposta);
                    alert('algum erro aconteceu!')
                }).finally(function(){
                    $scope.carregandoPessoas = false
                })
            }



        })