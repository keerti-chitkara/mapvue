/* eslint-disable */
<template>
<div>

    <Gmap-Map style="width: 100%; height: 500px;" :zoom="4" :center="config.center">
      <Gmap-Marker v-for="(marker, index) in gmarkers"
        :key="index"
        :position="marker.position"
        ></Gmap-Marker>
      <Gmap-Marker
        v-if="this.gconfig.place"
        label="&#x2605;"
        :position="{
          lat: this.gconfig.place.geometry.location.lat(),
          lng: this.gconfig.place.geometry.location.lng(),
        }"
        ></Gmap-Marker>
    </Gmap-Map>
  
</GmapMap>
</div>
</template>
<script>

export default {
  name: 'GoogleMap',
  props: {
        
        markers: Array,
        config: Object,
        
    },
	data: function() {
			
        return {
            gconfig:this.config,
			gmarkers:this.markers
            
        };
    },
	
}

</script>