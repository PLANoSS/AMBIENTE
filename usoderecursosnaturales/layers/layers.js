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
var format_Usoeficientederecursos_0 = new ol.format.GeoJSON();
var features_Usoeficientederecursos_0 = format_Usoeficientederecursos_0.readFeatures(json_Usoeficientederecursos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usoeficientederecursos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Usoeficientederecursos_0.addFeatures(features_Usoeficientederecursos_0);var lyr_Usoeficientederecursos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Usoeficientederecursos_0, 
                style: style_Usoeficientederecursos_0,
    title: '<b/>Percepción sobre el uso eficiente de recursos naturales:</b><br />El degradado de colores en el mapa indica el porcentaje de<br />personas que están <b/>de acuerdo</b> en que el eficiente uso de<br />recursos naturales puede impulsar el desarrollo económico.<br /><br />\
    <img src="styles/legend/Usoeficientederecursos_0_0.png" />  0.0 - 20.0 <br />\
    <img src="styles/legend/Usoeficientederecursos_0_1.png" />  20.0 - 40.0 <br />\
    <img src="styles/legend/Usoeficientederecursos_0_2.png" />  40.0 - 60.0 <br />\
    <img src="styles/legend/Usoeficientederecursos_0_3.png" />  60.0 - 80.0 <br />\
    <img src="styles/legend/Usoeficientederecursos_0_4.png" />  80.0 - 100.0 <br />'
        });

lyr_Usoeficientederecursos_0.setVisible(true);
var layersList = [baseLayer,lyr_Usoeficientederecursos_0];
lyr_Usoeficientederecursos_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'De acuerdo': 'De acuerdo', });
lyr_Usoeficientederecursos_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'De acuerdo': 'Hidden', });
lyr_Usoeficientederecursos_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Usoeficientederecursos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});