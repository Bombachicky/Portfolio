<template>
<div ref="textContainer" class="anim-text-flow"></div>
</template>

<script>
    export default {
        props: ['text'],
            mounted() {
            this.animateText(this.text);
        },
        methods: {
            animateText(text) {
            const textContainer = this.$refs.textContainer;
            textContainer.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = text[i];
                charSpan.style.animationDelay = `${(i - text.length) * 0.2}s`;
                textContainer.appendChild(charSpan);
        }
            }
        }
    }
</script>

<style lang="scss">
    $animationSteps: 20;
    $animationDuration: 2s;

    .anim-text-flow span {
        animation-name: anim-text-flow-keys;
        animation-duration: $animationDuration;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards;
    }

    @keyframes anim-text-flow-keys {
        @for $i from 0 through $animationSteps {
        #{percentage($i * (calc(1 / $animationSteps)))} {
            color: hsla(calc(365*($i/$animationSteps)), 60%, 60%, 1);
        }
        }
    }
</style>