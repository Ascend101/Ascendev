import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer({canvas:canvatropcool});
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
const material = new THREE.PointsMaterial( { color: 0x888888 } );
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
function animate() {
  let delta = clock.getDelta();
  mesh.rotateX(delta*-0.5);
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}
animate();