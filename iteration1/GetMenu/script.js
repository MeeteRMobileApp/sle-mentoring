// var endpoint = get(" www.demo3354820.mockable.io/menu/sushi");

var xhr = new XMLHttpRequest();
xhr.open('GET', "http://www.demo3354820.mockable.io/menu/sushi", true)
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);



// xhr.onreadystatechange = processRequest;

// function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var response = JSON.parse(xhr.responseText);
//         alert(response.ip);
//     }
// }