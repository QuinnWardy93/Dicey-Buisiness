document.addEventListener('DOMContentLoaded', function () {
    let diceArray = []
    let generateDie = document.getElementById("generateDice")
    let container = document.getElementById("diceContainer")
    let RerollBtn = document.getElementById("Reroll")
    let sumBtn = document.getElementById("SumOfDice")
    
    class Die {
        constructor(value) {
            this.value = value;
            this.die = document.createElement('div')
            this.die.innerText = this.value
            this.die.className = 'dice'
            container.appendChild(this.die)
            this.die.addEventListener("click", () => this.roll())
            this.die.addEventListener("dblclick", () => this.die.remove())
            diceArray.push(this)
            this.roll()
        }

        roll() {
            this.value = Math.floor((Math.random() * 6) + 1)
            this.die.innerText = this.value
        }


    } 
    
    generateDie.addEventListener("click", () => new Die(newVal()))
    RerollBtn.addEventListener("click", () => diceArray.forEach(x => x.roll()))
    sumBtn.addEventListener("click", () => {
        let sum = 0;
        diceArray.forEach(x => sum += x.value)
        alert(sum)
    })
    
    let newVal = () => {
        Math.floor((Math.random() * 6) + 1);
    }
    
})

