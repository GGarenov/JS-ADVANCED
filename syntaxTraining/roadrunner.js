function roadRunner(speed, area) {
    let limit = 0;
    let status = '';
    
    switch (area) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }
    
    let narushenie = speed - limit;
    
    if (narushenie <= 20) {
        status = "speeding";
    } else if (narushenie <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${narushenie} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRunner(21, 'residential')