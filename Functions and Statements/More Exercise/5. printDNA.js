function dnaPrint(number) {
    let str = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {

        let currentStr1 = str[counter % 10]
        let currentStr2 = str[(counter % 10) + 1]

      if (i % 4 == 0) {
        console.log(`**${currentStr1 + currentStr2}**`);
      } else if (i % 4 == 1) {
        console.log(`*${currentStr1}--${currentStr2}*`);
      } else if (i % 4 == 2) {
        console.log(`${currentStr1}----${currentStr2}`);
      } else if (i % 4 == 3) {
        console.log(`*${currentStr1}--${currentStr2}*`);
      }

      counter += 2;
    }
  }

  dnaPrint(10)




