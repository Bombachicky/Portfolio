<template>
    <div class="relative bg-no-repeat bg-cover min-h-screen min-w-screen flex flex-col justify-between bg-black">
        <Navbar class="Navbar"/>
        <Mobilebar class="mobilebar" />
        <Introduction id="about" />
        <div class="h-[250px]"></div>
        <Projects />
        <Contact id="contact" />
    </div>
</template>

<script>

</script>

<style>

    /* Initially hide the Mobilebar */
    .mobilebar {
        display: none;
    }

    /* Hide Navbar and display the Mobilebar on screen sizes less than 640px */
    @media (max-width: 640px) {
        .Navbar {
            display: none;
        }

        .mobilebar {
            display: block;
        }
    }
</style>


