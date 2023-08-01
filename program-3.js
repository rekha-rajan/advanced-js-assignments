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


function displayObject(obj) {
    for (const key in obj) {
        const value = obj[key];
        if (Array.isArray(value)) {
            console.log(key + ':');
            value.forEach((element) => {
                if (typeof element === 'object' && element !== null) {
                    displayObject(element);
                } else {
                    console.log(element);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            for (const key2 in value) {
                console.log(key2 + ': ' + value[key2]);
            }
        } else {
            console.log(key + ': ' + value);
        }
    };
}

displayObject(person);
