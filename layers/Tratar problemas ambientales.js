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
var format_Accinpersonalparatratarproblemasambientaleseselreciclaje_6 = new ol.format.GeoJSON();
var features_Accinpersonalparatratarproblemasambientaleseselreciclaje_6 = format_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.readFeatures(json_Accinpersonalparatratarproblemasambientaleseselreciclaje_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accinpersonalparatratarproblemasambientaleseselreciclaje_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.addFeatures(features_Accinpersonalparatratarproblemasambientaleseselreciclaje_6);var lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Accinpersonalparatratarproblemasambientaleseselreciclaje_6, 
                style: style_Accinpersonalparatratarproblemasambientaleseselreciclaje_6,
    title: '<b/>Percepción sobre acción personal para tratar problemas ambientales:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que seleccionaron el reciclaje como la acción personal más eficiente<br />para tratar problemas ambientales.<br />\
    <img src="styles/legend/Accinpersonalparatratarproblemasambientaleseselreciclaje_6_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Accinpersonalparatratarproblemasambientaleseselreciclaje_6_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Accinpersonalparatratarproblemasambientaleseselreciclaje_6_2.png" /> 40 - 60 <br />\
    <img src="styles/legend/Accinpersonalparatratarproblemasambientaleseselreciclaje_6_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Accinpersonalparatratarproblemasambientaleseselreciclaje_6_4.png" /> 80  100<br /><br />'
        });

lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.setVisible(true);
var layersList = [baseLayer,lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6];
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA6_Recicl': 'MA6_Recicl', });
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA6_Recicl': 'TextEdit', });
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA6_Recicl': 'no label', });
