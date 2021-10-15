<template>
  <div class="home">
    <header>

  <!-- Background image -->
  <div   class="p-5 text-center bg-image"
          style="background-image: url('https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/SKLO7RBDFFC3TN37UJCLZNNOD4.jpg');
          height: 350px;"  
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h3 class="mb-5">Muchos libros son como la llave de camaras 
            desconocidas dentro del castillo de uno mismo</h3>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>
    <HelloWorld msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

