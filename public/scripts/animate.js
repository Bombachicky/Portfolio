import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export default function setup3DScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let object;
    let controls;
    let objToRender = 'gem';
    let devToolsOpened = false;
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ff00, // green color
        specular: 0xffffff, // white specular highlights
        shininess: 100, // higher for smaller and sharper specular highlights
        side: THREE.DoubleSide,
        emissive: 0x00ff00 // the same green color for emission
    });
    
    const loader = new GLTFLoader();
    loader.load(
        '/models/gem.glb',
        function (gltf) {
            object = gltf.scene;
            object.scale.set(4.5, 4.5, 4.5); // Increase scale by 2
            // Traverse the object and apply the material
            object.traverse((node) => {
                if (node instanceof THREE.Mesh) {
                    node.material = material;
                }
            });
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("container3D");
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    container.appendChild(renderer.domElement);
    camera.position.z = objToRender === "scene" ? 10 : 500;

    const topLight = new THREE.DirectionalLight(0xffffff, 5);
    topLight.position.set(20, 20, 20);
    scene.add(topLight);
    const topLight2 = new THREE.DirectionalLight(0xffffff, 5);
    topLight2.position.set(-20, -5, -20);
    scene.add(topLight2);
    const topLight3 = new THREE.DirectionalLight(0xffffff, 5);
    topLight3.position.set(-20, -5, 20);
    scene.add(topLight3);
    const topLight4 = new THREE.DirectionalLight(0xffffff, 5);
    topLight4.position.set(0, -10, 10);
    scene.add(topLight4);
    const topLight5 = new THREE.DirectionalLight(0xffffff, 5);
    topLight5.position.set(5, 0, -2);
    scene.add(topLight5);

    const ambientLight = new THREE.AmbientLight(0x333333,10);
    scene.add(ambientLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true; // Enables automatic rotation
    controls.autoRotateSpeed = 10; // Speed of rotation
    controls.enableZoom = false; // Disables zooming

    // set up render pass
    const renderPass = new RenderPass(scene, camera);

    // create bloom pass
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
    );
    bloomPass.threshold = 0; // controls how bright something needs to be to create bloom
    bloomPass.strength = .1; // controls strength of bloom
    bloomPass.radius = 1.5; // controls size of bloom

    // set up composer
    const composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        // render using the effect composer instead of the renderer
        composer.render();
    }
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

         // Threshold to identify a significant change in width
    // This value can be adjusted based on your needs
    const threshold = 150;
    const widthDifference = window.outerWidth - window.innerWidth;

    if (widthDifference > threshold && !devToolsOpened) {
        console.log('DevTools opened!');
        devToolsOpened = true;

        // Trigger your hot refresh logic here

    } else if (widthDifference < threshold && devToolsOpened) {
        console.log('DevTools closed!');
        devToolsOpened = false;

        // Trigger your hot refresh logic here
        location.reload();
    }
    });

    animate();
}

