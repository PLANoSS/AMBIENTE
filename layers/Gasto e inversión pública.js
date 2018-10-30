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
var format_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3 = new ol.format.GeoJSON();
var features_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3 = format_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.readFeatures(json_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.addFeatures(features_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3);var lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3, 
                style: style_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3,
    title: '<b/>Percepción sobre gasto e inversión pública:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas que prefieren<br />costos amigables con la naturaleza, que costos económicos.<br />\
    <img src="styles/legend/Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3_2.png" /> 40 - 60 <br />\
    <img src="styles/legend/Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3_4.png" /> 80  100<br /><br />'
        });

lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.setVisible(true);
var layersList = [baseLayer,lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3];
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA8_Costos': 'MA8_Costos', });
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA8_Costos': 'TextEdit', });
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA8_Costos': 'no label', });