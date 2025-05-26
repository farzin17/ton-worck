// click

let click = document.querySelectorAll(".click");
let right = document.querySelectorAll(".box-main-bottom-right-main");
click[0].classList.add("set-click");
right[0].classList.add("show")
click.forEach(function tab_iterator(item, index){
    item.addEventListener("click", function onclick(e){
        click.forEach(function remove_classes(element){
            element.classList.remove("set-click");
        });
        let selectedElement = e.target;
        selectedElement.classList.add("set-click");
        right.forEach(function remove_classes_from_content(element){
            element.classList.remove("show");
        });
        let counterpart = right[index];
        counterpart.classList.add("show");
    });
});

// /click

// Number

let element = document.querySelector(".span-one");
 function get_elemet(){
    let element_next = element.textContent;
    element_next = Number(element.textContent)
    return element_next
}
function next(){
     let next_get_element = get_elemet();
    let next_next = next_get_element + 1;
    element.textContent = next_next
}
setInterval(next,250);

let element_two = document.querySelector(".span-two");
 function get_elemet_two(){
    let element_next_two = element_two.textContent;
    element_next_two = Number(element_two.textContent)
    return element_next_two
}
function next_two(){
     let next_get_element_two = get_elemet_two();
    let next_next_two = next_get_element_two + 1;
    element_two.textContent = next_next_two
}
setInterval(next_two,1000)

let element_sex = document.querySelector(".span-six");
 function get_elemet_sex(){
    let element_next_sex = element_sex.textContent;
    element_next_sex = Number(element_sex.textContent)
    return element_next_sex
}
function next_sex(){
     let next_get_element_sex = get_elemet_sex();
    let next_next_sex = next_get_element_sex + 1;
    element_sex.textContent = next_next_sex
}
setInterval(next_sex,10000);

// /Number

// let tabs_element = document.querySelector("phone");
// let content_element = document.querySelector("head-bottom-center-phone");
// tabs_element.forEach(function tabs_iterators(items, indexs){
//     items.addEventListener("click", function onclicks(e){
//         tabs_element.forEach(function removes_class(elements){
//             elements.classList.remove("phone-p")
//         });
//         let selectedElements = e.target;
//         selectedElements.classList.add("phone-p");
//         content_element.forEach(function remove_classes_element(element) {
//             element.classList.remove("test-phone");
//         });
//         let counterpart_contrnt = content_element[indexs];
//         counterpart_contrnt.classList.add("test-phone");
//     });
// });
let tabs_element = document.querySelectorAll(".phone");
let content_element = document.querySelectorAll(".head-bottom-center-phone");

tabs_element.forEach(function(items, indexs) {
    items.addEventListener("click", function(e) {
        tabs_element.forEach(function(elements) {
            elements.classList.remove("phone-p");
        });

        let selectedElements = e.target;
        selectedElements.classList.add("phone-p");

        content_element.forEach(function(element) {
            element.classList.remove("test-phone");
        });

        let counterpart_content = content_element[indexs];
        counterpart_content.classList.add("test-phone");
    });
});