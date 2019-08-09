<template>
<div id="app">

  <div :class="$style.container_navbar">
    <b-button class="segmentation">сегментация</b-button>
    hello
  </div>

  <div :class="$style.container_left">
    <button @click="show = false" :aria-expanded="show ? 'true' : 'false' ">
      Камера
    </button>
    <button @click="show = true" :aria-expanded="show ? 'true' : 'false' ">
      Импорт
    </button>
    <template v-if="show == true">
      <div>
        <p>
          <file-select v-model="file"></file-select>
        </p>
        <p v-if="file">
          <img :src="file">
          {{file.name}}</p>
      </div>
    </template>
    <template v-if="show == false">
      <p>Hi, good boy</p>
    </template>
  </div>

  <div :class="$style.container_main">
    <form method="post" enctype="multipart/form-data" action="/upload">
      <input type="file" name="file">
      <input type="submit" value="Submit">
    </form>
  </div>

</div>
</template>

<script>
import FileSelect from './FileSelect.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    FileSelect
  },
  data() {
    return {
      file: null,
      show: true,
    }
  },
  methods: {
    modificateImg: function(img) {
      var context = this;
    }
  },
  computed: {
    ...mapState({
      items: state => state.main.items,
    }),
  },
  mounted: () => {
    console.log('Mounted');
  },

  serverPrefetch() {
    console.log('Run only on server');
  }
}
</script>

<style module>

/*#app {
  text-align: center;
  color: #2c3e50;
  background-color: #383838;
}*/
body, html{
	background-color: #121212;
}

.container_navbar {
  background-color: #383838;
  width: 99.06%;
  margin-left: 0.47%;
  margin-right: 0.47%;
  margin-top: 0.47%;
  margin-bottom: 0.88%;
  position: absolute;
  height: 8.20%;
  color: #FFFFFF;
  border-radius: 3px;
}

.container_left {
	background-color: #383838;
	color: #FFFFFF;
	left: 0.47%;
	bottom: 0.88%;
	position: absolute;
	width: 18.48%;
	height: 89.16%;
	margin-top: 0.88%;
	border-radius: 3px;
}

.container_main{
	position: absolute;
	bottom: 4.69%;
	right: 0.47%;
	width: 80.10%;
	height: 85.35%;
	background-color: #1e1e1e;
}

.segmentation{
	right: 3px;
	background-color: #bb86fc;
}

.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}
</style>
