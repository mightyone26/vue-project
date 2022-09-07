<template>
   <div class="carContainer">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    
          <div class="carousel-inner">
            
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="@/assets/imagesMainCarousal/pexels-alexander-bobrov-1036864.jpg" class="d-block w-100 "  alt="Kayak on calm ocean">
              </div>
              
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/imagesMainCarousal/pexels-anastasia-yudin-4023035.jpg" class="d-block w-100 "  alt="JetSki on ocean">
              </div>
              
              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/imagesMainCarousal/pexels-asad-photo-maldives-3320529.jpg" class="d-block w-100 "  alt="Arial photo of Island Resort">
              </div>

              <div class="carousel-item" data-bs-interval="3000">
                <img src="@/assets/imagesMainCarousal/pexels-vincent-gerbouin-1172518.jpg" class="d-block w-100 "  alt="Cabins over ocean">
              </div>

          </div>      
        
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
    </div>
</div>
</template>

<script>

</script>

<style>
.carContainer{
  display: flex;  
  justify-content: center;
}
</style>