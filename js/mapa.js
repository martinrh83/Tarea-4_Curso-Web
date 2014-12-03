var map = new L.Map('map', {zoomsliderControl:true, zoomControl: true, fullscreenControl: true,measureControl:true,panControl:true,
  fullscreenControlOptions: {
    position: 'topleft'
  }}).setView(new L.LatLng(-26.83449, -65.20729), 12);
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttribution = 'Map data &copy; 2012 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var layer_osm = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
    var magnifiedTiles = new L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
    //map.setView(new L.LatLng(-26.83449, -65.20729), 12).addLayer(layer_osm);
map.addLayer(layer_osm);
var ggls = new L.Google('SATELLITE');
var gglr = new L.Google('ROADMAP');
var gglh = new L.Google('HYBRID');
var gglt = new L.Google('TERRAIN');

var baseMaps = {
				"OpenStreetMap": layer_osm,
				"Google Satellite": ggls,
				"Google Roadmap": gglr,
				"Google Hybrid": gglh,
				"Google Terrain": gglt,
			};
L.control.scale().addTo(map);

map.addLayer(layer_osm,gglr,ggls, gglh, gglt);

/*
var ser_markers = new L.MarkerClusterGroup({ spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false });
var far_markers = new L.MarkerClusterGroup({ spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false });
var markers = new L.MarkerClusterGroup({ spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false });
    
//estaciones de servicio
        var ypf = L.marker([-26.82278, -65.2025],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });        
        var ypf1 = L.marker([-26.82402, -65.20757],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var ypf2 = L.marker([-26.839, -65.22762],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var refinor = L.marker([-26.81455, -65.20673],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var refinor1 = L.marker([-26.83835, -65.2115],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var esso = L.marker([-26.83456, -65.25249],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var shell = L.marker([-26.82202, -65.23182],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var shell1 = L.marker([-26.81091, -65.19157],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var shell2 = L.marker([-26.84357, -65.20731],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });
        var aca = L.marker([-26.80216, -65.20405],{icon: L.AwesomeMarkers.icon({icon: 'tachometer', prefix: 'fa', markerColor: 'blue', iconColor: 'white', spin:true}) });

//farmacias
        var pueblo = L.marker([-26.82044, -65.20206],{icon: L.AwesomeMarkers.icon({icon: 'plus-square', prefix: 'fa', markerColor: 'green', iconColor: 'white', spin:false}) });            
        var pueblo1 = L.marker([-26.83119, -65.20312],{icon: L.AwesomeMarkers.icon({icon: 'plus-square', prefix: 'fa', markerColor: 'green', iconColor: 'white', spin:false}) });         
        var pueblo2 = L.marker([-26.83027, -65.20784],{icon: L.AwesomeMarkers.icon({icon: 'plus-square', prefix: 'fa', markerColor: 'green', iconColor: 'white', spin:false}) });
         
        var pueblo3 = L.marker([-26.8266, -65.2062],{icon: L.AwesomeMarkers.icon({icon: 'plus-square', prefix: 'fa', markerColor: 'green', iconColor: 'white', spin:false}) });
         

//restaurantes
        var becketts = L.marker([-26.8207, -65.20209],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', spin:false}) });
        
        var mcdonals = L.marker([-26.82574, -65.2036],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
      
        var filipo = L.marker([-26.8284, -65.20416],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        var cafe_25 = L.marker([-26.82847, -65.20427],{icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var don_pancho = L.marker([-26.82902, -65.2041],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        var super_pancho = L.marker([-26.82933, -65.2042],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        var la_pancheria = L.marker([-26.82965, -65.20425],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        var la_esquina = L.marker([-26.82859, -65.20244],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var elpatio = L.marker([-26.82536, -65.21119],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var irlanda = L.marker([-26.82427, -65.21116],{icon: L.AwesomeMarkers.icon({icon: 'beer', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var abasto = L.marker([-26.82407, -65.20999],{icon: L.AwesomeMarkers.icon({icon: 'beer', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var bigotes = L.marker([-26.82543, -65.20328],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var la_forchetta = L.marker([-26.8198, -65.20192],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var bona = L.marker([-26.82663, -65.20379],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var burger = L.marker([-26.82387, -65.2042],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var postino2 = L.marker([-26.82894, -65.2092],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var martinez = L.marker([-26.82875, -65.20881],{icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var almas = L.marker([-26.81978, -65.20491],{icon: L.AwesomeMarkers.icon({icon: 'glass', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var lenita = L.marker([-26.82602, -65.20326],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var pizzada = L.marker([-26.83075, -65.20487],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var el_molino = L.marker([-26.83068, -65.2055],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var la_24 = L.marker([-26.83104, -65.20525],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var parravicini = L.marker([-26.83063, -65.20724],{icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var gloria = L.marker([-26.8285, -65.21108],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var quebracho = L.marker([-26.82128, -65.20226],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var remember = L.marker([-26.821, -65.20241],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var tresochouno = L.marker([-26.82294, -65.20216],{icon: L.AwesomeMarkers.icon({icon: 'glass', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var toscana = L.marker([-26.82472, -65.20021],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var pizzanova = L.marker([-26.82582, -65.20202],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var angelo = L.marker([-26.82623, -65.20372],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });
        
        var circus = L.marker([-26.82613, -65.20033],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var subway = L.marker([-26.82865, -65.20932],{icon: L.AwesomeMarkers.icon({icon: 'bitbucket', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:true}) });
        
        var happy_hour = L.marker([-26.82814, -65.21199],{icon: L.AwesomeMarkers.icon({icon: 'cutlery', prefix: 'fa', markerColor: 'red', iconColor: 'white', spin:false}) });

        var insignia = L.marker([-26.83843, -65.20361],{icon: L.AwesomeMarkers.icon({icon: 'desktop', prefix: 'fa', markerColor: 'purple', iconColor: 'white', spin:true}) });
        
var restaurantes = L.layerGroup([becketts,mcdonals,filipo,cafe_25,don_pancho,la_pancheria,super_pancho,la_esquina,elpatio,irlanda,abasto,bigotes,la_forchetta,bona,burger,martinez,postino2,almas,lenita,pizzada,el_molino,la_24,parravicini,gloria,remember,quebracho,tresochouno,remember,toscana,pizzanova,angelo]);
var far = L.layerGroup([pueblo,pueblo1,pueblo2,pueblo3]);
var ser = L.layerGroup([ypf,ypf1,ypf2,refinor,refinor1,esso,shell,shell1,shell2,aca]);


markers.addLayer(restaurantes);
map.addLayer(insignia);
far_markers.addLayer(far);
ser_markers.addLayer(ser);

markers.on('clusterclick', function (a) {
            a.layer.spiderfy();
        });
far_markers.on('clusterclick', function (a) {
            a.layer.spiderfy();
        });
ser_markers.on('clusterclick', function (a) {
            a.layer.spiderfy();
        });

//map.addLayer(markers);
  var groupedOverlays ={
     "INSIGNIA":{
        "Insignia":insignia
     },
     "Restaurantes": {
"restaurantes":markers
      },
      "Estaciones de servicio": {
        "estaciones":ser_markers
      },
      "Farmacias": {
        "farmacias":far_markers
      }
    };
  */

L.control.groupedLayers(baseMaps).addTo(map);
