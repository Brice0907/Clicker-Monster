import './style.scss'
import { monstre } from './monstre.js'

async function main() {

    const stat = JSON.parse(localStorage.getItem('stat')) || []
    const etage = JSON.parse(localStorage.getItem('stage')) || []

    let ATQdeBase = stat.damage ? stat.damage : 1
    let gold = stat.gold ? stat.gold : 0
    document.querySelector('.argent').innerText = gold

    const randomMonstre = monstre[Math.floor(Math.random() * 3)]

    let vie = randomMonstre.hp
    document.querySelector('.name').innerText = randomMonstre.name
    document.querySelector('.img').src = randomMonstre.picture
    document.querySelector('.hp').innerText = randomMonstre.hp
    // document.querySelector('.anim_degats').innerText = ATQdeBase      // mettre dans la fonction de mon anim

    const targetMonstre = document.querySelector('.body_section_monstre')

    const color = document.querySelector('.color')
    let midHP = Math.ceil(randomMonstre.hp * 0.60)
    let lowHP = Math.ceil(randomMonstre.hp * 0.30)

    ///// FUNCTION TUER UN MONSTRE \\\\\

    function killMonstre() {

        if (midHP >= randomMonstre.hp) {
            color.setAttribute("style", "background-color:orange;")
            if (lowHP >= randomMonstre.hp) {
                color.setAttribute('style', "background-color:red;")
            }
        }
        randomMonstre.hp = randomMonstre.hp - ATQdeBase
        console.log(randomMonstre.hp);

        document.querySelector('.hp').innerText = randomMonstre.hp


        if (randomMonstre.hp <= 0) {

            const newMonstre = monstre[Math.floor(Math.random() * 3)]
            document.querySelector('.name').innerText = newMonstre.name
            document.querySelector('.img').src = newMonstre.picture
            document.querySelector('.hp').innerText = newMonstre.hp
            color.setAttribute('style', "background-color:rgb(0, 211, 0);")
            randomMonstre.hp = newMonstre.hp
            midHP = Math.ceil(newMonstre.hp * 0.60)
            lowHP = Math.ceil(newMonstre.hp * 0.30)
            winGold()
            compteur()
            console.log("Monstre mort");

            if (newMonstre.hp <= 0) {
                randomMonstre.hp = vie
                midHP = Math.ceil(randomMonstre.hp * 0.60)
                lowHP = Math.ceil(randomMonstre.hp * 0.30)
                document.querySelector('.hp').innerText = randomMonstre.hp
            }
        }
    }
    targetMonstre.addEventListener("click", killMonstre)


    ///// FUNCTION GAGNER DES GOLDS \\\\\

    function winGold() {
        gold = gold + randomMonstre.gold[Math.floor(Math.random() * 3)]
        document.querySelector('.argent').innerText = Math.trunc(gold)

        let stat = {
            levelAttaque: lvlATQ,
            priceAttaque: priceATQ,
            damage: ATQdeBase,
            gold: Math.trunc(gold),
        }
        localStorage.setItem('stat', JSON.stringify(stat))
    }


    ///// FUNCTION ATQ DE BASE \\\\\

    let lvlUpgradeATQ = 1
    let priceATQdeBase = 10

    const targetATQshop = document.querySelector('.atq_de_base')
    let lvlATQ = document.querySelector('.lvlATQ').innerText = stat.levelAttaque ? stat.levelAttaque : lvlUpgradeATQ
    let priceATQ = document.querySelector('.priceATQ').innerText = stat.priceAttaque ? Math.trunc(stat.priceAttaque) : priceATQdeBase

    function upgradeATQdeBase() {

        if (gold >= priceATQ) {

            gold = gold - priceATQ
            document.querySelector('.argent').innerText = Math.trunc(gold)
            lvlATQ = lvlATQ + 1
            document.querySelector('.lvlATQ').innerText = lvlATQ
            ATQdeBase = ATQdeBase + 1
            // document.querySelector('.anim_degats').innerText = ATQdeBase
            priceATQ = priceATQ * 1.80
            document.querySelector('.priceATQ').innerText = Math.trunc(priceATQ)

            let stat = {
                levelAttaque: lvlATQ,
                priceAttaque: Math.trunc(priceATQ),
                damage: ATQdeBase,
                gold: Math.trunc(gold),
            }
            localStorage.setItem('stat', JSON.stringify(stat))

        } else {
            console.log('il me manque de l\'argent');
        }

    }
    targetATQshop.addEventListener('click', upgradeATQdeBase)


    ///// STAGE \\\\\

    let count = etage.etape ? etage.etape : 1
    let stage = etage.stage ? etage.stage : 1
    document.querySelector('.stage').innerText = stage
    document.querySelector('.count').innerText = count

    function compteur() {
        count++
        document.querySelector('.count').innerText = count

        let etape = {
            etape: count,
            stage: stage,
        }
        localStorage.setItem('stage', JSON.stringify(etape))

        if (count === 11) {
            count = 1
            document.querySelector('.count').innerText = count
            stage++
            document.querySelector('.stage').innerText = stage
            let etape = {
                etape: count,
                stage: stage,
            }
            localStorage.setItem('stage', JSON.stringify(etape))
        }
    }

}
main()

// pour le système de compte a rebour de boss, utiliser : setTimeout() et pour cancel : clearTimeout()