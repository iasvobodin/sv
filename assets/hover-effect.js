import * as THREE from "three";
export default function(opts) {
  let vertex = `
uniform float time;
varying vec2 vUv;
void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

  let fragment = `
varying vec2 vUv;
uniform sampler2D texture1;
uniform float time;
uniform float time1;
uniform float time2;
void main() {
  vec2 uv1 = vUv;
	uv1.y += sin(uv1.y * 5.005 + time * 0.8) * 0.0022;
	uv1.x += sin(uv1.x * 10.005 + time * 0.6) * 0.0032;
	vec4 rgba1 = texture2D(texture1,uv1);
	gl_FragColor = rgba1;
}
`;
  let parent = opts.parent;
  let image = opts.image;

  let scene = new THREE.Scene();
  let camera = new THREE.OrthographicCamera(
    parent.offsetWidth / -2,
    parent.offsetWidth / 2,
    parent.offsetHeight / 2,
    parent.offsetHeight / -2,
    1,
    1000
  );

  camera.position.z = 1;

  let renderer = new THREE.WebGLRenderer();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0.0);
  renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  parent.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();
  loader.crossOrigin = "";

  let texture1 = loader.load(image);
  texture1.minFilter = THREE.LinearFilter;

  let mat = new THREE.ShaderMaterial({
    uniforms: {
      time: { type: "f", value: 0 },
      texture1: { type: "t", value: texture1 }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  });

  let geometry = new THREE.PlaneBufferGeometry(
    parent.offsetWidth,
    parent.offsetHeight,
    1
  );
  let object = new THREE.Mesh(geometry, mat);
  scene.add(object);
  let time = 0;
  function animate() {
    time = time + 0.04;
    mat.uniforms.time.value = time;

    requestAnimationFrame(animate);
    render();
  }

  function render() {
    let c = renderer.domElement;
    c.style.position = "relative";
    c.style.objectFit = "cover";
    c.style.width = "100%";
    c.style.height = "auto";
    c.style.top = "50%";
    c.style.left = "50%";
    c.style.webkitTransform = "translate( -50%, -50% )";
    c.style.transform = "translate( -50%, -50% )";
    renderer.render(scene, camera);
  }

  animate();

  // window.addEventListener("resize", function(e) {});
}
