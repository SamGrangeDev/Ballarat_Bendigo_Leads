ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([1012297.023185, -4145013.455760, 1265144.272127, -4012011.047069]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LGABOUNDARY_1 = new ol.format.GeoJSON();
var features_LGABOUNDARY_1 = format_LGABOUNDARY_1.readFeatures(json_LGABOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_LGABOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGABOUNDARY_1.addFeatures(features_LGABOUNDARY_1);
var lyr_LGABOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGABOUNDARY_1, 
                style: style_LGABOUNDARY_1,
                popuplayertitle: "LGA BOUNDARY",
                interactive: false,
                title: '<img src="styles/legend/LGABOUNDARY_1.png" /> LGA BOUNDARY'
            });
var format_waterwaysbuffered_2 = new ol.format.GeoJSON();
var features_waterwaysbuffered_2 = format_waterwaysbuffered_2.readFeatures(json_waterwaysbuffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_waterwaysbuffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterwaysbuffered_2.addFeatures(features_waterwaysbuffered_2);
var lyr_waterwaysbuffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterwaysbuffered_2, 
                style: style_waterwaysbuffered_2,
                popuplayertitle: "waterways buffered",
                interactive: false,
                title: '<img src="styles/legend/waterwaysbuffered_2.png" /> waterways buffered'
            });
var format_FOFloodwayOverlay_3 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_3 = format_FOFloodwayOverlay_3.readFeatures(json_FOFloodwayOverlay_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_FOFloodwayOverlay_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_3.addFeatures(features_FOFloodwayOverlay_3);
var lyr_FOFloodwayOverlay_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_3, 
                style: style_FOFloodwayOverlay_3,
                popuplayertitle: "FO - Floodway Overlay",
                interactive: false,
                title: '<img src="styles/legend/FOFloodwayOverlay_3.png" /> FO - Floodway Overlay'
            });
var format_HOHeritageOverlay_4 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_4 = format_HOHeritageOverlay_4.readFeatures(json_HOHeritageOverlay_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_HOHeritageOverlay_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_4.addFeatures(features_HOHeritageOverlay_4);
var lyr_HOHeritageOverlay_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_4, 
                style: style_HOHeritageOverlay_4,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_4.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_5 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_5 = format_LSIOLandSubjecttoInundationOverlay_5.readFeatures(json_LSIOLandSubjecttoInundationOverlay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_5.addFeatures(features_LSIOLandSubjecttoInundationOverlay_5);
var lyr_LSIOLandSubjecttoInundationOverlay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_5, 
                style: style_LSIOLandSubjecttoInundationOverlay_5,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_5.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_6 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_6 = format_VPOVegetationProtectionOverlay_6.readFeatures(json_VPOVegetationProtectionOverlay_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_VPOVegetationProtectionOverlay_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_6.addFeatures(features_VPOVegetationProtectionOverlay_6);
var lyr_VPOVegetationProtectionOverlay_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_6, 
                style: style_VPOVegetationProtectionOverlay_6,
                popuplayertitle: "VPO- Vegetation Protection Overlay",
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_6.png" /> VPO- Vegetation Protection Overlay'
            });
var format_EasementsNOTDEDUCTED_7 = new ol.format.GeoJSON();
var features_EasementsNOTDEDUCTED_7 = format_EasementsNOTDEDUCTED_7.readFeatures(json_EasementsNOTDEDUCTED_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_EasementsNOTDEDUCTED_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EasementsNOTDEDUCTED_7.addFeatures(features_EasementsNOTDEDUCTED_7);
var lyr_EasementsNOTDEDUCTED_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EasementsNOTDEDUCTED_7, 
                style: style_EasementsNOTDEDUCTED_7,
                popuplayertitle: "Easements (NOT DEDUCTED)",
                interactive: false,
                title: '<img src="styles/legend/EasementsNOTDEDUCTED_7.png" /> Easements (NOT DEDUCTED)'
            });
var format_RXORoadClosureOverlay_8 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_8 = format_RXORoadClosureOverlay_8.readFeatures(json_RXORoadClosureOverlay_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_RXORoadClosureOverlay_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_8.addFeatures(features_RXORoadClosureOverlay_8);
var lyr_RXORoadClosureOverlay_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_8, 
                style: style_RXORoadClosureOverlay_8,
                popuplayertitle: "RXO - Road Closure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RXORoadClosureOverlay_8.png" /> RXO - Road Closure Overlay'
            });
var format_PAOPublicAcquisitionOverlay_9 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_9 = format_PAOPublicAcquisitionOverlay_9.readFeatures(json_PAOPublicAcquisitionOverlay_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_PAOPublicAcquisitionOverlay_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_9.addFeatures(features_PAOPublicAcquisitionOverlay_9);
var lyr_PAOPublicAcquisitionOverlay_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_9, 
                style: style_PAOPublicAcquisitionOverlay_9,
                popuplayertitle: "PAO - Public Acquisition Overlay",
                interactive: false,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_9.png" /> PAO - Public Acquisition Overlay'
            });
var format_BMOBushfire_Management_Overlay_10 = new ol.format.GeoJSON();
var features_BMOBushfire_Management_Overlay_10 = format_BMOBushfire_Management_Overlay_10.readFeatures(json_BMOBushfire_Management_Overlay_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_BMOBushfire_Management_Overlay_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfire_Management_Overlay_10.addFeatures(features_BMOBushfire_Management_Overlay_10);
var lyr_BMOBushfire_Management_Overlay_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfire_Management_Overlay_10, 
                style: style_BMOBushfire_Management_Overlay_10,
                popuplayertitle: "BMO-Bushfire_Management_Overlay",
                interactive: false,
                title: '<img src="styles/legend/BMOBushfire_Management_Overlay_10.png" /> BMO-Bushfire_Management_Overlay'
            });
var format_BAOBufferAreaOverlay_11 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_11 = format_BAOBufferAreaOverlay_11.readFeatures(json_BAOBufferAreaOverlay_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_BAOBufferAreaOverlay_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_11.addFeatures(features_BAOBufferAreaOverlay_11);
var lyr_BAOBufferAreaOverlay_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_11, 
                style: style_BAOBufferAreaOverlay_11,
                popuplayertitle: "BAO-Buffer Area Overlay",
                interactive: false,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_11.png" /> BAO-Buffer Area Overlay'
            });
var format_ESOEnvironmental_Significance_Overlay_12 = new ol.format.GeoJSON();
var features_ESOEnvironmental_Significance_Overlay_12 = format_ESOEnvironmental_Significance_Overlay_12.readFeatures(json_ESOEnvironmental_Significance_Overlay_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ESOEnvironmental_Significance_Overlay_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmental_Significance_Overlay_12.addFeatures(features_ESOEnvironmental_Significance_Overlay_12);
var lyr_ESOEnvironmental_Significance_Overlay_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmental_Significance_Overlay_12, 
                style: style_ESOEnvironmental_Significance_Overlay_12,
                popuplayertitle: "ESO-Environmental_Significance_Overlay",
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmental_Significance_Overlay_12.png" /> ESO-Environmental_Significance_Overlay'
            });
var format_SLOSignificantLandscapeOverlay_13 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_13 = format_SLOSignificantLandscapeOverlay_13.readFeatures(json_SLOSignificantLandscapeOverlay_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_SLOSignificantLandscapeOverlay_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_13.addFeatures(features_SLOSignificantLandscapeOverlay_13);
var lyr_SLOSignificantLandscapeOverlay_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_13, 
                style: style_SLOSignificantLandscapeOverlay_13,
                popuplayertitle: "SLO-Significant Landscape Overlay",
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_13.png" /> SLO-Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_14 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_14 = format_SROStateResourceOverlay_14.readFeatures(json_SROStateResourceOverlay_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_SROStateResourceOverlay_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_14.addFeatures(features_SROStateResourceOverlay_14);
var lyr_SROStateResourceOverlay_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_14, 
                style: style_SROStateResourceOverlay_14,
                popuplayertitle: "SRO-State Resource Overlay",
                interactive: false,
                title: '<img src="styles/legend/SROStateResourceOverlay_14.png" /> SRO-State Resource Overlay'
            });
var format_RORestructureOverlay_15 = new ol.format.GeoJSON();
var features_RORestructureOverlay_15 = format_RORestructureOverlay_15.readFeatures(json_RORestructureOverlay_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_RORestructureOverlay_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_15.addFeatures(features_RORestructureOverlay_15);
var lyr_RORestructureOverlay_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_15, 
                style: style_RORestructureOverlay_15,
                popuplayertitle: "RO-Restructure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_15.png" /> RO-Restructure Overlay'
            });
var format_Zoning_16 = new ol.format.GeoJSON();
var features_Zoning_16 = format_Zoning_16.readFeatures(json_Zoning_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_Zoning_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoning_16.addFeatures(features_Zoning_16);
var lyr_Zoning_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoning_16, 
                style: style_Zoning_16,
                popuplayertitle: "Zoning",
                interactive: true,
    title: 'Zoning<br />\
    <img src="styles/legend/Zoning_16_0.png" /> C1Z<br />\
    <img src="styles/legend/Zoning_16_1.png" /> C2Z<br />\
    <img src="styles/legend/Zoning_16_2.png" /> CA<br />\
    <img src="styles/legend/Zoning_16_3.png" /> CDZ1<br />\
    <img src="styles/legend/Zoning_16_4.png" /> CDZ2<br />\
    <img src="styles/legend/Zoning_16_5.png" /> CDZ3<br />\
    <img src="styles/legend/Zoning_16_6.png" /> FZ<br />\
    <img src="styles/legend/Zoning_16_7.png" /> FZ1<br />\
    <img src="styles/legend/Zoning_16_8.png" /> FZ2<br />\
    <img src="styles/legend/Zoning_16_9.png" /> FZ3<br />\
    <img src="styles/legend/Zoning_16_10.png" /> GRZ<br />\
    <img src="styles/legend/Zoning_16_11.png" /> GRZ1<br />\
    <img src="styles/legend/Zoning_16_12.png" /> IN1Z<br />\
    <img src="styles/legend/Zoning_16_13.png" /> IN3Z<br />\
    <img src="styles/legend/Zoning_16_14.png" /> LDRZ<br />\
    <img src="styles/legend/Zoning_16_15.png" /> LDRZ1<br />\
    <img src="styles/legend/Zoning_16_16.png" /> LDRZ2<br />\
    <img src="styles/legend/Zoning_16_17.png" /> LDRZ3<br />\
    <img src="styles/legend/Zoning_16_18.png" /> LDRZ4<br />\
    <img src="styles/legend/Zoning_16_19.png" /> LDRZ5<br />\
    <img src="styles/legend/Zoning_16_20.png" /> MUZ<br />\
    <img src="styles/legend/Zoning_16_21.png" /> MUZ1<br />\
    <img src="styles/legend/Zoning_16_22.png" /> MUZ2<br />\
    <img src="styles/legend/Zoning_16_23.png" /> NRZ1<br />\
    <img src="styles/legend/Zoning_16_24.png" /> NRZ2<br />\
    <img src="styles/legend/Zoning_16_25.png" /> NRZ3<br />\
    <img src="styles/legend/Zoning_16_26.png" /> PCRZ<br />\
    <img src="styles/legend/Zoning_16_27.png" /> PPRZ<br />\
    <img src="styles/legend/Zoning_16_28.png" /> PUZ1<br />\
    <img src="styles/legend/Zoning_16_29.png" /> PUZ2<br />\
    <img src="styles/legend/Zoning_16_30.png" /> PUZ3<br />\
    <img src="styles/legend/Zoning_16_31.png" /> PUZ5<br />\
    <img src="styles/legend/Zoning_16_32.png" /> PUZ6<br />\
    <img src="styles/legend/Zoning_16_33.png" /> PUZ7<br />\
    <img src="styles/legend/Zoning_16_34.png" /> RCZ1<br />\
    <img src="styles/legend/Zoning_16_35.png" /> RCZ2<br />\
    <img src="styles/legend/Zoning_16_36.png" /> RCZ3<br />\
    <img src="styles/legend/Zoning_16_37.png" /> RCZ4<br />\
    <img src="styles/legend/Zoning_16_38.png" /> RGZ<br />\
    <img src="styles/legend/Zoning_16_39.png" /> RGZ1<br />\
    <img src="styles/legend/Zoning_16_40.png" /> RGZ2<br />\
    <img src="styles/legend/Zoning_16_41.png" /> RGZ3<br />\
    <img src="styles/legend/Zoning_16_42.png" /> RLZ<br />\
    <img src="styles/legend/Zoning_16_43.png" /> RLZ1<br />\
    <img src="styles/legend/Zoning_16_44.png" /> RLZ2<br />\
    <img src="styles/legend/Zoning_16_45.png" /> RLZ3<br />\
    <img src="styles/legend/Zoning_16_46.png" /> RLZ4<br />\
    <img src="styles/legend/Zoning_16_47.png" /> RLZ5<br />\
    <img src="styles/legend/Zoning_16_48.png" /> SUZ1<br />\
    <img src="styles/legend/Zoning_16_49.png" /> SUZ10<br />\
    <img src="styles/legend/Zoning_16_50.png" /> SUZ11<br />\
    <img src="styles/legend/Zoning_16_51.png" /> SUZ12<br />\
    <img src="styles/legend/Zoning_16_52.png" /> SUZ13<br />\
    <img src="styles/legend/Zoning_16_53.png" /> SUZ14<br />\
    <img src="styles/legend/Zoning_16_54.png" /> SUZ15<br />\
    <img src="styles/legend/Zoning_16_55.png" /> SUZ16<br />\
    <img src="styles/legend/Zoning_16_56.png" /> SUZ2<br />\
    <img src="styles/legend/Zoning_16_57.png" /> SUZ3<br />\
    <img src="styles/legend/Zoning_16_58.png" /> SUZ4<br />\
    <img src="styles/legend/Zoning_16_59.png" /> SUZ5<br />\
    <img src="styles/legend/Zoning_16_60.png" /> SUZ6<br />\
    <img src="styles/legend/Zoning_16_61.png" /> SUZ7<br />\
    <img src="styles/legend/Zoning_16_62.png" /> SUZ8<br />\
    <img src="styles/legend/Zoning_16_63.png" /> SUZ9<br />\
    <img src="styles/legend/Zoning_16_64.png" /> TRZ1<br />\
    <img src="styles/legend/Zoning_16_65.png" /> TRZ2<br />\
    <img src="styles/legend/Zoning_16_66.png" /> TRZ3<br />\
    <img src="styles/legend/Zoning_16_67.png" /> TZ<br />\
    <img src="styles/legend/Zoning_16_68.png" /> UFZ<br />\
    <img src="styles/legend/Zoning_16_69.png" /> UGZ<br />\
    <img src="styles/legend/Zoning_16_70.png" /> UGZ1<br />\
    <img src="styles/legend/Zoning_16_71.png" /> UGZ2<br />\
    <img src="styles/legend/Zoning_16_72.png" /> <br />'
        });
var format_ParcelBoundaryBendigo_17 = new ol.format.GeoJSON();
var features_ParcelBoundaryBendigo_17 = format_ParcelBoundaryBendigo_17.readFeatures(json_ParcelBoundaryBendigo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ParcelBoundaryBendigo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelBoundaryBendigo_17.addFeatures(features_ParcelBoundaryBendigo_17);
var lyr_ParcelBoundaryBendigo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelBoundaryBendigo_17, 
                style: style_ParcelBoundaryBendigo_17,
                popuplayertitle: "Parcel Boundary Bendigo",
                interactive: true,
                title: '<img src="styles/legend/ParcelBoundaryBendigo_17.png" /> Parcel Boundary Bendigo'
            });
var format_ParcelBoundaryBallarat_18 = new ol.format.GeoJSON();
var features_ParcelBoundaryBallarat_18 = format_ParcelBoundaryBallarat_18.readFeatures(json_ParcelBoundaryBallarat_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ParcelBoundaryBallarat_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelBoundaryBallarat_18.addFeatures(features_ParcelBoundaryBallarat_18);
var lyr_ParcelBoundaryBallarat_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelBoundaryBallarat_18, 
                style: style_ParcelBoundaryBallarat_18,
                popuplayertitle: "Parcel Boundary Ballarat",
                interactive: true,
                title: '<img src="styles/legend/ParcelBoundaryBallarat_18.png" /> Parcel Boundary Ballarat'
            });
var format_TopLeadsZoned_19 = new ol.format.GeoJSON();
var features_TopLeadsZoned_19 = format_TopLeadsZoned_19.readFeatures(json_TopLeadsZoned_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_TopLeadsZoned_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopLeadsZoned_19.addFeatures(features_TopLeadsZoned_19);
var lyr_TopLeadsZoned_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopLeadsZoned_19, 
                style: style_TopLeadsZoned_19,
                popuplayertitle: "Top Leads (Zoned)",
                interactive: true,
                title: '<img src="styles/legend/TopLeadsZoned_19.png" /> Top Leads (Zoned)'
            });
var group_Parcel = new ol.layer.Group({
                                layers: [lyr_ParcelBoundaryBendigo_17,lyr_ParcelBoundaryBallarat_18,lyr_TopLeadsZoned_19,],
                                fold: "open",
                                title: "Parcel"});
var group_ovlREPO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ovl REPO"});
var group_stbeesNDH = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "st bees NDH"});
var group_Overlays = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Overlays"});
var group_Strategic = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Strategic"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_Zoning_16,],
                                fold: "open",
                                title: "Zoning"});
var group_LockyerValley = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lockyer Valley"});
var group_Notusing = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Not using"});
var group_Deduct = new ol.layer.Group({
                                layers: [lyr_waterwaysbuffered_2,lyr_FOFloodwayOverlay_3,lyr_HOHeritageOverlay_4,lyr_LSIOLandSubjecttoInundationOverlay_5,lyr_VPOVegetationProtectionOverlay_6,lyr_EasementsNOTDEDUCTED_7,],
                                fold: "open",
                                title: "Deduct"});
var group_Infrastructure = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Infrastructure"});
var group_NOTETODD = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "NOTE TO DD"});
var group_FraserCoast = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Fraser Coast"});
var group_DevArea = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Dev Area"});
var group_TrunkParks = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Trunk Parks"});
var group_TrunkStormwater = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Trunk Storm water"});
var group_TrunkTransport = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Trunk Transport"});
var group_PIA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PIA"});
var group_Administrative = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Administrative"});
var group_Gympie = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Gympie"});
var group_Somerset = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Somerset"});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "sub-group1"});
var group_binniesRoad = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "binnies Road"});
var group_hutRoad = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "hut Road"});
var group_STRATEGIC = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "STRATEGIC"});
var group_VIC2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VIC2"});
var group_NoteToDD = new ol.layer.Group({
                                layers: [lyr_RXORoadClosureOverlay_8,lyr_PAOPublicAcquisitionOverlay_9,lyr_BMOBushfire_Management_Overlay_10,lyr_BAOBufferAreaOverlay_11,lyr_ESOEnvironmental_Significance_Overlay_12,lyr_SLOSignificantLandscapeOverlay_13,lyr_SROStateResourceOverlay_14,lyr_RORestructureOverlay_15,],
                                fold: "open",
                                title: "Note To DD"});
var group_LGA = new ol.layer.Group({
                                layers: [lyr_LGABOUNDARY_1,],
                                fold: "open",
                                title: "LGA"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_LGABOUNDARY_1.setVisible(true);lyr_waterwaysbuffered_2.setVisible(false);lyr_FOFloodwayOverlay_3.setVisible(false);lyr_HOHeritageOverlay_4.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_5.setVisible(false);lyr_VPOVegetationProtectionOverlay_6.setVisible(false);lyr_EasementsNOTDEDUCTED_7.setVisible(false);lyr_RXORoadClosureOverlay_8.setVisible(false);lyr_PAOPublicAcquisitionOverlay_9.setVisible(false);lyr_BMOBushfire_Management_Overlay_10.setVisible(false);lyr_BAOBufferAreaOverlay_11.setVisible(false);lyr_ESOEnvironmental_Significance_Overlay_12.setVisible(false);lyr_SLOSignificantLandscapeOverlay_13.setVisible(false);lyr_SROStateResourceOverlay_14.setVisible(false);lyr_RORestructureOverlay_15.setVisible(false);lyr_Zoning_16.setVisible(false);lyr_ParcelBoundaryBendigo_17.setVisible(false);lyr_ParcelBoundaryBallarat_18.setVisible(false);lyr_TopLeadsZoned_19.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_LGA,group_Deduct,group_NoteToDD,group_Zoning,group_Parcel];
lyr_LGABOUNDARY_1.set('fieldAliases', {'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', 'Data_Total target 2051': 'Data_Total target 2051', });
lyr_waterwaysbuffered_2.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_FOFloodwayOverlay_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HOHeritageOverlay_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VPOVegetationProtectionOverlay_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EasementsNOTDEDUCTED_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ufi': 'ufi', 'pfi': 'pfi', 'status': 'status', 'task_id': 'task_id', 'pfi_create': 'pfi_create', 'ufi_old': 'ufi_old', 'ufi_create': 'ufi_create', 'Shape__Len': 'Shape__Len', });
lyr_RXORoadClosureOverlay_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfire_Management_Overlay_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BAOBufferAreaOverlay_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ESOEnvironmental_Significance_Overlay_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLOSignificantLandscapeOverlay_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SROStateResourceOverlay_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RORestructureOverlay_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zoning_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'LGA': 'LGA', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', });
lyr_ParcelBoundaryBendigo_17.set('fieldAliases', {'fid': 'fid', 'PARCEL_PFI': 'PARCEL_PFI', 'PARCEL_SPI': 'PARCEL_SPI', 'PC_LGAC': 'PC_LGAC', 'PC_PLANNO': 'PC_PLANNO', 'PC_LOTNO': 'PC_LOTNO', 'PARC_ACCLT': 'PARC_ACCLT', 'PC_ALL': 'PC_ALL', 'PC_BLK': 'PC_BLK', 'PC_PNUM': 'PC_PNUM', 'Gross HA': 'Gross HA', });
lyr_ParcelBoundaryBallarat_18.set('fieldAliases', {'fid': 'fid', 'PARCEL_PFI': 'PARCEL_PFI', 'PARCEL_SPI': 'PARCEL_SPI', 'PC_LGAC': 'PC_LGAC', 'PC_PLANNO': 'PC_PLANNO', 'PC_LOTNO': 'PC_LOTNO', 'PARC_ACCLT': 'PARC_ACCLT', 'PC_ALL': 'PC_ALL', 'PC_BLK': 'PC_BLK', 'PC_PNUM': 'PC_PNUM', 'Gross HA': 'Gross HA', });
lyr_TopLeadsZoned_19.set('fieldAliases', {'Gross HA': 'Gross HA', 'LGA': 'LGA', 'ZONE_CODE': 'ZONE_CODE', 'Zone 1 Ha': 'Zone 1 Ha', 'NDH.': 'NDH.', 'Address': 'Address', 'Lead Link': 'Lead Link', 'P_Lot size': 'P_Lot size', });
lyr_LGABOUNDARY_1.set('fieldImages', {'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'Data_Total target 2051': 'Range', });
lyr_waterwaysbuffered_2.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FOFloodwayOverlay_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HOHeritageOverlay_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LSIOLandSubjecttoInundationOverlay_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VPOVegetationProtectionOverlay_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EasementsNOTDEDUCTED_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ufi': 'TextEdit', 'pfi': 'TextEdit', 'status': 'TextEdit', 'task_id': 'TextEdit', 'pfi_create': 'TextEdit', 'ufi_old': 'TextEdit', 'ufi_create': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_RXORoadClosureOverlay_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PAOPublicAcquisitionOverlay_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BMOBushfire_Management_Overlay_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BAOBufferAreaOverlay_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ESOEnvironmental_Significance_Overlay_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SROStateResourceOverlay_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RORestructureOverlay_15.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Zoning_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', });
lyr_ParcelBoundaryBendigo_17.set('fieldImages', {'fid': 'TextEdit', 'PARCEL_PFI': 'TextEdit', 'PARCEL_SPI': 'TextEdit', 'PC_LGAC': 'TextEdit', 'PC_PLANNO': 'TextEdit', 'PC_LOTNO': 'TextEdit', 'PARC_ACCLT': 'TextEdit', 'PC_ALL': 'TextEdit', 'PC_BLK': 'TextEdit', 'PC_PNUM': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_ParcelBoundaryBallarat_18.set('fieldImages', {'fid': 'TextEdit', 'PARCEL_PFI': 'TextEdit', 'PARCEL_SPI': 'TextEdit', 'PC_LGAC': 'TextEdit', 'PC_PLANNO': 'TextEdit', 'PC_LOTNO': 'TextEdit', 'PARC_ACCLT': 'TextEdit', 'PC_ALL': 'TextEdit', 'PC_BLK': 'TextEdit', 'PC_PNUM': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_TopLeadsZoned_19.set('fieldImages', {'Gross HA': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'Zone 1 Ha': 'TextEdit', 'NDH.': 'TextEdit', 'Address': '', 'Lead Link': '', 'P_Lot size': '', });
lyr_LGABOUNDARY_1.set('fieldLabels', {'LGA_CODE24': 'no label', 'LGA_NAME24': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM': 'no label', 'LOCI_URI21': 'no label', 'Data_Total target 2051': 'no label', });
lyr_waterwaysbuffered_2.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_FOFloodwayOverlay_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HOHeritageOverlay_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LSIOLandSubjecttoInundationOverlay_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VPOVegetationProtectionOverlay_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_EasementsNOTDEDUCTED_7.set('fieldLabels', {'OBJECTID': 'no label', 'ufi': 'no label', 'pfi': 'no label', 'status': 'no label', 'task_id': 'no label', 'pfi_create': 'no label', 'ufi_old': 'no label', 'ufi_create': 'no label', 'Shape__Len': 'no label', });
lyr_RXORoadClosureOverlay_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PAOPublicAcquisitionOverlay_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BMOBushfire_Management_Overlay_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BAOBufferAreaOverlay_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ESOEnvironmental_Significance_Overlay_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SLOSignificantLandscapeOverlay_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SROStateResourceOverlay_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RORestructureOverlay_15.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zoning_16.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'LGA': 'inline label - always visible', 'ZONE_CODE': 'inline label - always visible', 'ZONE_DESCRIPTION': 'inline label - always visible', });
lyr_ParcelBoundaryBendigo_17.set('fieldLabels', {'fid': 'no label', 'PARCEL_PFI': 'no label', 'PARCEL_SPI': 'no label', 'PC_LGAC': 'no label', 'PC_PLANNO': 'inline label - visible with data', 'PC_LOTNO': 'inline label - visible with data', 'PARC_ACCLT': 'no label', 'PC_ALL': 'no label', 'PC_BLK': 'no label', 'PC_PNUM': 'no label', 'Gross HA': 'inline label - always visible', });
lyr_ParcelBoundaryBallarat_18.set('fieldLabels', {'fid': 'no label', 'PARCEL_PFI': 'no label', 'PARCEL_SPI': 'no label', 'PC_LGAC': 'no label', 'PC_PLANNO': 'inline label - visible with data', 'PC_LOTNO': 'inline label - visible with data', 'PARC_ACCLT': 'no label', 'PC_ALL': 'no label', 'PC_BLK': 'no label', 'PC_PNUM': 'no label', 'Gross HA': 'inline label - visible with data', });
lyr_TopLeadsZoned_19.set('fieldLabels', {'Gross HA': 'inline label - visible with data', 'LGA': 'inline label - visible with data', 'ZONE_CODE': 'inline label - visible with data', 'Zone 1 Ha': 'header label - visible with data', 'NDH.': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'P_Lot size': 'inline label - always visible', });
lyr_TopLeadsZoned_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});