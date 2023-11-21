function cats(arr) {


    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    const catObjects = arr.map(x => new Cat(x.split(' ')[0], x.split(' ')[1]));

    catObjects.forEach(x => x.meow());

    
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])