<template>
    <div class="flex justify-between">
            <div class="text-[#08e67e] font-cocomat mx-auto py-auto sm:py-4 md:py-16 min-w-screen max-w-screen-lg sm:px-4 md:px-0 flex flex-col justify-center">
                <div class="text-xl md:text-2xl" v-motion-slide-visible-once-bottom>Hi, my name is</div>
                <div class="text-4xl md:text-6xl" v-motion-slide-visible-once-bottom>Kristian Michel</div>
                <div class="flex text-sm sm:text-base md:text-lg">
                    <div class="overflow-auto break-words anim-text-flow" v-motion-slide-visible-once-bottom>
                        I am currently a student at the University of Central Florida studying Computer Science. <br/>
                        My interests currently reside in video game and web development.<br/> 
                        However, I am passionate about providing innovative solutions to complex problems, <br/> so I am open to any opportunity to grow my skills in programming.
                    </div>
                </div>
                <div class="grid grid-cols-2 w-64 mt-2">
                    <div class="text-cyan-400" v-motion-slide-visible-once-bottom>▹Typescript</div>
                    <div class="text-indigo-400" v-motion-slide-visible-once-bottom>▹React</div>
                    <div class="text-yellow-400" v-motion-slide-visible-once-bottom>▹Node</div>
                    <div class="text-orange-400" v-motion-slide-visible-once-bottom>▹AWS</div>
                </div>
            </div>
            <div class="" id="container3D"></div>
    </div>
</template>

<script>
    import { onMounted } from 'vue';
    import setup3DScene from '~/scripts/animate'; // replace with your actual path

    export default {
    setup() {
        onMounted(() => {
        setup3DScene();
        });
    },
    };    
</script>

<style lang="scss">
    .neonText:hover {
        text-shadow:
        0 0 7px #53cf21,
        0 0 10px #10b523,
        0 0 21px #27d617,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
    }
    .glowText{
        color: #08e67e;
        text-shadow:
        0 0 7px #53cf21,
        0 0 10px #10b523,
        0 0 21px #27d617,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
    }
    .logo .hexagon {
        transition: all 0.3s ease;
        stroke: green;
        stroke-width: 2;
        fill: none;
    }

    .logo:hover .hexagon {
        stroke: #08e67e;
        stroke-width: 4;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    @keyframes popup {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }   
    #container3D {
        display: none;
        width:50%;
        height: 500px;
        animation: popup 1s ease-out;
    }

    /* Show the container on screens wider than 1024px */
@media screen and (min-width: 1024px) {
    #container3D {
        display: block; /* or whatever display value you want, like flex or grid */
    }
}

    .non-interactive {
        pointer-events: none;
        filter: brightness(50%);
    }

</style>


