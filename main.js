const app = document.getElementById('typewriter')
;

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});

typewriter
  .typeString('!Delivery las 24 horas del dia!')
  .pauseFor(200)
  .start();