    <template>
    <div>
        <div id="outer" :style="mergedOuterStyles"></div>
        <div id="inner" :style="mergedInnerStyles"></div>
    </div>
    </template>

<script>
    export default {
    props: {
        color: {
        type: String,
        default: '0, 255, 0'
        },
        outerAlpha: {
        type: Number,
        default: 0.4
        },
        innerSize: {
        type: Number,
        default: 8
        },
        outerSize: {
        type: Number,
        default: 8
        },
        outerScale: {
        type: Number,
        default: 5
        },
        innerScale: {
        type: Number,
        default: 0.7
        }
    },
    data() {
        return {
        coords: { x: 0, y: 0 },
        endCoords: { x: 0, y: 0 }, // new addition
        isVisible: true,
        isActive: false,
        isActiveClickable: false,
        innerStyles: {},
        outerStyles: {}
    };
    },
    computed: {
        styles() {
        return {
                cursorOuter: {
                position: 'fixed',
                borderRadius: '50%',
                pointerEvents: 'none',
                width: `${this.outerSize}px`,
                height: `${this.outerSize}px`,
                backgroundColor: `rgba(${this.color}, ${this.outerAlpha})`,
                transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
                top: `${this.coords.y}px`,
                left: `${this.coords.x}px`
            },
                cursorInner: {
                position: 'fixed',
                borderRadius: '50%',
                width: `${this.innerSize}px`,
                height: `${this.innerSize}px`,
                pointerEvents: 'none',
                backgroundColor: `rgba(${this.color}, 1)`,
                transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
                top: `${this.endCoords.y}px`,  // Changed this
                left: `${this.endCoords.x}px`  // Changed this
            }
            };
        },
        mergedInnerStyles() {
            return { ...this.styles.cursorInner, ...this.innerStyles };
        },
        mergedOuterStyles() {
            return { ...this.styles.cursorOuter, ...this.outerStyles };
        },
    },
    mounted() {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mouseenter', this.onMouseEnter);
        document.addEventListener('mouseleave', this.onMouseLeave);

        const clickables = document.querySelectorAll(
            'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
        );

        clickables.forEach((el) => {
        el.style.cursor = 'none';
        el.addEventListener('mouseover', this.onElementMouseOver);
        el.addEventListener('click', this.onElementClick);
        el.addEventListener('mousedown', this.onElementMouseDown);
        el.addEventListener('mouseup', this.onElementMouseUp);
        el.addEventListener('mouseout', this.onElementMouseOut);
        });
    },
    beforeDestroy() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mouseenter', this.onMouseEnter);
        document.removeEventListener('mouseleave', this.onMouseLeave);
    },
    methods: {
        onMouseMove(e) {
            this.coords.x = e.clientX;
            this.coords.y = e.clientY;
            this.endCoords.x = e.clientX;
            this.endCoords.y = e.clientY;

            this.outerStyles = {
                '--x': `${this.endCoords.x - this.coords.x}px`,
                '--y': `${this.endCoords.y - this.coords.y}px`
            };
        },
        onMouseDown() {
            this.isActive = true;
        },
        onMouseUp() {
            this.isActive = false;
        },
        onMouseEnter() {
            this.isVisible = true;
        },
        onMouseLeave() {
            this.isVisible = false;
        },
        onElementMouseOver() {
            this.isActive = true;
        },
        onElementClick() {
            this.isActive = true;
            this.isActiveClickable = false;
        },
        onElementMouseDown() {
            this.isActiveClickable = true;
        },
        onElementMouseUp() {
            this.isActive = true;
        },
        onElementMouseOut() {
            this.isActive = false;
            this.isActiveClickable = false;
        }
    }
    };
    </script>

    <style>
    /* Global styles */
    :root {
        --color-cursor: 0, 255, 0;
        --cursor-outline-shade: 0.3;
        --cursor-size: 10px;
        --cursor-outline-size: 12px;
    }

    #inner {
        background-color: rgba(var(--color-cursor), 1);
        box-shadow: 0 0 10px 5px rgba(0, 255, 0, 0.3);
        position: relative; 
    }

    #outer {
        background-color: rgba(var(--color-cursor), var(--cursor-outline-shade));
        box-shadow: 0 0 30px 7px rgba(0, 255, 0, 0.2);
    }

    #inner::after {
        content: "";
        position: absolute;
        top: calc(var(--y, 0) * 1px - 75px);  /* Centering for bigger glow */
        left: calc(var(--x, 0) * 1px - 75px);  /* Centering for bigger glow */
        width: 150px;  /* Increased size of glow */
        height: 150px;  /* Increased size of glow */
        background: radial-gradient(white, rgba(var(--color-cursor), 0) 90%);  /* Adjusted gradient stop */
        opacity: 0;
        transition: opacity 0.2s;
    }

    #inner:hover::after {
        opacity: 0.6;  /* Increased opacity for a brighter glow */
    }
</style>
