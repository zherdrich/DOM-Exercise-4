document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    const data = new FormData(form);
    let quantity = data.get ("quantity");
    let coinType = data.get ("coinType");

    // console.log(quantity);
    // console.log(coinType);

for (let i = 0; i < quantity; i++){
        const newCoin = document.createElement("div");
        newCoin.classList.add("coin");
        newCoin.innerText = coinType;
        const deposit = document.querySelector(".coinSection");
        deposit.append(newCoin);  
}
});

// delete a coin on click

document.querySelector(".coinSection").addEventListener("click", (event) => {
    event.target.remove();
});