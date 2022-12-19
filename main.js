import './style.scss'
import monstre from './data/monstre.json'

async function main() {

    let ATQdeBase = 1
    const randomMonstre = monstre[Math.floor(Math.random() * 3)]

    document.querySelector('.name').innerText = randomMonstre.name
    document.querySelector('.img').src = randomMonstre.picture
    document.querySelector('.hp').innerText = randomMonstre.hp

    const targetMonstre = document.querySelector('.body_section_monstre')

    function newHp() {
        randomMonstre.hp = randomMonstre.hp - ATQdeBase
        console.log(randomMonstre.hp);
        document.querySelector('.hp').innerText = randomMonstre.hp
    }
    targetMonstre.addEventListener("click", newHp)
    

    
}
main()