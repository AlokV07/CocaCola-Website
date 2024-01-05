const pepsi = [
    {
    name: "Pepsi Diet",
    amount: "350 Cal",
    amount_per: "8.6%",
    fat: "0g",
    fat_per: "0%",
    sodium: "310mg",
    sodium_per: "1%",
    carbohydrated: "48g",
    carbohydrated_per: "15.3%",
    protein: "0g",
    protein_per: "0g",
    ml: "250 ml",
    poster1: "img/1 Pepsi white.png",
    poster2: "./img/1-Pepsi-blue.png",
    main_poster: "img/pepsi diet.png"
},
{
    name: "Pepsi Classic",
    amount: "330 Cal",
    amount_per: "7.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "30mg",
    sodium_per: "1%",
    carbohydrated: "41g",
    carbohydrated_per: "14%",
    protein: "0g",
    protein_per: "0g",
    ml: "330 ml",
    poster1: "./img/2 can white.png",
    poster2: "./img/2 can blue.png",
    main_poster: "./img/can.png"
},
{
    name: "Pepsi 500ML",
    amount: "350 Cal",
    amount_per: "12.9%",
    fat: "0g",
    fat_per: "0%",
    sodium: "40mg",
    sodium_per: "2%",
    carbohydrated: "53g",
    carbohydrated_per: "21.7%",
    protein: "0g",
    protein_per: "0g",
    ml: "500 ml",
    poster1: "./img/3 pepsi white.png",
    poster2: "./img/3 pepsi blue.png",
    main_poster: "./img/pepsi .5ltr.png"
},
{
    name: "Pepsi 1L",
    amount: "510 Cal",
    amount_per: "16.3%",
    fat: "0g",
    fat_per: "0%",
    sodium: "50mg",
    sodium_per: "4%",
    carbohydrated: "61g",
    carbohydrated_per: "14%",
    protein: "0g",
    protein_per: "0g",
    ml: "1 ltr",
    poster1: "./img/4 pepsi white.png",
    poster2: "./img/4 pepsi blue.png",
    main_poster: "./img/pepsi 1ltr.png"
},
{
    name: "Pepsi 1.5L",
    amount: "625 Cal",
    amount_per: "19.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "50mg",
    sodium_per: "4.5%",
    carbohydrated: "66g",
    carbohydrated_per: "30.8%",
    protein: "0g",
    protein_per: "0g",
    ml: "1.5 ltr",
    poster1: "./img/5 pepsi white.png",
    poster2: "./img/5 pepsi blue.png",
    main_poster: "./img/pepsi 1.5ltr.png"
},
{
    name: "Pepsi 2.25L",
    amount: "729 Cal",
    amount_per: "37.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "60mg",
    sodium_per: "5%",
    carbohydrated: "69g",
    carbohydrated_per: "33.2%",
    protein: "0g",
    protein_per: "0g",
    ml: "2 ltr",
    poster1: "./img/6 pepsi white.png",
    poster2: "./img/6 pepsi blue.png",
    main_poster: "./img/pepsi 2ltr.png"
}
]

Array.from(document.getElementsByClassName("card_pepsi")).forEach((ele, i) =>{
    ele.addEventListener('mouseover',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster1;
    })

    ele.addEventListener('mouseout',()=>{
        document.getElementsByClassName('pepsi_hover_img')[i].src = pepsi[i].poster2;
    })
})

Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele, i)=>{
    ele.addEventListener('click',()=>{
        document.getElementById('main_bottle').src = pepsi[i].main_poster;
        document.getElementById('main_title').innerText = pepsi[i].name;
        document.getElementById('ml_title').innerText = pepsi[i].ml;
        document.getElementById('cal').innerText = pepsi[i].amount;
        document.getElementById('cal_per').innerText = pepsi[i].amount_per;
        document.getElementById('fat').innerText = pepsi[i].fat;
        document.getElementById('fat_per').innerText = pepsi[i].fat_per;
        document.getElementById('sodium').innerText = pepsi[i].sodium;
        document.getElementById('sodium_per').innerText = pepsi[i].sodium_per;
        document.getElementById('carbo').innerText = pepsi[i].carbohydrated;
        document.getElementById('carbo_per').innerText = pepsi[i].carbohydrated_per;
        document.getElementById('protein').innerText = pepsi[i].protein;
        document.getElementById('protein_per').innerText = pepsi[i].protein_per;
    })
})

let index = 1;

document.getElementById('left_btn').addEventListener('click',()=>{
    index -= 1
    if (index < 0 ) {
        index = pepsi.length;
    }
    document.getElementById('main_bottle').src = pepsi[index].main_poster;
    document.getElementById('main_title').innerText = pepsi[index].name;
    document.getElementById('ml_title').innerText = pepsi[index].ml;
    document.getElementById('cal').innerText = pepsi[index].amount;
    document.getElementById('cal_per').innerText = pepsi[index].amount_per;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat_per').innerText = pepsi[index].fat_per;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium_per').innerText = pepsi[index].sodium_per;
    document.getElementById('carbo').innerText = pepsi[index].carbohydrated;
    document.getElementById('carbo_per').innerText = pepsi[index].carbohydrated_per;
    document.getElementById('protein').innerText = pepsi[index].protein;
    document.getElementById('protein_per').innerText = pepsi[index].protein_per;
})

document.getElementById('right_btn').addEventListener('click',()=>{
    index++;
    if (index > pepsi.length) {
        index = 0;
    }
    document.getElementById('main_bottle').src = pepsi[index].main_poster;
    document.getElementById('main_title').innerText = pepsi[index].name;
    document.getElementById('ml_title').innerText = pepsi[index].ml;
    document.getElementById('cal').innerText = pepsi[index].amount;
    document.getElementById('cal_per').innerText = pepsi[index].amount_per;
    document.getElementById('fat').innerText = pepsi[index].fat;
    document.getElementById('fat_per').innerText = pepsi[index].fat_per;
    document.getElementById('sodium').innerText = pepsi[index].sodium;
    document.getElementById('sodium_per').innerText = pepsi[index].sodium_per;
    document.getElementById('carbo').innerText = pepsi[index].carbohydrated;
    document.getElementById('carbo_per').innerText = pepsi[index].carbohydrated_per;
    document.getElementById('protein').innerText = pepsi[index].protein;
    document.getElementById('protein_per').innerText = pepsi[index].protein_per;
})