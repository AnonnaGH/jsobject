var soppingCart = {
    books: 3,
    sunglass: 1,
    keybord: 5,
    mouse: 1,
    pen:25,
    shoes: 2
}

const keys =Object.keys(soppingCart);
console.log(keys);

const values =Object.values(soppingCart);
console.log(values);

for(var i =0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = soppingCart[propertyName];
    console.log(propertyName, propertyValues);
}

