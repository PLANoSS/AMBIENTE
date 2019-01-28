var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Parquesderecreacion_0 = new ol.format.GeoJSON();
var features_Parquesderecreacion_0 = format_Parquesderecreacion_0.readFeatures(json_Parquesderecreacion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parquesderecreacion_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parquesderecreacion_0.addFeatures(features_Parquesderecreacion_0);var lyr_Parquesderecreacion_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parquesderecreacion_0, 
                style: style_Parquesderecreacion_0,
    title: '<b/>Percepción sobre parques de recreación:</b><br />El degradado de colores en el mapa indica el porcentaje de<br />personas en las que la creación de parques de recreación<br />influye <b/>mucho</b> en su calidad de vida.<br /><br />\
    <img src="styles/legend/Parquesderecreacion_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Parquesderecreacion_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Parquesderecreacion_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Parquesderecreacion_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Parquesderecreacion_0_4.png" />  80 - 100 <br />'
        });

lyr_Parquesderecreacion_0.setVisible(true);
var layersList = [baseLayer,lyr_Parquesderecreacion_0];
lyr_Parquesderecreacion_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'Mucho': 'Mucho', });
lyr_Parquesderecreacion_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'Mucho': 'Hidden', });
lyr_Parquesderecreacion_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Parquesderecreacion_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});