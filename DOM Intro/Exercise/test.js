function restourantObjCreation(input) {
    let restourantObj = {};

    input.forEach((line) => {
      let [key, value] = line.split(" - ");

      if (restourantObj.hasOwnProperty(key)) {
        restourantObj[key].push(...value.split(", "));
      } else {
        restourantObj[key] = [...value.split(", ")];
      }
    });

    return restourantObj;
  }

  let input = [
    "Mikes - Steve 1000, Ivan 200, Paul 800",
    "Fleet - Maria 850, Janet 650"
  ];
  
  let result = restourantObjCreation(input).
  console.log(result);
  

  