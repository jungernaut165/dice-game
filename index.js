function randomdie() {
    var n = Math.floor(Math.random()*6)+1
    var path = "images/dice"+ n.toString() + ".png"

    return ([n, path]);
}

[n1,pic1]= randomdie();
[n2,pic2]= randomdie();


document.querySelector(".img2").setAttribute("src",pic2);
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src",pic1)
if (n1 > n2) {
    document.querySelector("body > div > h1").innerHTML='Player 1 wins!'
    console.log(n1,n2)
} else if (n2 > n1){
    document.querySelector("body > div > h1").innerHTML='Player 2 wins!'
    console.log(n1,n2)
} else {
    document.querySelector("body > div > h1").innerHTML='Tie!'
}
