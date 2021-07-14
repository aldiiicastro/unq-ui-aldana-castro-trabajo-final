const diceRepeat = (dice) => {
    let count = {};
    dice.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    return count
} 

export default {diceRepeat};