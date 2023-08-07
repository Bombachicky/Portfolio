<template>
    <div class="relative bg-no-repeat bg-cover min-h-screen min-w-screen flex flex-col justify-between bg-black">
        <Cursor class="cursor"/>
        <Navbar class="Navbar"/>
        <div id="divider1" class="h-[150px]"></div>
        <Mobilebar />
        <Introduction id="about" />
        <div class="h-[100px]"></div>
        <Projects />
        <Contact id="contact" />
    </div>
</template>

<script>

</script>

<style>

html {
    scroll-behavior: smooth;
}

/* Hide Navbar and display the Mobilebar on screen sizes less than 640px */
@media (max-width: 640px) {
    .Navbar {
        display: none;
    }

    #divider1{
        display:none;
    }
}

@media (max-width: 768px) {
    .cursor{
        display:none
    }
}

@media screen and (min-width: 1024px) {
    .cursor{
        display:block;
    }
    html,
body {
    cursor: none;
}
}
</style>


