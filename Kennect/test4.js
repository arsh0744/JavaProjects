function devStart(){

    let devName ='Arsh';

    function introDev(){

        //Example of Closure -- devName variable defined in Parent Function
        console.log(`${devName} would like to show an Example of Closure`);

    }

    console.log('We are working with Scoping');

    introDev();
}

devStart();

