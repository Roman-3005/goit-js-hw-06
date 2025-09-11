class StringBuilder { 
    #value;

    constructor(initialValue) { 
        this.#value = initialValue;
    }

    getValue() { 
        return this.#value;
    }

    padEnd(str) { 
        this.#value.push(str);
    }

    padStart(str)

    padBoth(str)
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.



// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.

//  // Додає рядок у кінець
//   append(str) {
//     this.#value += str;
//   }

//   // Додає рядок на початок
//   prepend(str) {
//     this.#value = str + this.#value;
//   }

//   // Додає рядок і на початок, і в кінець
//   pad(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// // Приклад використання
// const builder = new StringBuilder("middle");

// builder.append(" end");
// console.log(builder.getValue()); // "middle end"

// builder.prepend("start ");
// console.log(builder.getValue()); // "start middle end"

// builder.pad("***");
// console.log(builder.getValue()); // "***start middle end***"