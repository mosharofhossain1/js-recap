let num = 19;
// console.log(num % 2 == 0);

if(num % 2 == 0){
    console.log(num + ' is Even Number')
}

else{
    console.log(num + ' is Odd Number')
}

// Mark system Model 

let Mark = 40;

if(Mark < 0 || Mark <= 0){
    console.log('invalid Mark')
}
else if(Mark >= 80){
    console.log('Your result is A+')
}
else if(Mark >= 70){
    console.log('Youre result is A')
}
else if(Mark >= 60){
    console.log('Your result is A-');
}
else if(Mark >= 50){
    console.log('Your result is B ')
}
else if(Mark >= 40){
    console.log('Your mark is D')
}
else if(Mark >= 33){
    console.log('youre result is C')
}

else{
    console.log('Youere faild student')
}


// Switch condition 

let role = 'bolentier';

switch(role){
    case 'admin':
        console.log("You'r an admin")
    break;
    case 'teacher':
        console.log("You're a teacher");
    break;
    case 'student':
        console.log("You're a student")
    break;
    case 'guardian':
        console.log("You're a guardian")
        break;
    default:
        console.log('Invalid Role')  
}