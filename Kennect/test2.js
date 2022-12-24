//Arrray Declaration
let days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


//While Loop Example to print Days
let c =0;
while( c < days.length){

    console.log(days[c])

    //Switch Example 
    switch(days[c].toUpperCase()){

        case 'MONDAY' :{
            console.log('Time to Get Back to Work');
            break;
        }
        case 'TUESDAY' :{
            console.log('This Week is Long');
            break;
        }
        case 'WEDNESDAY' :{
            console.log('I have so much Work');
            break;
        }
        case 'THURSDAY' :{
            console.log('Almost There!!');
            break;
        }
        case 'FRIDAY' :{
            console.log('Just 1 More Day to go');
            break;
        }
        case 'SATURDAY' :{
            console.log('Yayy !! Its Weekend');
            break;
        }
        case 'SUNDAY' :{
            console.log('Party Night');
            break;
        }
        default :{
            console.log('There are NO Other Days');
        }

    }


    c++;
}

