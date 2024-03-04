const container3 = document.querySelector('.globo-container-2')
        for (var i  = 0; i<=15; i++){
            const globos3 = document.createElement('div')
            globos3.classList.add('globo-3');
            container.appendChild(globos3);


            
        }
       

        
        function animateGlobos3(){
            anime({
                targets: '.globo-3',
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
                complete: animateGlobos3,

            })
        }

        animateGlobos3()