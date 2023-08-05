<template>
    <div id="projects"  class="min-h-[100px]"></div>
    <div class="flex justify-center text-[#08e67e] text-6xl mb-16 font-cocomat" v-motion-slide-visible-once-bottom>Projects</div>
    <div class="flex flex-col items-center">
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-12 px-8 font-cocomat">
            <button class="button" role="button" @mouseover="hoveredButton = 'button1'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/MajorMentor">
                    <div class="text-2xl text-[#08e67e]" v-if="hoveredButton != 'button1'">Major Mentor</div>
                    <div v-else class="text-black text-2xl">Major Mentor</div>
                    <div class="grid grid-cols-2">
                        <AnimatedText :text="'React'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">React</div>
                        <AnimatedText :text="'React'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">Astro</div>
                        <AnimatedText :text="'Node'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">Node</div>
                        <AnimatedText :text="'Tailwind'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">Tailwind</div>
                        <AnimatedText :text="'Django'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">Django</div>
                        <AnimatedText :text="'CockroachDB'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">CockroachDB</div>
                        <AnimatedText :text="'OpenAI API'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">OpenAI API</div>
                        <AnimatedText :text="'AWS'" v-if="hoveredButton != 'button1'" />
                        <div v-else class="text-black">AWS</div>
                    </div>
                </a>
            </button>
            <button class="button" role="button" @mouseover="hoveredButton = 'button2'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/Pepsi">
                    <div class="text-2xl">Pepsi Website Recreation</div>
                    <div class="grid grid-cols-2">
                        <AnimatedText :text="'React'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">React</div>
                        <AnimatedText :text="'Tailwind'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">Tailwind</div>
                        <AnimatedText :text="'Vite'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">Vite</div>
                        <AnimatedText :text="'PostgreSQL'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">PostgreSQL</div>
                        <AnimatedText :text="'Express'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">Express</div>
                        <AnimatedText :text="'Node'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">Node</div>
                        <AnimatedText :text="'JavaScript'" v-if="hoveredButton != 'button2'" />
                        <div v-else class="text-black">JavaScript</div>
                    </div>
                </a>
            </button>
            <button class="button" role="button" @mouseover="hoveredButton = 'button3'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/PL-O-Compiler">
                    <div class="text-2xl">PL/O Compiler</div>
                    <div class="flex justify-center">
                        <AnimatedText :text="'C'" v-if="hoveredButton != 'button3'" />
                        <div v-else class="text-black">C</div>
                        <!-- Repeat this pattern for all technology tags -->
                    </div>
                </a>
            </button>
            <button class="button" role="button" @mouseover="hoveredButton = 'button4'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/Starbucks">
                <div class="text-2xl">Starbucks Home Page</div>
                    <div class="grid grid-cols-2">
                        <AnimatedText :text="'HTML'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">HTML</div>
                        <AnimatedText :text="'CSS'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">CSS</div>
                        <!-- Repeat this pattern for all technology tags -->
                    </div>
                </a>
            </button>
            <button class="button" role="button" @mouseover="hoveredButton = 'button5'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/Korobot">
                    <div class="text-2xl">World RPG Discord Bot</div>
                    <div class="grid grid-cols-2">
                        <AnimatedText :text="'Discord.js'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">Discord.js</div>
                        <AnimatedText :text="'Javascript'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">Javascript</div>
                        <AnimatedText :text="'HTML'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">Prisma</div>
                        <AnimatedText :text="'mySQL'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">mySQL</div>
                        <AnimatedText :text="'HTML'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">HTML</div>
                        <AnimatedText :text="'Cron'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">Cron</div>
                        <AnimatedText :text="'GraphQL'" v-if="hoveredButton != 'button5'" />
                        <div v-else class="text-black">GraphQL</div>
                        <!-- Repeat this pattern for all technology tags -->
                    </div>
                </a>
            </button>
            <button class="button" role="button" @mouseover="hoveredButton = 'button4'" @mouseleave="hoveredButton = ''" v-motion-slide-visible-once-bottom>
                <a href="https://github.com/Bombachicky/Portfolio">
                <div class="text-2xl">Portfolio Website</div>
                    <div class="grid grid-cols-2">
                        <AnimatedText :text="'Nuxt'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">Nuxt</div>
                        <AnimatedText :text="'Vue'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">Vue</div>
                        <AnimatedText :text="'Tailwind'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">Tailwind</div>
                        <AnimatedText :text="'Three.js WebGL'" v-if="hoveredButton != 'button4'" />
                        <div v-else class="text-black">Three.js WebGL</div>
                        <!-- Repeat this pattern for all technology tags -->
                    </div>
                </a>
            </button>
            <!-- Continue the same for all buttons -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hoveredButton: '',
            };
        },
    };
</script>





<style>
/* CSS */
.button {
    padding: 0.8em 1.8em;
    border: 2px solid #08e67e;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: #08e67e;
}

button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #08e67e;
    transition: .5s ease;
    display: block;
    z-index: -1;
}

button:hover::before {
    width: 150%;
}

button:hover {
    color: #111;
    font-family: 'CocoMatReg';
}

.button-59:active {
    border-color: #08e67e;
    color: #08e67e;
    fill: #08e67e;
}

@media (min-width: 768px) {
    .button-59 {
    min-width: 170px;
    }
}
</style>