import './style.scss'
import monstre from './data/monstre.json'

async function main() {

    let ATQdeBase = 1
    const randomMonstre = monstre[Math.floor(Math.random() * 3)]
 // mettre les hp dans une let et remplace le rdmmonstre.hp
    let vie = randomMonstre.hp
    document.querySelector('.name').innerText = randomMonstre.name
    document.querySelector('.img').src = randomMonstre.picture
    document.querySelector('.hp').innerText = randomMonstre.hp

    const targetMonstre = document.querySelector('.body_section_monstre')

    function killMonstre() {

        randomMonstre.hp = randomMonstre.hp - ATQdeBase
        console.log(randomMonstre.hp);
        
        document.querySelector('.hp').innerText = randomMonstre.hp

        if(randomMonstre.hp <= 0) {

            const newMonstre = monstre[Math.floor(Math.random() * 3)]
            document.querySelector('.name').innerText = newMonstre.name
            document.querySelector('.img').src = newMonstre.picture
            document.querySelector('.hp').innerText = newMonstre.hp

            randomMonstre.hp = newMonstre.hp
            
            console.log("Monstre mort");
            console.log(randomMonstre.hp);
            console.log(newMonstre.hp);
            if (newMonstre.hp <= 0) {
                randomMonstre.hp = vie
                document.querySelector('.hp').innerText = randomMonstre.hp
                console.log(randomMonstre.hp, "la sortie de secour");
            }
        }
    }
    targetMonstre.addEventListener("click", killMonstre)
    
    
    
}
main()