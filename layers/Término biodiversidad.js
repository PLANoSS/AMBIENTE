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
var format_Haescuchadoysabeloquesignificaelterminobiodiversidad_7 = new ol.format.GeoJSON();
var features_Haescuchadoysabeloquesignificaelterminobiodiversidad_7 = format_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.readFeatures(json_Haescuchadoysabeloquesignificaelterminobiodiversidad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haescuchadoysabeloquesignificaelterminobiodiversidad_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.addFeatures(features_Haescuchadoysabeloquesignificaelterminobiodiversidad_7);var lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Haescuchadoysabeloquesignificaelterminobiodiversidad_7, 
                style: style_Haescuchadoysabeloquesignificaelterminobiodiversidad_7,
    title: '<b/>Percepción sobre el término biodiversidad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que han escuchado y saben lo que significa el término ‘biodiversidad’.<br />\
    <img src="styles/legend/Haescuchadoysabeloquesignificaelterminobiodiversidad_7_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Haescuchadoysabeloquesignificaelterminobiodiversidad_7_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Haescuchadoysabeloquesignificaelterminobiodiversidad_7_2.png" /> 40 - 60 <br />\
    <img src="styles/legend/Haescuchadoysabeloquesignificaelterminobiodiversidad_7_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Haescuchadoysabeloquesignificaelterminobiodiversidad_7_4.png" /> 80  100<br /><br />'
        });

lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.setVisible(true);
var layersList = [baseLayer,lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7];
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'BD1_He esc': 'BD1_He esc', });
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'BD1_He esc': 'TextEdit', });
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'BD1_He esc': 'no label', });