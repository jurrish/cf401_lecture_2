let jr = {name: 'jr'};

function homeTown(city, state) {
    return `${this.name} is from ${city}, ${state}`;
}

let someObj = {
    city: ['st.louis','seattle','topeka'],
    state: ['missouri', 'washington','iowa']
}

//call
console.log( homeTown.call(jr, 'stlouis', 'missouri') );
//can take array as reference - most applicable since we're passing variables around many applications
console.log(homeTown.call(jr, someObj.city[0], someObj.state[1]));


//apply expects an array
console.log(homeTown.apply(jr, ['stlouis', 'missouri']));
