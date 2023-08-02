/**Start with letter j */
const pickNameStartWithJ = names => names.filter(name => name.startsWith('j')).map((element) => element.toUpperCase());
console.log('Name Start with J :' + pickNameStartWithJ(['ammu','bichu','cichu','jimmy','john']));

/****unique result */
const myArray = ["Vishnu","Akhil","Aswin","Pooja","Vishnu","Ananthan","Jith","Jith","Pooja","Aswin"];
const uniqueArray = myArray.reduce((oldresult, item) => {
  if (!oldresult.includes(item)) {
    oldresult.push(item);
  }
  return oldresult;
}, []);
console.log('Name Start with J :' + uniqueArray);