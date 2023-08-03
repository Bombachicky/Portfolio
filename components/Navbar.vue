<template>
    <div class="navbar flex justify-between">
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
        <div class="flex font-cocomat">
            <div 
                v-for="link in links"
                :key="link"
                class="neonText mx-8 cursor-pointer transition-all duration-200 mt-5"
            >
                {{ link }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: ['Home', 'About', 'Contact', 'Projects', 'Resume']
        };
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
</style>
