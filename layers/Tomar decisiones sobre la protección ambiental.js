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
var format_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2 = new ol.format.GeoJSON();
var features_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2 = format_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.readFeatures(json_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.addFeatures(features_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2);var lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2, 
                style: style_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2,
    title: '<b/>Percepción sobre quién debe tomar decisiones sobre protección ambiental:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas que creen<br />que el gobierno junto con la población deben tomar decisiones sobre protección<br />al ambiente.<br />\
    <img src="styles/legend/Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.setVisible(true);
var layersList = [baseLayer,lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2];
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA9_Gobier': 'MA9_Gobier', });
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA9_Gobier': 'TextEdit', });
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA9_Gobier': 'no label', });