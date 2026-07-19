let details = {
    date: "12 july",
    load: 14,
    ed:"1.5%",
    bill_supply: " 17 sept",
    bill_month: "sept",
    reading_date: "15",
    issue_date:"16 sept",
    due_date: "21 sept"
}
let d1 = document.getElementById("d1");
let d2= document.getElementById("d2");
let d3= document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5= document.getElementById("d5");
let d6= document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8= document.getElementById("d8");

d1.innerText = details.date;
d2.innerText = details.load;
d3.innerText = details.ed;
d4.innerText = details.bill_supply;
d5.innerText = details.bill_month;
d6.innerText = details.reading_date;
d7.innerText = details.issue_date;
d8.innerText = details.due_date;

console.log(d1.innerText);

let customer_details = {
    customer_id: 12345,
    Tarief: "A-1b(03)T",
    load: 18,
}

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById('c3');

c1.innerText= customer_details.customer_id;
c2.innerText = customer_details.Tarief;
c3.innerText= customer_details.load

let bill_details = {
    ref_id: 526892,
    aces: 1,
}
let  ref = document.getElementById("ref-id");
let  ace= document.getElementById("aces");

ref.innerText = bill_details.ref_id;
ace.innerText = bill_details.aces;