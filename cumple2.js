const container2 = document.querySelector('.globo-container-2')
        for (var i  = 0; i<=15; i++){
            const globos2 = document.createElement('div')
            globos2.classList.add('globo-2');
            container.appendChild(globos2);


            
        }
       

        
        function animateGlobos2(){
            anime({
                targets: '.globo-2',
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
                complete: animateGlobos2,

            })
        }

        animateGlobos2()