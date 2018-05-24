const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let x = 0;

for (x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
let conjoinedWord= "";
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

// exercise 3
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

   let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}



// Exercise 4


const locations = [[8,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let k=0;
for (k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
   

    if (currentLocation[0] > 2) {
        
             console.log("This location is invalid")
    }

    
}
console.log(`There were ${k} locations displayed`)


// exercise 5
const suffix = " the Llama"
let llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    let randomizer = Math.floor(Math.random() * 7)
   
        let name = possibleNames[randomizer]
               
    
    return name + suffix
}


console.log(llamaNamer())




