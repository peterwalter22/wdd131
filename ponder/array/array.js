const steps = ['one', 'two', 'three'];

// .forEach()

steps.forEach(function(step){
  console.log(step);
})

let myList = document.querySelector('#myList');

// .map()

const stepsHtml = steps.map(listTemplate);

function listTemplate(item){return `<li>${item}</li>`;}





