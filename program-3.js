const person = {
    Name: "Johny",
    Age: 40,
    Cars: [
        {
        name: "ford",
        models: ["mustang", "Fiest", "Mustang"],
        },
        {
        Name: "BMW",
        models: [320, 'x3', 'x5'],
        },
        {
        Name: "fiat",
        models: [500, "panda"],
        },
    ]
};
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}

for (let key in person) {
    console.log(key, person[key]);
}