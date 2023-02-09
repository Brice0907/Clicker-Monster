import './style.scss'
// import monstre from './data/monstre.json'
import { monstre } from './test.js'

async function main() {

    let ATQdeBase = 1
    let gold = 0
    document.querySelector('.argent').innerText = gold

    const randomMonstre = monstre[Math.floor(Math.random() * 3)]

    let vie = randomMonstre.hp
    document.querySelector('.name').innerText = randomMonstre.name
    document.querySelector('.img').src = randomMonstre.picture
    document.querySelector('.hp').innerText = randomMonstre.hp
    // document.querySelector('.anim_degats').innerText = ATQdeBase      // mettre dans la fonction de mon anim

    const targetMonstre = document.querySelector('.body_section_monstre')

    ///// FUNCTION TUER UN MONSTRE \\\\\

    function killMonstre() {

        randomMonstre.hp = randomMonstre.hp - ATQdeBase
        console.log(randomMonstre.hp);

        document.querySelector('.hp').innerText = randomMonstre.hp

        if (randomMonstre.hp <= 0) {

            const newMonstre = monstre[Math.floor(Math.random() * 3)]
            document.querySelector('.name').innerText = newMonstre.name
            document.querySelector('.img').src = newMonstre.picture
            document.querySelector('.hp').innerText = newMonstre.hp

            randomMonstre.hp = newMonstre.hp
            winGold()
            console.log("Monstre mort");

            if (newMonstre.hp <= 0) {
                randomMonstre.hp = vie
                document.querySelector('.hp').innerText = randomMonstre.hp
            }
        }
    }
    targetMonstre.addEventListener("click", killMonstre)


    ///// FUNCTION GAGNER DES GOLDS \\\\\

    function winGold() {
        gold = gold + randomMonstre.gold[Math.floor(Math.random() * 3)]
        document.querySelector('.argent').innerText = gold
    }


    ///// FUNCTION ATQ DE BASE \\\\\

    let lvlUpgradeATQ = 1
    let priceATQdeBase = 10

    const targetATQshop = document.querySelector('.atq_de_base')
    document.querySelector('.lvlATQ').innerText = lvlUpgradeATQ
    document.querySelector('.priceATQ').innerText = priceATQdeBase

    function upgradeATQdeBase() {

        if (gold >= priceATQdeBase) {

            gold = gold - priceATQdeBase
            document.querySelector('.argent').innerText = Math.trunc(gold)
            lvlUpgradeATQ = lvlUpgradeATQ + 1
            document.querySelector('.lvlATQ').innerText = lvlUpgradeATQ
            ATQdeBase = ATQdeBase + 1
            document.querySelector('.anim_degats').innerText = ATQdeBase
            priceATQdeBase = priceATQdeBase * 1.80
            document.querySelector('.priceATQ').innerText = Math.trunc(priceATQdeBase)

        } else {
            console.log('il me manque de l\'argent');
        }

    }
    targetATQshop.addEventListener('click', upgradeATQdeBase)

    ///// ANIM ATQ \\\\\


}
main()