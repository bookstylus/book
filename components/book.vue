<template>
  <flipbook
    ref="flipbook"
    v-slot="flipbook"
    class="flipbook book"
    :pages="pages"
    :start-page="startPage"
    :style="{ width: width, height: height }"
  >
    <div class="flipbook-head">
      <button ref="flipbookLeft" @click="flipbook.flipLeft"></button>
      <button ref="flipbookRight" @click="flipbook.flipRight"></button>
    </div>
  </flipbook>
</template>

<script>
export default {
  name: 'Flipbook',
  data() {
    return {
      startPage: 0,
      width: '100%',
      height: '100%',
      pages: [
        'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      pagesHiRes: [
        'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.flipbook {
  width: 90vw;
  height: 90vh;
}

.previous_button {
  border-radius: 10px;
  border: none;
  color: #42b983;
  background: #000;
  text-align: center;
  font-size: 28px;
  padding: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.previous_button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.previous_button span:after {
  content: '\00ab';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -40px;
  transition: 0.5s;
}

.previous_button:hover span {
  padding-left: 25px;
}

.previous_button:hover span:after {
  opacity: 1;
  left: 0;
}
.next_button {
  border-radius: 10px;
  border: none;
  color: #e20943;
  background: #000;
  text-align: center;
  font-size: 28px;
  padding: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.next_button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.next_button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.next_button:hover span {
  padding-right: 25px;
}

.next_button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
