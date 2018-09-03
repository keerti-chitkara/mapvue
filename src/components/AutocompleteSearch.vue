/* eslint-disable */
<template>
<div>
     <div id="root">
    <div class="mapsearch">
      <gmap-autocomplete
        @place_changed="setPlace">
      </gmap-autocomplete>
      </div>
    
	<GoogleMap :config="config" :markers="markers"/>
   
  </div>

</div>
</template>
<style>
.mapsearch > input {
	position: absolute;
	top: 28px;
	z-index: 99999;
	width: 322px;
	left: 988px;
}

</style>
<script>
/* eslint-disable */
/*import VueGoogleAutocomplete from 'vue-google-autocomplete';*/

import GoogleMap from '../components/GoogleMap';



    export default {

        components: { GoogleMap  },

      
        data: function(){
		var place=null;
		var markers=[];
		var center={lat:-33.8688,lng:151.2195};
		 
		return { markers: markers,
		config: {place:place,center:center},
		
		}
		},
    methods: {
      setDescription(description) {
        this.description = description;
      },
      setPlace(place) {
	  this.config.place= place;
        this.place = place
		
        if (place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
          })
		   this.config.center= {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            },

		  this.config.place= null;
          this.place = null;
        }
      },
      usePlace(place) {
	  
        if (place) {
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
          })
		   this.config.center= {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            },

		  this.config.place= null;
          this.place = null;
        }
      }
    }
    }




</script>