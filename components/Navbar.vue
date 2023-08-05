<template>
    <div class="navbar flex justify-between" :class="{'hidden': isHidden}">
        <!-- Left Side of Navbar -->
        <div class="logo flex font-cocomat neonText mx-8 cursor-pointer transition-all duration-200 text-2xl">
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <!-- Hexagon -->
                <polygon class="hexagon" points="50 10, 90 30, 90 70, 50 90, 10 70, 10 30"/>
                <!-- Letter K -->
                <path class="hexagon" d="M 30 20 L 30 80 M 30 50 L 70 20 M 30 50 L 70 80" stroke="green" stroke-width="2" fill="none"/>
            </svg>
        </div>
        <!-- Right side of Navbar -->
        <div class="flex font-cocomat relative top-3">
            <a href="#about">
                <div class="neonText px-2 md:px-8 cursor-pointer transition-all duration-200 relative top-5">About</div>
            </a>
            <a href="#projects">
                <div class="neonText px-2 md:px-8 cursor-pointer transition-all duration-200 relative top-5">Project</div>
            </a>
            <a href="#contact">
                <div class="neonText px-2 md:px-8 cursor-pointer transition-all duration-200 relative top-5">Contact</div>
            </a>
            <a href="Kristian_Michel_Resume.pdf">
                <div class="neonText px-2 md:px-8 cursor-pointer transition-all duration-200 relative top-5">Resume</div>
            </a>
            <div class="px-6">
                <a href="https://github.com/Bombachicky">
                    <svg
                        class="fill-green-400 w-6 h-6 cursor-pointer transition-all duration-200 relative top-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
            </div>
            <div class="px-6">
                <a href="https://www.linkedin.com/in/kristian-michel-54623a24a/">
                    <svg
                        class="fill-green-400 w-6 h-6 cursor-pointer transition-all duration-200 relative top-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </div>
        </div>
            
    </div>

    
</template>

<script>
export default {
    data() {
        return {
            links: ['Home', 'About', 'Projects', 'Contact', 'Resume'],
            isHidden: false,
            lastScrollPosition: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const newScrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (newScrollPosition > this.lastScrollPosition){
                // Scrolled down
                this.isHidden = true;
            } else {
                // Scrolled up
                this.isHidden = false;
            }
            // Set the new scroll position for the next scroll event
            this.lastScrollPosition = newScrollPosition <= 0 ? 0 : newScrollPosition;
        }
    }
}
</script>

<style>
    .neonText {
        color: #08e67e;
    }
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

svg {
    animation: popup 1s ease-out;
}


.hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }
</style>
