<template>
    <div
    id="contact"
    class="flex flex-col h-screen justify-center drop-shadow-glow text-[#08e67e] font-cocomat" v-motion-slide-visible-once-bottom>
    <div class="text-4xl md:text-5xl font-bold p-1 text-center">
    Contact me
        </div>
        <div class="flex flex-col px-8 mt-10 items-center">
            <div class="max-w-lg text-lg">
                <p>
                    If you have any questions or would like to get in touch, please contact me through email. I will be happy to respond as soon as I am available.
                </p>
            </div>
            <a
                href="mailto:kristianjeanmichel@gmail.com"
                class="mt-10 items-center duration-75 neonText" v-motion-slide-visible-once-bottom>
                Contact
            </a>
            </div>
    </div>
</template>

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
</style>

