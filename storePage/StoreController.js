function getCoins() {

    const coins = model.data.user[1].coins
    document.getElementById('coinCount').textContent = coins;

}
