(function packageHydroShareMapApp() {

    'use strict';

    var map;
    var layer;

    function initApp() {
        map = new ol.Map({
            target: 'map',       
	        layers: [
	            new ol.layer.Tile({
	                source: new ol.source.OSM()
	            })
	        ], 
            view: new ol.View({
                center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
                zoom: 1.8,
                minZoom: 1.8,
                maxZoom: 17
            })
        });
    };

    function addLayer() {
    	var resourceId = $('#resource-id').val();
    	var aggregationName = $('#aggregation-name').val();
    	var layerId = `HS-${resourceId}:${aggregationName}`;
    	map.removeLayer(layer);
    	var layerSource = new ol.source.ImageWMS({
            url: 'https://geoserver-beta.hydroshare.org/geoserver/wms',
            params: {'LAYERS': layerId},
            serverType: 'geoserver',
            crossOrigin: 'Anonymous'
        });
        layer = new ol.layer.Image({
            source: layerSource
        });
        layerSource.on('imageloaderror', function() {
        	alert('Unable to load layer.')
        });
        map.addLayer(layer);
    };

    $(document).on('click', '#update-map', addLayer);

    initApp();

}());