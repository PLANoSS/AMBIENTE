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
var format_ImportanciadeprotegerelmedioambienteMuyimportante_1 = new ol.format.GeoJSON();
var features_ImportanciadeprotegerelmedioambienteMuyimportante_1 = format_ImportanciadeprotegerelmedioambienteMuyimportante_1.readFeatures(json_ImportanciadeprotegerelmedioambienteMuyimportante_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImportanciadeprotegerelmedioambienteMuyimportante_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ImportanciadeprotegerelmedioambienteMuyimportante_1.addFeatures(features_ImportanciadeprotegerelmedioambienteMuyimportante_1);var lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ImportanciadeprotegerelmedioambienteMuyimportante_1, 
                style: style_ImportanciadeprotegerelmedioambienteMuyimportante_1,
    title: '<b/>Percepción sobre la importancia de proteger el medio ambiente:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas que creen<br />que proteger el medio ambiente es muy importante.<br />\
    <img src="styles/legend/ImportanciadeprotegerelmedioambienteMuyimportante_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/ImportanciadeprotegerelmedioambienteMuyimportante_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/ImportanciadeprotegerelmedioambienteMuyimportante_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/ImportanciadeprotegerelmedioambienteMuyimportante_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/ImportanciadeprotegerelmedioambienteMuyimportante_1_4.png" />  80 - 100 <br /><br />'
        });

lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.setVisible(true);
var layersList = [baseLayer,lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1];
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA3_MA3T02': 'MA3_MA3T02', });
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA3_MA3T02': 'TextEdit', });
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA3_MA3T02': 'no label', });
