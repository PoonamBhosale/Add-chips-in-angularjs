// Lists of fruit names and Vegetable objects
                    vm.fruitNames = ['Apple', 'Banana', 'Orange'];
                    vm.roFruitNames = angular.copy(vm.fruitNames);
                    vm.editableFruitNames = angular.copy(vm.fruitNames);

                    vm.tags = [];
                    vm.vegObjs = [{
                            'name': 'Team.Jio@ril.com',
                            'type': 'Brassica'
                        },
                        {
                            'name': 'NV.Jio@ril.com',
                            'type': 'Brassica'
                        }
                    ];

                    vm.newVeg = function(chip) {
                        return {
                            name: chip,
                            type: 'unknown'
                        };
                    };
