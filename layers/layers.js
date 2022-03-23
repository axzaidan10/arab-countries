var wms_layers = [];

var format_Arabic_Countries_0 = new ol.format.GeoJSON();
var features_Arabic_Countries_0 = format_Arabic_Countries_0.readFeatures(json_Arabic_Countries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arabic_Countries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arabic_Countries_0.addFeatures(features_Arabic_Countries_0);
var lyr_Arabic_Countries_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arabic_Countries_0, 
                style: style_Arabic_Countries_0,
                interactive: true,
    title: 'Arabic_Countries<br />\
    <img src="styles/legend/Arabic_Countries_0_0.png" /> 0 - 5000000<br />\
    <img src="styles/legend/Arabic_Countries_0_1.png" /> 5000000 - 10000000<br />\
    <img src="styles/legend/Arabic_Countries_0_2.png" /> 10000000 - 15000000<br />\
    <img src="styles/legend/Arabic_Countries_0_3.png" /> 15000000 - 20000000<br />\
    <img src="styles/legend/Arabic_Countries_0_4.png" /> 20000000 - 25000000<br />\
    <img src="styles/legend/Arabic_Countries_0_5.png" /> 25000000 - 30000000<br />\
    <img src="styles/legend/Arabic_Countries_0_6.png" /> 30000000 - 35000000<br />\
    <img src="styles/legend/Arabic_Countries_0_7.png" /> 35000000 - 40000000<br />\
    <img src="styles/legend/Arabic_Countries_0_8.png" /> 40000000 - 45000000<br />\
    <img src="styles/legend/Arabic_Countries_0_9.png" /> 45000000 - 50000000<br />\
    <img src="styles/legend/Arabic_Countries_0_10.png" /> 50000000 - 55000000<br />\
    <img src="styles/legend/Arabic_Countries_0_11.png" /> 55000000 - 60000000<br />'
        });

lyr_Arabic_Countries_0.setVisible(true);
var layersList = [lyr_Arabic_Countries_0];
lyr_Arabic_Countries_0.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'Mame_AR': 'Mame_AR', });
lyr_Arabic_Countries_0.set('fieldImages', {'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', 'Mame_AR': 'TextEdit', });
lyr_Arabic_Countries_0.set('fieldLabels', {'FIPS_CNTRY': 'inline label', 'GMI_CNTRY': 'inline label', 'CNTRY_NAME': 'inline label', 'SOVEREIGN': 'inline label', 'POP_CNTRY': 'inline label', 'SQKM_CNTRY': 'no label', 'SQMI_CNTRY': 'no label', 'CURR_TYPE': 'no label', 'CURR_CODE': 'no label', 'LANDLOCKED': 'no label', 'COLOR_MAP': 'no label', 'Mame_AR': 'no label', });
lyr_Arabic_Countries_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});