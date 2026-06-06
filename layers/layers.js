ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([341658.719000, 6631327.512154, 419548.429000, 6746389.452000]);
var wms_layers = [];

var format_LowEcologicalConnectivityBackgroundOnly_1 = new ol.format.GeoJSON();
var features_LowEcologicalConnectivityBackgroundOnly_1 = format_LowEcologicalConnectivityBackgroundOnly_1.readFeatures(json_LowEcologicalConnectivityBackgroundOnly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_LowEcologicalConnectivityBackgroundOnly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowEcologicalConnectivityBackgroundOnly_1.addFeatures(features_LowEcologicalConnectivityBackgroundOnly_1);
var lyr_LowEcologicalConnectivityBackgroundOnly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowEcologicalConnectivityBackgroundOnly_1, 
                style: style_LowEcologicalConnectivityBackgroundOnly_1,
                popuplayertitle: 'Low Ecological Connectivity - Background Only',
                interactive: false,
                title: '<img src="styles/legend/LowEcologicalConnectivityBackgroundOnly_1.png" /> Low Ecological Connectivity - Background Only'
            });
var format_EcologicalConnectivity_2 = new ol.format.GeoJSON();
var features_EcologicalConnectivity_2 = format_EcologicalConnectivity_2.readFeatures(json_EcologicalConnectivity_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_EcologicalConnectivity_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcologicalConnectivity_2.addFeatures(features_EcologicalConnectivity_2);
var lyr_EcologicalConnectivity_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcologicalConnectivity_2, 
                style: style_EcologicalConnectivity_2,
                popuplayertitle: 'Ecological Connectivity ',
                interactive: true,
    title: 'Ecological Connectivity <br />\
    <img src="styles/legend/EcologicalConnectivity_2_0.png" /> Coincident Core (High Tree-High Squirrel)<br />\
    <img src="styles/legend/EcologicalConnectivity_2_1.png" /> Unexpected Habitat (Low Tree-High Squirrel)<br />\
    <img src="styles/legend/EcologicalConnectivity_2_2.png" /> Unoccupied Canopy (High Tree-Low Squirrel)<br />' });

lyr_LowEcologicalConnectivityBackgroundOnly_1.setVisible(true);lyr_EcologicalConnectivity_2.setVisible(true);
var layersList = [lyr_LowEcologicalConnectivityBackgroundOnly_1,lyr_EcologicalConnectivity_2];
lyr_LowEcologicalConnectivityBackgroundOnly_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'url': 'url', 'admin_ref': 'admin_ref', 'start_date': 'start_date', 'border_type': 'border_type', 'population:date': 'population:date', 'old_name:fi': 'old_name:fi', 'old_name': 'old_name', 'loc_name': 'loc_name', 'wikimedia_commons': 'wikimedia_commons', 'website': 'website', 'population': 'population', 'official_name:zh-Hant': 'official_name:zh-Hant', 'official_name:zh-Hans': 'official_name:zh-Hans', 'official_name:zh': 'official_name:zh', 'official_name:vi': 'official_name:vi', 'official_name:ur': 'official_name:ur', 'official_name:sk': 'official_name:sk', 'official_name:se': 'official_name:se', 'official_name:ru': 'official_name:ru', 'official_name:pt': 'official_name:pt', 'official_name:pl': 'official_name:pl', 'official_name:no': 'official_name:no', 'official_name:nn': 'official_name:nn', 'official_name:lt': 'official_name:lt', 'official_name:ja': 'official_name:ja', 'official_name:it': 'official_name:it', 'official_name:is': 'official_name:is', 'official_name:id': 'official_name:id', 'official_name:hu': 'official_name:hu', 'official_name:fr': 'official_name:fr', 'official_name:fa': 'official_name:fa', 'official_name:et': 'official_name:et', 'official_name:es': 'official_name:es', 'official_name:eo': 'official_name:eo', 'official_name:el': 'official_name:el', 'official_name:de': 'official_name:de', 'official_name:da': 'official_name:da', 'official_name:cs': 'official_name:cs', 'official_name:ca': 'official_name:ca', 'official_name:be': 'official_name:be', 'official_name:ar': 'official_name:ar', 'name:zu': 'name:zu', 'name:zh-Latn-pinyin': 'name:zh-Latn-pinyin', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:zea': 'name:zea', 'name:za': 'name:za', 'name:yue': 'name:yue', 'name:yo': 'name:yo', 'name:yi': 'name:yi', 'name:xmf': 'name:xmf', 'name:xal': 'name:xal', 'name:wuu': 'name:wuu', 'name:wo': 'name:wo', 'name:war': 'name:war', 'name:wa': 'name:wa', 'name:vro': 'name:vro', 'name:vo': 'name:vo', 'name:vls': 'name:vls', 'name:vi': 'name:vi', 'name:vep': 'name:vep', 'name:vec': 'name:vec', 'name:uz': 'name:uz', 'name:ug': 'name:ug', 'name:udm': 'name:udm', 'name:tzl': 'name:tzl', 'name:tt': 'name:tt', 'name:tr': 'name:tr', 'name:tpi': 'name:tpi', 'name:tok': 'name:tok', 'name:tl': 'name:tl', 'name:tk': 'name:tk', 'name:th': 'name:th', 'name:tg': 'name:tg', 'name:tet': 'name:tet', 'name:ta': 'name:ta', 'name:szl': 'name:szl', 'name:sw': 'name:sw', 'name:su': 'name:su', 'name:stq': 'name:stq', 'name:st': 'name:st', 'name:ss': 'name:ss', 'name:srn': 'name:srn', 'name:sq': 'name:sq', 'name:so': 'name:so', 'name:sms': 'name:sms', 'name:smn': 'name:smn', 'name:sm': 'name:sm', 'name:sl': 'name:sl', 'name:sk': 'name:sk', 'name:sje': 'name:sje', 'name:si': 'name:si', 'name:sh': 'name:sh', 'name:se': 'name:se', 'name:sco': 'name:sco', 'name:scn': 'name:scn', 'name:sc': 'name:sc', 'name:sah': 'name:sah', 'name:sa': 'name:sa', 'name:rw': 'name:rw', 'name:rue': 'name:rue', 'name:roa-tara': 'name:roa-tara', 'name:roa-rup': 'name:roa-rup', 'name:ro': 'name:ro', 'name:rmy': 'name:rmy', 'name:rm': 'name:rm', 'name:qu': 'name:qu', 'name:pt': 'name:pt', 'name:ps': 'name:ps', 'name:pnt': 'name:pnt', 'name:pnb': 'name:pnb', 'name:pms': 'name:pms', 'name:pl': 'name:pl', 'name:pih': 'name:pih', 'name:pcd': 'name:pcd', 'name:pap': 'name:pap', 'name:pam': 'name:pam', 'name:os': 'name:os', 'name:or': 'name:or', 'name:oc': 'name:oc', 'name:nv': 'name:nv', 'name:nrm': 'name:nrm', 'name:nov': 'name:nov', 'name:nl': 'name:nl', 'name:new': 'name:new', 'name:ne': 'name:ne', 'name:nds-nl': 'name:nds-nl', 'name:nds': 'name:nds', 'name:nan': 'name:nan', 'name:nah': 'name:nah', 'name:na': 'name:na', 'name:myv': 'name:myv', 'name:my': 'name:my', 'name:mt': 'name:mt', 'name:ms': 'name:ms', 'name:mrj': 'name:mrj', 'name:mr': 'name:mr', 'name:mn': 'name:mn', 'name:ml': 'name:ml', 'name:mk': 'name:mk', 'name:mi': 'name:mi', 'name:mhr': 'name:mhr', 'name:mg': 'name:mg', 'name:mdf': 'name:mdf', 'name:lzh': 'name:lzh', 'name:lv': 'name:lv', 'name:ltg': 'name:ltg', 'name:ln': 'name:ln', 'name:lmo': 'name:lmo', 'name:lij': 'name:lij', 'name:li': 'name:li', 'name:lg': 'name:lg', 'name:lez': 'name:lez', 'name:lb': 'name:lb', 'name:lad': 'name:lad', 'name:ky': 'name:ky', 'name:kw': 'name:kw', 'name:kv': 'name:kv', 'name:ku': 'name:ku', 'name:ksh': 'name:ksh', 'name:ks': 'name:ks', 'name:krc': 'name: