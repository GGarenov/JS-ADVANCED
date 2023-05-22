// USLOVIE
// Da otpechatame chislata na cheten index v dade array

function evenPosition(arr) {
    
    let result = []; // suzdavame array s rezultata
    for (i = 0; i < arr.length; i += 2){ // obhojdame arraya kato s i+= direktno smqtame 2ri index(cheten)
        result.push(arr[i]) // "pushvame" dobavqme kum rezultata chetnite chisla
    }
    console.log(result.join(' ')); // razdelqme gi s razstoqnie edno ot drugo

}
evenPosition(['20', '30', '40', '50', '60'])