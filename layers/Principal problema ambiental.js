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
var format_Laagriculturaeslamayoramenazaparalabiodiversidad_0 = new ol.format.GeoJSON();
var features_Laagriculturaeslamayoramenazaparalabiodiversidad_0 = format_Laagriculturaeslamayoramenazaparalabiodiversidad_0.readFeatures(json_Laagriculturaeslamayoramenazaparalabiodiversidad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laagriculturaeslamayoramenazaparalabiodiversidad_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Laagriculturaeslamayoramenazaparalabiodiversidad_0.addFeatures(features_Laagriculturaeslamayoramenazaparalabiodiversidad_0);var lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Laagriculturaeslamayoramenazaparalabiodiversidad_0, 
                style: style_Laagriculturaeslamayoramenazaparalabiodiversidad_0,
    title: '<b/>Percepción sobre la mayor amenaza para la biodiversidad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas que creen<br />que la mayor amenaza para la biodiversidad es la contaminación del aire y agua.<br />\
    <img src="styles/legend/Laagriculturaeslamayoramenazaparalabiodiversidad_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Laagriculturaeslamayoramenazaparalabiodiversidad_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Laagriculturaeslamayoramenazaparalabiodiversidad_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Laagriculturaeslamayoramenazaparalabiodiversidad_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Laagriculturaeslamayoramenazaparalabiodiversidad_0_4.png" />  80 - 100 <br /><br />'
        });var format_ImportanciadeprotegerelmedioambienteMuyimportante_1 = new ol.format.GeoJSON();
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
        });var format_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2 = new ol.format.GeoJSON();
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
        });var format_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3 = new ol.format.GeoJSON();
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
        });var format_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4 = new ol.format.GeoJSON();
var features_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4 = format_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.readFeatures(json_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.addFeatures(features_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4);var lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4, 
                style: style_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4,
    title: '<b/>Percepción sobre criterios en los que debería basarse el desarrollo y progreso del país:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas que seleccionaron<br />equilibradamente entre criterios económicos,sociales y ambientales.<br />\
    <img src="styles/legend/Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4_2.png" /> 40 - 60 <br />\
    <img src="styles/legend/Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4_4.png" /> 80 - 100<br /><br />'
        });var format_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5 = new ol.format.GeoJSON();
var features_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5 = format_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.readFeatures(json_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.addFeatures(features_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5);var lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5, 
                style: style_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5,
    title: '<b/>Percepción sobre problemas ambientales:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que seleccionaron a la creciente cantidad de basura como el problema ambiental<br />más preocupante.<br />\
    <img src="styles/legend/Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5_4.png" /> 80 - 100<br /><br />'
        });var format_Accinpersonalparatratarproblemasambientaleseselreciclaje_6 = new ol.format.GeoJSON();
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
        });var format_Haescuchadoysabeloquesignificaelterminobiodiversidad_7 = new ol.format.GeoJSON();
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
        });var format_Semantieneinformadodetemasambientalesatravsdelatelevisin_8 = new ol.format.GeoJSON();
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

lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0.setVisible(false);lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.setVisible(false);lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.setVisible(false);lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.setVisible(false);lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.setVisible(false);lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.setVisible(true);lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.setVisible(false);lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.setVisible(false);lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.setVisible(false);
var layersList = [baseLayer,lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0,lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1,lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2,lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3,lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4,lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5,lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6,lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7,lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8];
lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'BD2_Agricu': 'BD2_Agricu', });
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA3_MA3T02': 'MA3_MA3T02', });
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA9_Gobier': 'MA9_Gobier', });
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA8_Costos': 'MA8_Costos', });
lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA7_No lo': 'MA7_No lo', });
lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA4_MA4TUR': 'MA4_MA4TUR', });
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA6_Recicl': 'MA6_Recicl', });
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'BD1_He esc': 'BD1_He esc', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'MA5_Televi': 'MA5_Televi', });
lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'BD2_Agricu': 'TextEdit', });
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA3_MA3T02': 'TextEdit', });
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA9_Gobier': 'TextEdit', });
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA8_Costos': 'TextEdit', });
lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA7_No lo': 'Hidden', });
lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA4_MA4TUR': 'Hidden', });
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA6_Recicl': 'TextEdit', });
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'BD1_He esc': 'TextEdit', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'MA5_Televi': 'TextEdit', });
lyr_Laagriculturaeslamayoramenazaparalabiodiversidad_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'BD2_Agricu': 'no label', });
lyr_ImportanciadeprotegerelmedioambienteMuyimportante_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA3_MA3T02': 'no label', });
lyr_Losgobiernosenconjuntoconlapoblacindebentomardecisionessobreproteccinalambiente_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA9_Gobier': 'no label', });
lyr_Sobregastoeinversinpblicaseprefierencostosamigablesconlanaturalezaqueloseconmicos_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA8_Costos': 'no label', });
lyr_Nosesabenloscriteriossobrelosquesedebenbasareldesarrolloyprogresodelpas_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Elproblemaambientalquemspreocupaeslacrecientecantidaddebasura_5.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Accinpersonalparatratarproblemasambientaleseselreciclaje_6.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA6_Recicl': 'no label', });
lyr_Haescuchadoysabeloquesignificaelterminobiodiversidad_7.set('fieldLabels', {'Canton': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'BD1_He esc': 'no label', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'MA5_Televi': 'no label', });
lyr_Semantieneinformadodetemasambientalesatravsdelatelevisin_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});