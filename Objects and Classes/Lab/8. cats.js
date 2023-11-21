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

    const [name, age] = arr.shift().split(' ');
    const cat = new Cat(name, parseInt(age));

    
    cat.meow();
    
}

cats(['Mellow 2', 'Tom 5'])