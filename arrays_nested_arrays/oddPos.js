function oddPoss(arr) {
    
    //Uslovie - Izkarai vsi4ki chisla na nechetna poziciq v masiva, umnoji gi x 2 i gi oburni v obraten red!

    let result = arr
        .filter((x, i) => i % 2 === 1) // x - chisloto, i- proverqvame dali e na chetna poz. 
        .map(x => x * 2) // s mapping umnojavame chislata x 2
        .reverse() // obrushtame gi
        .join(' ') // joinvame gi v nov masiv 'result' s razstoqniq mejdu tqh
    
    console.log(result)

}
oddPoss([10, 15, 20, 25])
oddPoss([3, 0, 10, 4, 7, 3])