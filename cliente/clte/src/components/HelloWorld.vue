<template>


  <div class="hello">
    <h1>{{ msg }}</h1>
    <br /><br /><br /><br />

      <marquee  WIDTH=85% height=380 behavior="alternate" scrolldelay="1" scrollamount="10" direction="left"  onmouseout="this.start()" onmouseover="this.stop()">

        <img    alt="Iliada" src="../assets/Iliada-Homero-md.png" />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="A_buen_fin_no_hay_mal_principio"  src="../assets/A_buen_fin_no_hay_mal_principio-Shakespeare_William-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="Acerca_de_la_generacion_y_la_corrupcion"  src="../assets/Acerca_de_la_generacion_y_la_corrupcion-Aristoteles-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="Aguila_de_Blason"  src="../assets/Aguila_de_Blason-Ramon_Maria_del_Valle-Inclan-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="Barba_azul"  src="../assets/Barba_azul-Charles_Perrault-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="Cantar_de_mio_Cid-Anonimo-md"  src="../assets/Cantar_de_mio_Cid-Anonimo-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img  alt="Carcel_de_Amor"  src="../assets/Carcel_de_Amor-Diego_de_San_Pedro-md.png"/>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;             
            
      </marquee>
     &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;


<hr>
  <div class="container text-center text-md-left">  
        <h2 class="font-weight-bold text-uppercase mt-3 mb-4">About us</h2>    
<hr> 
<div class="row">
      <div class="col-md-1 mx-auto">
        <img  height=350 alt="Back-end developer"  src="../assets/equipo/Gloria.jpg"/>
      </div>
      <div class="col-md-3 mx-auto">
        <h3 class="font-weight-bold text-uppercase mt-3 mb-4">Gloria Martinez</h3>   
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Back-end Developer</h5>             
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/gloria-mart%C3%ADnez-aguirre-28292954" role="button"
            >><img  WIDTH="90" alt="linkedin"  src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png"/>
          </a>     
          <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/MartinezAGloria" role="button"
            >><img  WIDTH="90" alt="heroku"  src="https://marketing4ecommerce.net/wp-content/uploads/2018/06/GitHub-logo-2-imagen.jpg"/>
          </a>  
      </div>
      <div class="col-md-1 mx-auto">
        <img  height=350 alt="Back-end developer"  src="../assets/equipo/Fer (2).jpg"/>
      </div>
      <div class="col-md-3 mx-auto">
        <h3 class="font-weight-bold text-uppercase mt-3 mb-4">Fernanda Uribe</h3>   
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Front-end Developer</h5>  
              
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/maria-fernanda-uribe-hernandez-2b6943191/" role="button"
            >><img  WIDTH="90" alt="linkedin"  src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png"/>
          </a>     
          <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/IngMariaUribe" role="button"
            >><img  WIDTH="90" alt="heroku"  src="https://marketing4ecommerce.net/wp-content/uploads/2018/06/GitHub-logo-2-imagen.jpg"/>
          </a>  
      </div>
    </div>

  </div>

  <hr>

<footer class="bg-dark text-center text-white">
  <div class="container p-4">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="https://drive.google.com/drive/folders/1RCjvlP1fbaDVUeP-iVA61GwYXp13PR30" role="button"
        ><img  WIDTH="70" alt="drive"  src="../assets/logos/drive.png"/>
      ></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button"
        ><img  WIDTH="70" alt="github"  src="../assets/logos/Git3.jpg"/>
      </a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.heroku.com/" role="button"
        >><img  WIDTH="90" alt="heroku"  src="../assets/logos/he.png"/>
      </a>
      </section>

    <section class="mb-4">
      <p>
        LEEMAS  es una pagina que busca conectar personas que compartan el gusto por la lectura y deseen
        interactuar con personas para intercambiar, obsequiar o comprar libros. <br />Registrate y encuentra 
        tu siguiente lectura.
      </p>
    </section>
    
  </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:  LEEMAS 
  </div>
</footer>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
</style>
