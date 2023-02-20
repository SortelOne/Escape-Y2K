const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector('h1').onmouseover = event => {
  let iteration = 0;
  let word = event.target.innerText;
  
  const interval = setInterval(() => {
    event.target.innerText = word.split("")
    .map((letter, index) => {
      if(index < iteration){
        return event.target.dataset.word[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");
    
    if(iteration > word.length){
      clearInterval(interval);
    }
    
    iteration += 1;
  }, 30); 
}