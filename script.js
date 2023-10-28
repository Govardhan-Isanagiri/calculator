let calculation = localStorage.getItem('save')|| '';
        displayCalculation();

        function upddateCalculation(value) {
            calculation += value;
            
            // Display the calculation on the page
            // instead of console.log
            displayCalculation();

            localStorage.setItem('calculation', calculation);
            }

            function displayCalculation() {
                document.querySelector('.js-cal')
                    .innerHTML = calculation;
            }