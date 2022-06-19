export const names = [ 'Adrian', 'Austin', 'Charles', 'Kevin', 'Tim', 'Vinu' ];

/* Selects a random number from the length of the given array and will
return the value at that index */
export const getRandomName = (names) => names[Math.floor(Math.random() * names.length)];