const findTheOldest = function(peopleArr) {

    let peopleAlive = peopleArr.map((person) =>{
        if(!person.yearOfDeath){
            return {...person, yearOfDeath: new Date().getFullYear()}
        }else{
            return {...person}
        }
    })
    console.log(peopleAlive)
    
    let oldestPeopleInOrder =  peopleAlive.sort((a,b) =>{
        let totalYearA = a.yearOfDeath - a.yearOfBirth
        let totalYearB = b.yearOfDeath - b.yearOfBirth
        return totalYearB - totalYearA
    })
    return oldestPeopleInOrder[0]
};

// Do not edit below this line
module.exports = findTheOldest;
