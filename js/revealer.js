const revealer = document.getElementById("revealer");

document.body.onpointermove = event => {
  const {clientX, clientY} = event;
  
  revealer.animate({
     left: `${clientX}px`,
     top: `${clientY}px`
  }, {duration: 300, fill: "forwards"});
};