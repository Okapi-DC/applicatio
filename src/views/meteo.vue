<template>
  <div class="background_03">
    <navbarapp></navbarapp>
    <headerapp></headerapp>
      <b-container class="">
          <div class="row box_01">
            <div class="col-md-6 text-center">
              <h2 class="font_dash_whith">Votre humeur du jour</h2>
              <div>
                <p><svg width="512" height="156" viewBox="0 0 512 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 142.5C512 149.956 505.956 156 498.5 156C491.045 156 485 149.956 485 142.5C485 135.045 491.045 129 498.5 129C505.956 129 512 135.045 512 142.5Z" fill="white"/>
                  <path d="M506.342 142.348C506.297 142.247 505.218 139.875 503 139.875C500.782 139.875 499.702 142.247 499.657 142.348C499.588 142.503 499.633 142.685 499.766 142.791C499.897 142.898 500.085 142.901 500.223 142.802C500.232 142.795 501.17 142.125 503 142.125C504.819 142.125 505.755 142.786 505.776 142.801C505.842 142.85 505.922 142.875 506 142.875C506.082 142.875 506.165 142.847 506.234 142.793C506.366 142.687 506.412 142.504 506.342 142.348ZM497.342 142.348C497.297 142.247 496.218 139.875 494 139.875C491.782 139.875 490.702 142.247 490.657 142.348C490.588 142.503 490.633 142.685 490.765 142.791C490.897 142.898 491.085 142.901 491.222 142.802C491.232 142.795 492.169 142.125 494 142.125C495.819 142.125 496.755 142.786 496.776 142.801C496.842 142.85 496.922 142.875 497 142.875C497.082 142.875 497.165 142.847 497.234 142.793C497.367 142.687 497.411 142.504 497.342 142.348ZM498.5 145.5C495.782 145.5 493.979 145.183 491.75 144.75C491.24 144.652 490.25 144.75 490.25 146.25C490.25 149.25 493.696 153 498.5 153C503.303 153 506.75 149.25 506.75 146.25C506.75 144.75 505.759 144.651 505.25 144.75C503.02 145.183 501.217 145.5 498.5 145.5Z" fill="#5ECFC4"/>
                  <path d="M491.75 146.248C491.75 146.248 494 146.998 498.5 146.998C503 146.998 505.25 146.248 505.25 146.248C505.25 146.248 503.75 149.248 498.5 149.248C493.25 149.248 491.75 146.248 491.75 146.248Z" fill="#5ECFC4"/>
                  <path d="M159 142.5C159 149.956 152.956 156 145.5 156C138.045 156 132 149.956 132 142.5C132 135.045 138.045 129 145.5 129C152.956 129 159 135.045 159 142.5Z" fill="#5ECFC4"/>
                  <path d="M153.343 142.348C153.298 142.247 152.219 139.875 150 139.875C147.782 139.875 146.702 142.247 146.657 142.348C146.588 142.503 146.633 142.685 146.766 142.791C146.897 142.898 147.086 142.901 147.224 142.802C147.233 142.795 148.17 142.125 150 142.125C151.819 142.125 152.755 142.786 152.776 142.801C152.842 142.85 152.922 142.875 153 142.875C153.083 142.875 153.166 142.847 153.234 142.793C153.367 142.687 153.413 142.504 153.343 142.348ZM144.343 142.348C144.298 142.247 143.219 139.875 141 139.875C138.782 139.875 137.702 142.247 137.657 142.348C137.588 142.503 137.633 142.685 137.765 142.791C137.897 142.898 138.085 142.901 138.223 142.802C138.232 142.795 139.169 142.125 141 142.125C142.819 142.125 143.755 142.786 143.776 142.801C143.842 142.85 143.922 142.875 144 142.875C144.082 142.875 144.166 142.847 144.234 142.793C144.368 142.687 144.412 142.504 144.343 142.348Z" fill="white"/>
                  <path d="M139 147C139 147 141.25 147.75 145.75 147.75C150.25 147.75 152.5 147 152.5 147C152.5 147 151 150 145.75 150C140.5 150 139 147 139 147Z" fill="white"/>
                  <path d="M288 119.5C288 132.479 277.479 143 264.5 143C251.523 143 241 132.479 241 119.5C241 106.523 251.523 96 264.5 96C277.479 96 288 106.523 288 119.5Z" fill="#5ECFC4"/>
                  <path d="M278.152 119.234C278.074 119.058 276.195 114.93 272.333 114.93C268.473 114.93 266.593 119.058 266.514 119.234C266.394 119.504 266.473 119.82 266.704 120.006C266.932 120.191 267.26 120.198 267.5 120.024C267.516 120.012 269.148 118.846 272.333 118.846C275.501 118.846 277.13 119.997 277.167 120.023C277.281 120.109 277.42 120.152 277.556 120.152C277.699 120.152 277.844 120.104 277.963 120.01C278.194 119.824 278.274 119.506 278.152 119.234ZM262.486 119.234C262.407 119.058 260.529 114.93 256.667 114.93C252.806 114.93 250.926 119.058 250.848 119.234C250.728 119.504 250.806 119.82 251.036 120.006C251.266 120.191 251.593 120.198 251.832 120.024C251.849 120.012 253.48 118.846 256.667 118.846C259.834 118.846 261.463 119.997 261.5 120.023C261.615 120.109 261.753 120.152 261.889 120.152C262.033 120.152 262.177 120.104 262.296 120.01C262.529 119.824 262.606 119.506 262.486 119.234Z" fill="white"/>
                  <path d="M253 127C253 127 256.833 129.25 264.5 129.25C272.167 129.25 276 127 276 127C276 127 273.444 136 264.5 136C255.556 136 253 127 253 127Z" fill="white"/>
                  <path d="M398 142.5C398 149.956 391.956 156 384.5 156C377.045 156 371 149.956 371 142.5C371 135.045 377.045 129 384.5 129C391.956 129 398 135.045 398 142.5Z" fill="white"/>
                  <path d="M392.343 142.348C392.298 142.247 391.219 139.875 389 139.875C386.782 139.875 385.702 142.247 385.657 142.348C385.588 142.503 385.633 142.685 385.766 142.791C385.897 142.898 386.086 142.901 386.224 142.802C386.233 142.795 387.17 142.125 389 142.125C390.819 142.125 391.755 142.786 391.776 142.801C391.842 142.85 391.922 142.875 392 142.875C392.083 142.875 392.166 142.847 392.234 142.793C392.367 142.687 392.413 142.504 392.343 142.348ZM383.343 142.348C383.298 142.247 382.219 139.875 380 139.875C377.782 139.875 376.702 142.247 376.657 142.348C376.588 142.503 376.633 142.685 376.765 142.791C376.897 142.898 377.085 142.901 377.223 142.802C377.232 142.795 378.169 142.125 380 142.125C381.819 142.125 382.755 142.786 382.776 142.801C382.842 142.85 382.922 142.875 383 142.875C383.082 142.875 383.166 142.847 383.234 142.793C383.368 142.687 383.412 142.504 383.343 142.348Z" fill="#5ECFC4"/>
                  <path d="M377 145C377 145 379.5 146.75 384.5 146.75C389.5 146.75 392 145 392 145C392 145 390.333 152 384.5 152C378.667 152 377 145 377 145Z" fill="#5ECFC4"/>
                  <path d="M46 142.5C46 149.956 39.9557 156 32.5 156C25.045 156 19 149.956 19 142.5C19 135.045 25.045 129 32.5 129C39.9557 129 46 135.045 46 142.5Z" fill="#5ECFC4"/>
                  <path d="M40.3428 142.348C40.2978 142.247 39.2185 139.875 37 139.875C34.7822 139.875 33.7022 142.247 33.6572 142.348C33.5882 142.503 33.6333 142.685 33.766 142.791C33.8973 142.898 34.0855 142.901 34.2235 142.802C34.2325 142.795 35.17 142.125 37 142.125C38.8195 142.125 39.7555 142.786 39.7765 142.801C39.8425 142.85 39.922 142.875 40 142.875C40.0825 142.875 40.1658 142.847 40.234 142.793C40.3668 142.687 40.4125 142.504 40.3428 142.348ZM31.3428 142.348C31.2978 142.247 30.2185 139.875 28 139.875C25.7822 139.875 24.7023 142.247 24.6573 142.348C24.5883 142.503 24.6332 142.685 24.7652 142.791C24.8972 142.898 25.0855 142.901 25.2227 142.802C25.2325 142.795 26.1693 142.125 28 142.125C29.8195 142.125 30.7555 142.786 30.7765 142.801C30.8425 142.85 30.922 142.875 31 142.875C31.0825 142.875 31.1658 142.847 31.234 142.793C31.3675 142.687 31.4118 142.504 31.3428 142.348Z" fill="white"/>
                  <path d="M39.5 150C39.5 150 37.25 149.25 32.75 149.25C28.25 149.25 26 150 26 150C26 150 27.5 147 32.75 147C38 147 39.5 150 39.5 150Z" fill="white"/>
                  <path d="M465.5 0L469.204 11.4012H481.192L471.494 18.4476L475.198 29.8488L465.5 22.8024L455.802 29.8488L459.506 18.4476L449.808 11.4012H461.796L465.5 0Z" fill="#5ECFC4"/>
                  <path d="M151 27L153.021 33.2188H159.56L154.269 37.0623L156.29 43.2812L151 39.4377L145.71 43.2812L147.731 37.0623L142.44 33.2188H148.979L151 27Z" fill="#5ECFC4"/>
                  <path d="M123.5 11L124.51 14.1094H127.78L125.135 16.0312L126.145 19.1406L123.5 17.2188L120.855 19.1406L121.865 16.0312L119.22 14.1094H122.49L123.5 11Z" fill="#5ECFC4"/>
                  <path d="M16 84L19.5922 95.0557H31.2169L21.8123 101.889L25.4046 112.944L16 106.111L6.59544 112.944L10.1877 101.889L0.783095 95.0557H12.4078L16 84Z" fill="#5ECFC4"/>
                </svg>
                </p>
              </div>
              <input class="custom-slider" type="range" min="0" max="4" v-model.number="sides"/>
              <button class="btn_03">Valider</button>
              <div>
                <svg width="561" height="76" viewBox="0 0 561 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 63L7.95934 67.4914H12.6819L8.86126 70.2672L10.3206 74.7586L6.5 71.9828L2.6794 74.7586L4.13874 70.2672L0.318133 67.4914H5.04066L6.5 63Z" fill="#5ECFC4"/>
                  <path d="M153 0L156.143 9.67376H166.315L158.086 15.6525L161.229 25.3262L153 19.3475L144.771 25.3262L147.914 15.6525L139.685 9.67376H149.857L153 0Z" fill="#5ECFC4"/>
                  <path d="M550 2L552.47 9.60081H560.462L553.996 14.2984L556.466 21.8992L550 17.2016L543.534 21.8992L546.004 14.2984L539.538 9.60081H547.53L550 2Z" fill="#5ECFC4"/>
                  <path d="M450.5 46L451.959 50.4914H456.682L452.861 53.2672L454.321 57.7586L450.5 54.9828L446.679 57.7586L448.139 53.2672L444.318 50.4914H449.041L450.5 46Z" fill="#5ECFC4"/>
                </svg>
              </div>
            </div>
            <div class="col-md-4">
              <h2 class="font_dash_whith text-center">Conseil du jour</h2>
              <p class="font_dash_whith title-border"><span class="title-border">"</span>Gardez la même <br><span class="title-border">ÉNERGIE"</span></p>
              <p class="font_dash_whith">Il est souvent difficile de garder la même énergie positive tout au long de la journée. Le fait de se sentir bien est important en entreprise pour éviter des situations de stress. Gardez en tête ce qui vous rend de bonne humeur et ne laisser pas cette pensée s’envoler !</p>
              <div>
              </div>
            </div>
          </div>

        <div class="row box_02">
          <graphic></graphic>
        </div>
      </b-container>
  </div>
</template>

<script>

import Navbarapp from "@/components/layout/navbarapp";
import Headerapp from "@/components/app/headerapp";
import Graphic from "@/components/app/graphic";
export default {
name: "meteo",
  components: {Graphic, Headerapp, Navbarapp}
}
</script>

<style scoped>
.box_01{
  padding: 20px;
  background-color: #3b0e67;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 40px;
  display: flex;
  height: -webkit-fill-available;
}

.box_02{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 40px;
  margin-top: 60px;
  display: flex;
  height: -webkit-fill-available;
}







button{
  margin-top: 40px;
}


input[type=range].custom-slider {
  width: 92%;
  padding-left: 27px;
  margin: 13.15px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range].custom-slider:focus {
  outline: none;
}
input[type=range].custom-slider::-webkit-slider-runnable-track {
  background: #5ecfc4;
  border: 0.2px solid #3b0e67;
  border-radius: 19.1px;
  width: 100%;
  height: 13.7px;
  cursor: pointer;
}
input[type=range].custom-slider::-webkit-slider-thumb {
  margin-top: -13.35px;
  width: 40px;
  height: 40px;
  background: #5ecfc4;
  border: 5px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range].custom-slider:focus::-webkit-slider-runnable-track {
  background: #5ecfc4;
}
input[type=range].custom-slider::-moz-range-track {
  background: #5ecfc4;
  border: 0.2px solid #3b0e67;
  border-radius: 19.1px;
  width: 100%;
  height: 13.7px;
  cursor: pointer;
}
input[type=range].custom-slider::-moz-range-thumb {
  width: 40px;
  height: 40px;
  background: #5ecfc4;
  border: 5px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
}
input[type=range].custom-slider::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 16.05px 0;
  color: transparent;
  width: 100%;
  height: 13.7px;
  cursor: pointer;
}
input[type=range].custom-slider::-ms-fill-lower {
  background: #5ecfc4;
  border: 0.2px solid #3b0e67;
  border-radius: 38.2px;
}
input[type=range].custom-slider::-ms-fill-upper {
  background: #5ecfc4;
  border: 0.2px solid #3b0e67;
  border-radius: 38.2px;
}
input[type=range].custom-slider::-ms-thumb {
  width: 40px;
  height: 40px;
  background: #5ecfc4;
  border: 5px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range].custom-slider:focus::-ms-fill-lower {
  background: #5ecfc4;
}
input[type=range].custom-slider:focus::-ms-fill-upper {
  background: #5ecfc4;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range].custom-slider {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}

</style>
