var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Kelurahan_1 = new ol.format.GeoJSON();
var features_Kelurahan_1 = format_Kelurahan_1.readFeatures(json_Kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_1.addFeatures(features_Kelurahan_1);
var lyr_Kelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_1, 
                style: style_Kelurahan_1,
                popuplayertitle: "Kelurahan",
                interactive: true,
    title: 'Kelurahan<br />\
    <img src="styles/legend/Kelurahan_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/Kelurahan_1_1.png" /> Genteng<br />\
    <img src="styles/legend/Kelurahan_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/Kelurahan_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/Kelurahan_1_4.png" /> Peneleh<br />'
        });
var format_JaringanJalanSurabaya_2 = new ol.format.GeoJSON();
var features_JaringanJalanSurabaya_2 = format_JaringanJalanSurabaya_2.readFeatures(json_JaringanJalanSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanSurabaya_2.addFeatures(features_JaringanJalanSurabaya_2);
var lyr_JaringanJalanSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanSurabaya_2, 
                style: style_JaringanJalanSurabaya_2,
                popuplayertitle: "Jaringan Jalan Surabaya",
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanSurabaya_2.png" /> Jaringan Jalan Surabaya'
            });
var format_JalanJangkauanHalte_3 = new ol.format.GeoJSON();
var features_JalanJangkauanHalte_3 = format_JalanJangkauanHalte_3.readFeatures(json_JalanJangkauanHalte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanJangkauanHalte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanJangkauanHalte_3.addFeatures(features_JalanJangkauanHalte_3);
var lyr_JalanJangkauanHalte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanJangkauanHalte_3, 
                style: style_JalanJangkauanHalte_3,
                popuplayertitle: "Jalan Jangkauan Halte",
                interactive: true,
                title: '<img src="styles/legend/JalanJangkauanHalte_3.png" /> Jalan Jangkauan Halte'
            });
var format_HalteSurabaya_4 = new ol.format.GeoJSON();
var features_HalteSurabaya_4 = format_HalteSurabaya_4.readFeatures(json_HalteSurabaya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteSurabaya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteSurabaya_4.addFeatures(features_HalteSurabaya_4);
var lyr_HalteSurabaya_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteSurabaya_4, 
                style: style_HalteSurabaya_4,
                popuplayertitle: "Halte Surabaya",
                interactive: true,
                title: '<img src="styles/legend/HalteSurabaya_4.png" /> Halte Surabaya'
            });
var format_JangkauanHalte_5 = new ol.format.GeoJSON();
var features_JangkauanHalte_5 = format_JangkauanHalte_5.readFeatures(json_JangkauanHalte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanHalte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanHalte_5.addFeatures(features_JangkauanHalte_5);
var lyr_JangkauanHalte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanHalte_5, 
                style: style_JangkauanHalte_5,
                popuplayertitle: "Jangkauan Halte",
                interactive: true,
                title: '<img src="styles/legend/JangkauanHalte_5.png" /> Jangkauan Halte'
            });

lyr_Positron_0.setVisible(true);lyr_Kelurahan_1.setVisible(true);lyr_JaringanJalanSurabaya_2.setVisible(true);lyr_JalanJangkauanHalte_3.setVisible(true);lyr_HalteSurabaya_4.setVisible(true);lyr_JangkauanHalte_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Kelurahan_1,lyr_JaringanJalanSurabaya_2,lyr_JalanJangkauanHalte_3,lyr_HalteSurabaya_4,lyr_JangkauanHalte_5];
lyr_Kelurahan_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas Jangkauan': 'Luas Jangkauan', });
lyr_JaringanJalanSurabaya_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', 'Jangkauan': 'Jangkauan', });
lyr_JalanJangkauanHalte_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'jangkauan': 'jangkauan', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', 'type': 'type', 'start': 'start', });
lyr_HalteSurabaya_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'jangkauan': 'jangkauan', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_JangkauanHalte_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'jangkauan': 'jangkauan', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_Kelurahan_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas Jangkauan': 'Range', });
lyr_JaringanJalanSurabaya_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', 'Jangkauan': '', });
lyr_JalanJangkauanHalte_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'jangkauan': '', 'Informasi Halte__RUTE': '', 'Informasi Halte__Destinasi': '', 'type': '', 'start': '', });
lyr_HalteSurabaya_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'jangkauan': '', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_JangkauanHalte_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'jangkauan': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_Kelurahan_1.set('fieldLabels', {'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas Jangkauan': 'no label', });
lyr_JaringanJalanSurabaya_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', 'Jangkauan': 'no label', });
lyr_JalanJangkauanHalte_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'jangkauan': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_HalteSurabaya_4.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'jangkauan': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_JangkauanHalte_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'jangkauan': 'inline label - always visible', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_JangkauanHalte_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});