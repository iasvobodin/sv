<template>
  <div ref="slider"></div>
</template>

<script>
import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  TextureLoader,
  LinearFilter,
  ShaderMaterial,
  PlaneBufferGeometry,
  Vector2,
  Mesh
} from "three";
import { vertex, fragment } from "~/assets/shader.js";

export default {
  props: {
    image: {
      required: true,
      type: String
    },
    speed: {
      required: false,
      type: Number
    }
  },
  data() {
    return {
      scene: new Scene(),
      renderer: new WebGLRenderer({ antialias: false, alpha: true }),
      mat: null,
      time: 0,
      texture: null
    };
  },
  computed: {
    slider() {
      return this.$refs.slider;
    },
    camera() {
      const camera = new OrthographicCamera(
        this.slider.offsetWidth / -2,
        this.slider.offsetWidth / 2,
        this.slider.offsetHeight / 2,
        this.slider.offsetHeight / -2,
        1,
        1000
      );
      camera.position.z = 1;
      return camera;
    }
  },
  methods: {
    initScene() {
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setClearColor(0xffffff, 0.0);
      this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
      this.$refs.slider.appendChild(this.renderer.domElement);
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },

    loadTextures() {
      const loader = new TextureLoader();
      loader.crossOrigin = "";
      this.texture = loader.load(this.image);
      this.texture.minFilter = LinearFilter;
    },
    initShaderMaterial() {
      this.mat = new ShaderMaterial({
        uniforms: {
          time: { type: "f", value: 0 },
          texture: { type: "t", value: this.texture }
          // imageResolution: {
          //   type: "v2",
          //   value: new Vector2(
          //     this.texture.image.naturalWidth,
          //     this.texture.image.naturalHeight
          //   )
          // }
        },
        vertexShader: vertex,
        fragmentShader: fragment
      });

      const geometry = new PlaneBufferGeometry(
        this.slider.offsetWidth,
        this.slider.offsetHeight,
        1
      );
      const object = new Mesh(geometry, this.mat);
      this.scene.add(object);
    },
    animate() {
      this.time += this.speed;
      this.mat.uniforms.time.value = this.time;
      requestAnimationFrame(this.animate);
      this.render();
    },
    init() {
      this.initScene();
      this.loadTextures();
      this.initShaderMaterial();
      this.animate();
    }
  },
  mounted() {
    this.init();
    // console.log(this.initShaderMaterial());

    // window.addEventListener("resize", this.onResize);
  }
};
</script>



