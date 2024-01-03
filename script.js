import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer({canvas:canvatropcool, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

camera.translateZ(1.2);

const vertices = [];
for ( let i = 0; i < 10000; i ++ ) {
	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );
	vertices.push( x, y, z );
}
const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
const material = new THREE.PointsMaterial( { color: 0xFFFFFF } );
const points = new THREE.Points( geometry, material );
scene.add(points);

renderer.render(scene, camera);

//resize window
window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//refresh loop
const clock = new THREE.Clock();
let randX = Math.random()*2 - 1;
let randY = Math.random()*2 - 1;
let timer = 0.0;
let delta = 0.0;
function animate() {
  delta = clock.getDelta();
  timer += delta;
  if (timer > 10.0){
    randX = Math.random()*2 - 1;
    randY = Math.random()*2 - 1;
    timer = 0;
  }
  points.rotateY(delta * 0.01 * randX);
  points.rotateX(delta * 0.01 * randY);
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}
animate();