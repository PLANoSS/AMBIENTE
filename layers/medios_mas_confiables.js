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
var format_Semantieneinformadodetemasambientalesatravsdelatelevisin_8 = new ol.format.GeoJSON();
var features_Semantieneinformadodetemasambientalesatravsdelatelevisin_8 = format_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.readFeatures(json_Semantieneinformadodetemasambientalesatravsdelatelevisin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semantieneinformadodetemasambientalesatravsdelatelevisin_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.addFeatures(features_Semantieneinformadodetemasambientalesatravsdelatelevisin_8);var lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semantieneinformadodetemasambientalesatravsdelatelevisin_8, 
                style: style_Semantieneinformadodetemasambientalesatravsdelatelevisin_8,
    title: '<b/>Percepción sobre medios más confiables de información ambiental:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que seleccionaron a la televisión como el medio más confiable para informarse<br />sobre temas ambientales.<br />\
    <img src="styles/legend/Semantieneinformadodetemasambientalesatravsdelatelevisin_8_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Semantieneinformadodetemasambientalesatravsdelatelevisin_8_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Semantieneinformadodetemasambientalesatravsdelatelevisin_8_2.png" /> 40 - 60 <br />\
    <img src="styles/legend/Semantieneinformadodetemasambientalesatravsdelatelevisin_8_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Semantieneinformadodetemasambientalesatravsdelatelevisin_8_4.png" /> 80  100<br /><br />'
        });

lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.setVisible(true);
var layersList = [baseLayer,lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8];
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA5_Televi': 'MA5_Televi', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA5_Televi': 'TextEdit', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA5_Televi': 'no label', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});