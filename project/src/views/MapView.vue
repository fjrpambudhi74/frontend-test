<template>
  <div class="map">
    <h1>This is an map page</h1>
    <GmapAutocomplete @place_changed="setPlace" />
    <button @click="addMarker">Add</button>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
