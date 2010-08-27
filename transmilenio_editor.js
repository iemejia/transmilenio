//<![CDATA[
			// Definición de las variables Globales
			var estaciones = new Array();
			var mapa;
			var icono;
			
			function CrearEstacion(punto, icono, etiqueta) {
    			var estacion = new GMarker(punto, {icon:icono, draggable: true});
    			var informacion="<div class=informacion><img src=\"imagenes\/logo.png\">"+etiqueta+"<\/div>";
    			GEvent.addListener(estacion, "click", function() {
  					estacion.openInfoWindowHtml(informacion);
				});
    		   return estacion;    		   
  			}
			
			ProcesarDatos=function(datos, respuesta) {
				alert('coco');
				if (respuesta=200){
  					var xml = GXml.parse(datos);
  					xmlestaciones = xml.documentElement.getElementsByTagName("estacion");
  					for (var i = 0; i < xmlestaciones.length; i++) {
							estaciones[i]=new Array(3);
							estaciones[i][0]=parseFloat(xmlestaciones[i].getAttribute("latitud"))
							estaciones[i][1]=parseFloat(xmlestaciones[i].getAttribute("longitud"))
	    					estaciones[i][2]=xmlestaciones[i].getAttribute("etiqueta");    				
	  				}
				}
			}
			

			function dibujar() {
				for (var i = 0; i < estaciones.length; i++) {
    				mapa.addOverlay(CrearEstacion(new GLatLng(estaciones[i][0],estaciones[i][1]),icono,estaciones[i][2]));
	  			}		
	  		}
				
			function load() {
        		mapa = new GMap2(document.getElementById("divmapa"));  
        		mapa.setCenter(new GLatLng(4.663345579805752, -74.07119750976562), 12);
        		mapa.setMapType(G_SATELLITE_MAP);
        		mapa.addControl(new GLargeMapControl());
        		icono = new GIcon();
  				icono.image = "imagenes/estacion.png";
  				icono.iconSize = new GSize(8, 8);
  				icono.iconAnchor = new GPoint(4, 4);
  				icono.dragCrossAnchor = new GPoint(4, 4);
				icono.infoWindowAnchor = new GPoint(4, 4);
				GDownloadUrl("transmilenio.xml", ProcesarDatos);
				alert(estaciones.length);
				dibujar();
			}
			
 //]]>
