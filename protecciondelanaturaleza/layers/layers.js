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
var format_Protecciondelanaturaleza_0 = new ol.format.GeoJSON();
var features_Protecciondelanaturaleza_0 = format_Protecciondelanaturaleza_0.readFeatures(json_Protecciondelanaturaleza_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protecciondelanaturaleza_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Protecciondelanaturaleza_0.addFeatures(features_Protecciondelanaturaleza_0);var lyr_Protecciondelanaturaleza_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Protecciondelanaturaleza_0, 
                style: style_Protecciondelanaturaleza_0,
    title: '<b/>Percepción sobre la protección de la naturaleza:</b><br />El degradado de colores en el mapa indica el porcentaje de<br />personas que están <b/>de acuerdo</b> en que la protección de la<br />naturaleza, puede impulsar el desarrollo económico.<br /><br />\
    <img src="styles/legend/Protecciondelanaturaleza_0_0.png" />  47 - 55 <br />\
    <img src="styles/legend/Protecciondelanaturaleza_0_1.png" />  55 - 63 <br />\
    <img src="styles/legend/Protecciondelanaturaleza_0_2.png" />  63 - 72 <br />\
    <img src="styles/legend/Protecciondelanaturaleza_0_3.png" />  72 - 80 <br />\
    <img src="styles/legend/Protecciondelanaturaleza_0_4.png" />  80 - 88 <br />'
        });

lyr_Protecciondelanaturaleza_0.setVisible(true);
var layersList = [baseLayer,lyr_Protecciondelanaturaleza_0];
lyr_Protecciondelanaturaleza_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'De acuerdo': 'De acuerdo', });
lyr_Protecciondelanaturaleza_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'De acuerdo': 'Hidden', });
lyr_Protecciondelanaturaleza_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Protecciondelanaturaleza_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});