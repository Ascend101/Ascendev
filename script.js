import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer({canvas:canvastropcool});
renderer.setSize(window.innerWidth, window.innerHeight);

var renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

camera.translateZ(1.2);
var geometry = new THREE.BoxGeometry(1.0, 1.0);
var material = new THREE.MeshBasicMaterial({
    color:"#a0f0f0",
});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

renderer.render(scene, camera, renderTarget);
renderer.render(scene, camera);

//resize window
window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//refresh loop
const clock = new THREE.Clock();
function animate() {
    let delta = clock.getDelta();
    mesh.rotateX(delta*-0.5);
	renderer.render( scene, camera );
    requestAnimationFrame( animate );
}
animate();