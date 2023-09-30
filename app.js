particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: ["edge", "polygon"],
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            opacity: 0,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble"
            },
            onClick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
                
            },
            remove: {
                particles_nb:2
            }
        }
    },
    retina_detect: true
});



$(document).ready(function(){
    AOS.init();

    $(".btn").click(function(){
      $("div").animate({opacity: '0'});
    });

    

  


        
    

});


$(loop);

    function loop(){
        // $('.scroll').removeAttr('style') //reset the initial position
        // $('.scroll').animate({'padding-top': '10px'});
        $('.scroll').animate({'padding-bottom': '10px'}, loop);
        console.log(document.getElementById.clientY)
    }
