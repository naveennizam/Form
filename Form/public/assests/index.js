
function present(a) {
    a.style.backgroundColor = "rgba(63, 161, 161,0.3)"
}
function absent(b) {
    b.style.backgroundColor = "rgba(248, 189, 161,0.5)"
}
function fillcity(c) {
    c.style.backgroundColor = "rgba(248, 189, 161,0.5)"

    var cityname = document.querySelector("#city").value;
    let _CityName = cityname.toLowerCase();
    var zipenter;
    switch (_CityName) {
        case "karachi":
            zipenter = "606098"
            break;
        case "lahore":
            zipenter = "712398"
            break;
        case "islamabad":
            zipenter = "888884"
            break;
        case "peshawar":
            zipenter = "123448"
            break;
        case "rawalpindi":
            zipenter = "122334"
            break;
        case "faislabad":
            zipenter = "112349"
            break;
        case "gujrawala":
            zipenter = "122349"
            break;
        case "bhawalpur":
            zipenter = "567899"
            break;
        case "sialkot":
            zipenter = "556789"
            break;
        case "sukkur":
            zipenter = "566789"
            break;
        case "quetta":
            zipenter = "435566"
    }
    document.querySelector("#zip").value = zipenter

}
function save_data() {
    let naam = document.querySelector("#saveServer")
    let mal = document.querySelector("#mail")
    let cit = document.querySelector("#city")
    let zi = document.querySelector("#zip")
    
    localStorage.setItem("name", naam.value);
    localStorage.setItem("email", mal.value);
    localStorage.setItem("City", cit.value);
    localStorage.setItem("City_Code", zi.value);

};
 
// (document).ready(function () {
//     ("button").click(function () {
//         var favorite = [];
//         $.each($("input[name='choice']:checked"), function () {
//             favorite.push($(this).val());
//         });
//         alert(favorite)
//         localStorage.setItem("Courses", favorite)
//     });
// });

