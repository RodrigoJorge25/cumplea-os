const container = document.querySelector('.globo-container')
        for (var i  = 0; i<=70; i++){
            const globos = document.createElement('div')
            globos.classList.add('globo');
            container.appendChild(globos);


            
        }
       

        
        function animateGlobos(){
            anime({
                targets: '.globo',
                translateX: function(){
                    return anime.random(-700, 700);
                },
                translateY: function(){
                    return anime.random(-500, 500);
                },
                
                scale: function(){
                    return anime.random(1, 5);
                },
                easing: 'easeInOutBack',
                duration: 3000,
                delay: anime.stagger(10),
                complete: animateGlobos,

            })
        }

        animateGlobos()




        
     