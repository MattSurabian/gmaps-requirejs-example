require.config({
  paths:{
    require: 'libs/require',
    jquery: 'libs/jquery',
    GoogleMapsLoader: 'libs/google-maps-loader',
    MarkerClusterer: 'libs/markerclusterer',

    data: 'data/data',

    yourApp: 'src/yourApp'
  },
  shim: {
      'MarkerClusterer':{
        exports: 'MarkerClusterer'
      },
      'data':{
        exports: 'data'
      }
  }
});

require(['GoogleMapsLoader','yourApp'],function(GoogleMapsLoader,yourApp){
  GoogleMapsLoader.done(function(){
    yourApp.start();
	}).fail(function(){
		console.error("ERROR: Google maps library failed to load");
  });

});
