const app = document.getElementById('typewriter')
;

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});

typewriter
  .typeString('Contamos con 2 sucursales cerca de ti.')
  .pauseFor(200)
  .start();