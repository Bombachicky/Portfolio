<template>
    <div class="flex justify-between items-center z-[5000]" id="mobilebar" :style="{top: navbarPosition}">
        <!-- Left Side of Navbar -->
        <div class="logo neonText mx-8 transition-all duration-200 text-2xl">
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <!-- Hexagon -->
                <polygon class="hexagon" points="50 10, 90 30, 90 70, 50 90, 10 70, 10 30"/>
                <!-- Letter K -->
                <path class="hexagon" d="M 30 20 L 30 80 M 30 50 L 70 20 M 30 50 L 70 80" stroke="green" stroke-width="2" fill="none"/>
            </svg>
        </div>
        <!-- Right Side of Navbar -->
        <label class="hamburger-menu pr-8 z-[5000]" for="menuToggle" >
            <input type="checkbox" id="menuToggle">
        </label>
        <aside class="sidebar offscreen font-cocomatreg">
            <nav class="flex flex-col gap-14 items-center">
                <a class="cursor-pointer z-[5000]" href="#about" >About</a>
                <a class="cursor-pointer z-[5000]" href="#projects" >Projects</a>
                <a class="cursor-pointer z-[5000]" href="#contact" >Contact</a>
                <a class="cursor-pointer z-[5000]" href="Kristian_Michel_Resume.pdf">Resume</a>
                <a class="cursor-pointer z-[5000]" href="https://github.com/Bombachicky">
                    <svg
                        class="fill-black w-6 h-6  transition-all duration-200 relative top-5 hover:brightness-50 z-[5000]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a class="cursor-pointer z-[5000]" href="https://www.linkedin.com/in/kristian-michel-54623a24a/">
                    <svg
                        class="fill-black w-6 h-6  transition-all duration-200 relative top-5 hover:brightness-50"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
            </nav>
        </aside>
    </div>
    <div v-show="isSidebarVisible" class="backdrop" @click="hideSidebar"></div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
    setup() {
        const navbarPosition = ref('0px');
        let prevScrollpos;
        const isSidebarVisible = ref(false);

        const menuToggleWatcher = () => {
            const menuToggle = document.getElementById('menuToggle');
            if (menuToggle) {
                isSidebarVisible.value = menuToggle.checked;
            }
        }
        
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                navbarPosition.value = "0px";
            } else {
                navbarPosition.value = "-100px";
                hideSidebar();  // This line hides the sidebar if you scroll down.
            }
            prevScrollpos = currentScrollPos;
        }

        onMounted(() => {
            if (typeof window !== 'undefined') {
                prevScrollpos = window.scrollY;
                window.addEventListener("scroll", handleScroll);
            }

             // Initialize the watcher
            menuToggleWatcher();
            
            // Watch for changes
            const menuToggle = document.getElementById('menuToggle');
            menuToggle && menuToggle.addEventListener('change', menuToggleWatcher);
        });

        onUnmounted(() => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", handleScroll);
            }

            const menuToggle = document.getElementById('menuToggle');
            menuToggle && menuToggle.removeEventListener('change', menuToggleWatcher);
        });

        const hideSidebar = () => {
            const menuToggle = document.getElementById('menuToggle');
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false;
                isSidebarVisible.value = false;
                // Delay navigation by a short duration to give time for the sidebar to hide
            }
        };

        const navigateAndHideSidebar = (event) => {
            hideSidebar();

            // Delay navigation by a short duration to give time for the sidebar to hide
            setTimeout(() => {
                window.location.href = event.target.getAttribute('href');
            }, 300);
        };

        watch(isSidebarVisible, (newVal) => {
        const backdrop = document.querySelector('.backdrop');
        if (backdrop) {
            backdrop.style.display = newVal ? 'block' : 'none';
        }
    });

        return {
            navbarPosition,
            isSidebarVisible
        };

    }

}
</script>

<style>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    :root {
        --bar-width: 60px;
        --bar-height: 8px;
        --hamburger-gap: 6px;
        --foreground: #27d617;
        --background: black;
        --hamburger-margin: 8px;
        --animation-timing: 200ms ease-in-out;
        --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
    }

    .hamburger-menu {
        --x-width: calc(var(--hamburger-height) * 1.41421356237);
        display: flex;
        flex-direction: column;
        gap: var(--hamburger-gap);
        width: max-content;
        top: var(--hamburger-margin);
        left: var(--hamburger-margin);
        z-index: 2;
        cursor: pointer;
    }

    .hamburger-menu:has(input:checked) {
        --foreground: black;
        --background: #333;
    }

    .hamburger-menu:has(input:focus-visible)::before,
    .hamburger-menu:has(input:focus-visible)::after,
    .hamburger-menu input:focus-visible {
        border: 1px solid var(--background);
        box-shadow: 0 0 0 1px var(--foreground);
    }

    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input {
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: var(--foreground);
        border-radius: 9999px;
        transform-origin: left center;
        transition: opacity var(--animation-timing), width var(--animation-timing),
            rotate var(--animation-timing), translate var(--animation-timing),
            background-color var(--animation-timing);
    }

    .hamburger-menu input {
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu:has(input:checked)::before {
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / -2);
    }

    .hamburger-menu:has(input:checked)::after {
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / 2);
    }

    .hamburger-menu input:checked {
    opacity: 0;
    width: 0;
    }

    .sidebar {
        transition: transform var(--animation-timing);
        transform: translateX(100%); /* starts off the screen to the right */
        padding: 0.5rem 5rem;
        padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 5rem);
        background-color: var(--foreground);
        color: var(--background);
        max-width: 3000px;
        min-height:100%;
        position: fixed; /* makes it stick to the viewport */
        top: 0;
        right: 0; /* places it on the right side of the screen */
        z-index: 1;
        background-color: #27d617;
        opacity: 1;
    }

    .hamburger-menu:has(input:checked) + .sidebar {
        transform: translateX(0); /* slides it into view */
    }


    #mobilebar {
        display: none;
    }

    @media (max-width: 640px) {
        #mobilebar {
            display: flex;
            position: sticky; /* Make it stick/fixed */
            top: 0; /* Stay on top */
            transition: top 0.3s; /* Transition effect when sliding down (and up) */
        }
    }

    @media (min-width: 641px) {
        .mobilebar {
            display: none;
        }
    }

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0; /* Make sure it's below the sidebar but above everything else */
        display: none; /* By default, it should be hidden */
    }
</style>