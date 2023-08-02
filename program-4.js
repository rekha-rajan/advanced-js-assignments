const  student1= {
    id: 101,
    name:"Deepa",
    age: 20
};

const student2 = {
    id: 101,
    name:"Deepas",
    age: 20 
};

function compareObjects(student1, student2) {
    const key1 = Object.keys(student1);
    const key2 = Object.keys(student2);
    if (key1.length !== key2.length) {
        console.log('objects have different number of properties');
    }

    let areEqual = true;
    for (const key of key1) {
        console.log(student1[key]+'  '+student2[key]);
        if (student1[key] !== student2[key]) {
            areEqual = false;
        }
    }

    if (areEqual) {
        console.log('Objects have the same properties and values.');
      } else {
        console.log('Objects have different properties or values.');
      }
}
compareObjects(student1, student2);
