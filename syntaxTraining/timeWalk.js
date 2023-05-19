function timeWalk(steps, stepsInMeters, studentSpeed) {
    
    const distanceMeters = steps * stepsInMeters // namirame razstoqnieto
    const speedMeterSec = studentSpeed / 3.6 // formula koqto namira ot km/h v m/s
    const time = distanceMeters / speedMeterSec;
    const rest = Math.floor(distanceMeters / 500);


    const timeMin = Math.floor(time / 60);
    const timeSec = Math.round(time - timeMin * 60);
    const timeHr = Math.floor(time / 3600);

    const hh = timeHr < 10 ? "0" : "";
    const mm = timeMin + rest < 10 ? "0" : "";
    const ss = timeSec < 10 ? "0" : "";
    // console.log(mm, timeMin, rest)

    const output = `${hh + timeHr}:${Number(mm) + timeMin + rest}:${ss + timeSec}`;
    console.log(output)
    
}
timeWalk(4000, 0.60, 5)
timeWalk(2564, 0.7, 5.5)