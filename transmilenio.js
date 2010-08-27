    //<![CDATA[
    function load() {
      if (GBrowserIsCompatible()) {
        	var mapa = new GMap2(document.getElementById("divmapa"));  
        	mapa.setCenter(new GLatLng(4.663345579805752, -74.07119750976562), 12);
        	mapa.setMapType(G_SATELLITE_MAP);
        	mapa.addControl(new GLargeMapControl());
        	var icono = new GIcon();
  			icono.image = "imagenes/estacion.png";
  			icono.iconSize = new GSize(8, 8);
  			icono.iconAnchor = new GPoint(4, 4);
  			icono.iconAnchor = new GPoint(4, 4);
			icono.infoWindowAnchor = new GPoint(4, 4);
						   			
			/* Crea una estacion y muestra su etiqueta */
		
		  	function CrearEstacion(punto, icono, etiqueta) {
    			var estacion = new GMarker(punto, icono);
    			var informacion="<div class=informacion><img src=\"imagenes\/logo.png\">"+etiqueta+"<\/div>";
    			GEvent.addListener(estacion, "click", function() {
  					estacion.openInfoWindowHtml(informacion);
				});
    		   return estacion;    		   
  			}
			
			ProcesarDatos=function(datos, respuesta) {
				if (respuesta=200){
  					var xml = GXml.parse(datos);
  					estaciones = xml.documentElement.getElementsByTagName("estacion");
  					for (var i = 0; i < estaciones.length; i++) {
	    					var coordenada = new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud")));
   	 					var etiqueta = estaciones[i].getAttribute("etiqueta");    				
    						mapa.addOverlay(CrearEstacion(coordenada,icono,etiqueta));
	  				}
	  					
					/* Dibujar las Zonas */
				
					/* Zona D - #9F4696 */
			
					var ZonaD = [];
					for (var i=0;i<14;i++){  			
						ZonaD.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
	  				ZonaD.push(new GLatLng(parseFloat(estaciones[29].getAttribute("latitud")), parseFloat(estaciones[29].getAttribute("longitud"))));
	  				
	  				mapa.addOverlay(new GPolyline(ZonaD,'#9F4696', 6, 1));
			
					/* Zona B - #78BC4D */
			
					var ZonaB = [];
					for (var i=14;i<=29;i++){  			
						ZonaB.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaB,'#78BC4D', 6, 1));
			
					/* Zona A - #2E4799 */
			
					var ZonaA = [];
					for (var i=29;i<43;i++){  			
						ZonaA.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaA,'#2E4799', 6, 1));
  					
  					/* Zona H - #F0722B */    					

					var ZonaHa = [];
					for (var i=42;i<56;i++){  			
						ZonaHa.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaHa,'#F0722B', 6, 1));
					
					var ZonaHb = [];

					ZonaHb.push(new GLatLng(parseFloat(estaciones[51].getAttribute("latitud")), parseFloat(estaciones[51].getAttribute("longitud"))));
					for (var i=56;i<59;i++){  			
						ZonaHb.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaHb,'#F0722B', 6, 1));
					
					/* Zona J - #E786A3 */  

					var ZonaJ = [];
					for (var i=59;i<62;i++){  			
						ZonaJ.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaJ,'#E786A3', 6, 1));

	  				/* Zona F - #E42C35 */  

					var ZonaF = [];
					for (var i=61;i<79;i++){  			
						ZonaF.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaF,'#E42C35', 6, 1));
  					
  					/* Zona C - #F0B904 */  

					var ZonaC = [];
					for (var i=79;i<93;i++){  			
						ZonaC.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaC,'#F9C12A', 6, 1));

  					/* Zona E - #DBA84D */  

					var ZonaE = [];
					ZonaE.push(new GLatLng(parseFloat(estaciones[25].getAttribute("latitud")), parseFloat(estaciones[25].getAttribute("longitud"))));
					for (var i=93;i<104;i++){  			
						ZonaE.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaE,'#DBA84D', 6, 1));


	  				/* Zona G - #77BFDB */  
	  				
					var ZonaG = [];
					for (var i=103;i<116;i++){  			
						ZonaG.push(new GLatLng(parseFloat(estaciones[i].getAttribute("latitud")), parseFloat(estaciones[i].getAttribute("longitud"))));
  					};			
  					mapa.addOverlay(new GPolyline(ZonaG,'#77BFDB', 6, 1));

					/* Intercambios troncales */
					
					var IJimenez = [];
					IJimenez.push(new GLatLng(parseFloat(estaciones[41].getAttribute("latitud")), parseFloat(estaciones[41].getAttribute("longitud"))));
					IJimenez.push(new GLatLng(parseFloat(estaciones[61].getAttribute("latitud")), parseFloat(estaciones[61].getAttribute("longitud"))));
					mapa.addOverlay(new GPolyline(IJimenez,'#000000', 4, 1));

					var IRicaurte = [];
					IRicaurte.push(new GLatLng(parseFloat(estaciones[64].getAttribute("latitud")), parseFloat(estaciones[64].getAttribute("longitud"))));
					IRicaurte.push(new GLatLng(parseFloat(estaciones[103].getAttribute("latitud")), parseFloat(estaciones[103].getAttribute("longitud"))));
					mapa.addOverlay(new GPolyline(IRicaurte,'#000000', 4, 1));		
				}					  					 					
  			}

			/* Descarga el xml de las estaciones, lo procesa y lo dibuja */									
			
			GDownloadUrl("transmilenio.xml", ProcesarDatos);		


  			/* Con propositos de debug*/
/*
  			GEvent.addListener(mapa, "moveend", function() {
			  var centro = mapa.getCenter();
			  var zoom = mapa.getZoom()
  			  document.getElementById("coordenadas").innerHTML = centro.toString() + "," + zoom.toString();
			});
*/			
       }
    }
    //]]>
