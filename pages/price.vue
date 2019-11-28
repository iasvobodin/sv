<template>
  <div>
    <div class="slidecontainer">
      <input type="range" :min="minHour" :max="maxHour" step="1" v-model="value" class="slider">
      <p>Количество часов {{value}}</p>
      <p>Стоимость {{total}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minHour: 1,
      maxHour: 12,
      value: 3,
      priceHour: 2500
    };
  },
  computed: {
    total() {
      return this.value * this.priceHour;
    }
  },
  methods: {}
};
</script>


<style scoped>
.slidecontainer {
  position: absolute;
  left: 20vw;
  top: 10vh;
  width: 50vw;
}
p {
  color: #ffffff;
}
input[type="range"].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 4px 0;
}
input[type="range"].slider:focus {
  outline: none;
}
input[type="range"].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0.4px 0.4px 0.9px #a8a8a8, 0px 0px 0.4px #b5b5b5;
  background: #ffffff;
  border-radius: 17.1px;
  border: 0.5px solid #ffffff;
}
input[type="range"].slider::-webkit-slider-thumb {
  box-shadow: 0.9px 0.9px 2.7px rgba(0, 0, 62, 0.67),
    0px 0px 0.9px rgba(0, 0, 88, 0.67);
  border: 0.5px solid #000000;
  height: 8px;
  width: 29px;
  border-radius: 17px;
  background: #03a9f4;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4.5px;
}
input[type="range"].slider:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
input[type="range"].slider::-moz-range-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0.4px 0.4px 0.9px #a8a8a8, 0px 0px 0.4px #b5b5b5;
  background: #ffffff;
  border-radius: 17.1px;
  border: 0.5px solid #ffffff;
}
input[type="range"].slider::-moz-range-thumb {
  box-shadow: 0.9px 0.9px 2.7px rgba(0, 0, 62, 0.67),
    0px 0px 0.9px rgba(0, 0, 88, 0.67);
  border: 0.5px solid #000000;
  height: 8px;
  width: 29px;
  border-radius: 17px;
  background: #03a9f4;
  cursor: pointer;
}
input[type="range"].slider::-ms-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"].slider::-ms-fill-lower {
  background: #878787;
  border: 0.5px solid #ffffff;
  border-radius: 34.2px;
  box-shadow: 0.4px 0.4px 0.9px #a8a8a8, 0px 0px 0.4px #b5b5b5;
}
input[type="range"].slider::-ms-fill-upper {
  background: #ffffff;
  border: 0.5px solid #ffffff;
  border-radius: 34.2px;
  box-shadow: 0.4px 0.4px 0.9px #a8a8a8, 0px 0px 0.4px #b5b5b5;
}
input[type="range"].slider::-ms-thumb {
  box-shadow: 0.9px 0.9px 2.7px rgba(0, 0, 62, 0.67),
    0px 0px 0.9px rgba(0, 0, 88, 0.67);
  border: 0.5px solid #000000;
  height: 8px;
  width: 29px;
  border-radius: 17px;
  background: #03a9f4;
  cursor: pointer;
  height: 0px;
}
input[type="range"].slider:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type="range"].slider:focus::-ms-fill-upper {
  background: #ffffff;
}
</style>
