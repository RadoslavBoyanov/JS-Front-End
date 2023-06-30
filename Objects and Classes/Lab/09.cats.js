function solve(array) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const string of array) {
        let [name, age] = string.split(' ');
        let cat = new Cat(name, age);
        cats.push(cat);

    }

    cats.forEach(cat => {
        cat.meow()
    });
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2'])