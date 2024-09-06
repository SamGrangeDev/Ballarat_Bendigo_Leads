ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9473").setExtent([1051377.773730, -4106445.692686, 1245277.352693, -4006693.886168]);
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
var format_waterwaysbuffered_1 = new ol.format.GeoJSON();
var features_waterwaysbuffered_1 = format_waterwaysbuffered_1.readFeatures(json_waterwaysbuffered_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_waterwaysbuffered_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterwaysbuffered_1.addFeatures(features_waterwaysbuffered_1);
var lyr_waterwaysbuffered_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterwaysbuffered_1, 
                style: style_waterwaysbuffered_1,
                popuplayertitle: "waterways buffered",
                interactive: false,
                title: '<img src="styles/legend/waterwaysbuffered_1.png" /> waterways buffered'
            });
var format_FOFloodwayOverlay_2 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_2 = format_FOFloodwayOverlay_2.readFeatures(json_FOFloodwayOverlay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_FOFloodwayOverlay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_2.addFeatures(features_FOFloodwayOverlay_2);
var lyr_FOFloodwayOverlay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_2, 
                style: style_FOFloodwayOverlay_2,
                popuplayertitle: "FO - Floodway Overlay",
                interactive: false,
                title: '<img src="styles/legend/FOFloodwayOverlay_2.png" /> FO - Floodway Overlay'
            });
var format_HOHeritageOverlay_3 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_3 = format_HOHeritageOverlay_3.readFeatures(json_HOHeritageOverlay_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_HOHeritageOverlay_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_3.addFeatures(features_HOHeritageOverlay_3);
var lyr_HOHeritageOverlay_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_3, 
                style: style_HOHeritageOverlay_3,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_3.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_4 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_4 = format_LSIOLandSubjecttoInundationOverlay_4.readFeatures(json_LSIOLandSubjecttoInundationOverlay_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_4.addFeatures(features_LSIOLandSubjecttoInundationOverlay_4);
var lyr_LSIOLandSubjecttoInundationOverlay_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_4, 
                style: style_LSIOLandSubjecttoInundationOverlay_4,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_4.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_5 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_5 = format_VPOVegetationProtectionOverlay_5.readFeatures(json_VPOVegetationProtectionOverlay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_VPOVegetationProtectionOverlay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_5.addFeatures(features_VPOVegetationProtectionOverlay_5);
var lyr_VPOVegetationProtectionOverlay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_5, 
                style: style_VPOVegetationProtectionOverlay_5,
                popuplayertitle: "VPO- Vegetation Protection Overlay",
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_5.png" /> VPO- Vegetation Protection Overlay'
            });
var format_EasementsNOTDEDUCTED_6 = new ol.format.GeoJSON();
var features_EasementsNOTDEDUCTED_6 = format_EasementsNOTDEDUCTED_6.readFeatures(json_EasementsNOTDEDUCTED_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_EasementsNOTDEDUCTED_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EasementsNOTDEDUCTED_6.addFeatures(features_EasementsNOTDEDUCTED_6);
var lyr_EasementsNOTDEDUCTED_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EasementsNOTDEDUCTED_6, 
                style: style_EasementsNOTDEDUCTED_6,
                popuplayertitle: "Easements (NOT DEDUCTED)",
                interactive: false,
                title: '<img src="styles/legend/EasementsNOTDEDUCTED_6.png" /> Easements (NOT DEDUCTED)'
            });
var format_RXORoadClosureOverlay_7 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_7 = format_RXORoadClosureOverlay_7.readFeatures(json_RXORoadClosureOverlay_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_RXORoadClosureOverlay_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_7.addFeatures(features_RXORoadClosureOverlay_7);
var lyr_RXORoadClosureOverlay_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_7, 
                style: style_RXORoadClosureOverlay_7,
                popuplayertitle: "RXO - Road Closure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RXORoadClosureOverlay_7.png" /> RXO - Road Closure Overlay'
            });
var format_PAOPublicAcquisitionOverlay_8 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_8 = format_PAOPublicAcquisitionOverlay_8.readFeatures(json_PAOPublicAcquisitionOverlay_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_PAOPublicAcquisitionOverlay_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_8.addFeatures(features_PAOPublicAcquisitionOverlay_8);
var lyr_PAOPublicAcquisitionOverlay_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_8, 
                style: style_PAOPublicAcquisitionOverlay_8,
                popuplayertitle: "PAO - Public Acquisition Overlay",
                interactive: false,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_8.png" /> PAO - Public Acquisition Overlay'
            });
var format_BMOBushfire_Management_Overlay_9 = new ol.format.GeoJSON();
var features_BMOBushfire_Management_Overlay_9 = format_BMOBushfire_Management_Overlay_9.readFeatures(json_BMOBushfire_Management_Overlay_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_BMOBushfire_Management_Overlay_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfire_Management_Overlay_9.addFeatures(features_BMOBushfire_Management_Overlay_9);
var lyr_BMOBushfire_Management_Overlay_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfire_Management_Overlay_9, 
                style: style_BMOBushfire_Management_Overlay_9,
                popuplayertitle: "BMO-Bushfire_Management_Overlay",
                interactive: false,
                title: '<img src="styles/legend/BMOBushfire_Management_Overlay_9.png" /> BMO-Bushfire_Management_Overlay'
            });
var format_BAOBufferAreaOverlay_10 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_10 = format_BAOBufferAreaOverlay_10.readFeatures(json_BAOBufferAreaOverlay_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_BAOBufferAreaOverlay_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_10.addFeatures(features_BAOBufferAreaOverlay_10);
var lyr_BAOBufferAreaOverlay_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_10, 
                style: style_BAOBufferAreaOverlay_10,
                popuplayertitle: "BAO-Buffer Area Overlay",
                interactive: false,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_10.png" /> BAO-Buffer Area Overlay'
            });
var format_ESOEnvironmental_Significance_Overlay_11 = new ol.format.GeoJSON();
var features_ESOEnvironmental_Significance_Overlay_11 = format_ESOEnvironmental_Significance_Overlay_11.readFeatures(json_ESOEnvironmental_Significance_Overlay_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ESOEnvironmental_Significance_Overlay_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmental_Significance_Overlay_11.addFeatures(features_ESOEnvironmental_Significance_Overlay_11);
var lyr_ESOEnvironmental_Significance_Overlay_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmental_Significance_Overlay_11, 
                style: style_ESOEnvironmental_Significance_Overlay_11,
                popuplayertitle: "ESO-Environmental_Significance_Overlay",
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmental_Significance_Overlay_11.png" /> ESO-Environmental_Significance_Overlay'
            });
var format_SLOSignificantLandscapeOverlay_12 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_12 = format_SLOSignificantLandscapeOverlay_12.readFeatures(json_SLOSignificantLandscapeOverlay_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_SLOSignificantLandscapeOverlay_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_12.addFeatures(features_SLOSignificantLandscapeOverlay_12);
var lyr_SLOSignificantLandscapeOverlay_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_12, 
                style: style_SLOSignificantLandscapeOverlay_12,
                popuplayertitle: "SLO-Significant Landscape Overlay",
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_12.png" /> SLO-Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_13 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_13 = format_SROStateResourceOverlay_13.readFeatures(json_SROStateResourceOverlay_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_SROStateResourceOverlay_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_13.addFeatures(features_SROStateResourceOverlay_13);
var lyr_SROStateResourceOverlay_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_13, 
                style: style_SROStateResourceOverlay_13,
                popuplayertitle: "SRO-State Resource Overlay",
                interactive: false,
                title: '<img src="styles/legend/SROStateResourceOverlay_13.png" /> SRO-State Resource Overlay'
            });
var format_RORestructureOverlay_14 = new ol.format.GeoJSON();
var features_RORestructureOverlay_14 = format_RORestructureOverlay_14.readFeatures(json_RORestructureOverlay_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_RORestructureOverlay_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_14.addFeatures(features_RORestructureOverlay_14);
var lyr_RORestructureOverlay_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_14, 
                style: style_RORestructureOverlay_14,
                popuplayertitle: "RO-Restructure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_14.png" /> RO-Restructure Overlay'
            });
var format_ZonedAreas_15 = new ol.format.GeoJSON();
var features_ZonedAreas_15 = format_ZonedAreas_15.readFeatures(json_ZonedAreas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_ZonedAreas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedAreas_15.addFeatures(features_ZonedAreas_15);
var lyr_ZonedAreas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedAreas_15, 
                style: style_ZonedAreas_15,
                popuplayertitle: "Zoned Areas",
                interactive: true,
    title: 'Zoned Areas<br />\
    <img src="styles/legend/ZonedAreas_15_0.png" /> COMPREHENSIVE DEVELOPMENT ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_1.png" /> COMPREHENSIVE DEVELOPMENT ZONE - SCHEDULE 2<br />\
    <img src="styles/legend/ZonedAreas_15_2.png" /> COMPREHENSIVE DEVELOPMENT ZONE - SCHEDULE 3<br />\
    <img src="styles/legend/ZonedAreas_15_3.png" /> GENERAL RESIDENTIAL ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_4.png" /> GENERAL RESIDENTIAL ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_5.png" /> LOW DENSITY RESIDENTIAL ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_6.png" /> LOW DENSITY RESIDENTIAL ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_7.png" /> LOW DENSITY RESIDENTIAL ZONE - SCHEDULE 2<br />\
    <img src="styles/legend/ZonedAreas_15_8.png" /> LOW DENSITY RESIDENTIAL ZONE - SCHEDULE 3<br />\
    <img src="styles/legend/ZonedAreas_15_9.png" /> LOW DENSITY RESIDENTIAL ZONE - SCHEDULE 4<br />\
    <img src="styles/legend/ZonedAreas_15_10.png" /> LOW DENSITY RESIDENTIAL ZONE - SCHEDULE 5<br />\
    <img src="styles/legend/ZonedAreas_15_11.png" /> MIXED USE ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_12.png" /> MIXED USE ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_13.png" /> MIXED USE ZONE - SCHEDULE 2<br />\
    <img src="styles/legend/ZonedAreas_15_14.png" /> NEIGHBOURHOOD RESIDENTIAL ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_15.png" /> NEIGHBOURHOOD RESIDENTIAL ZONE - SCHEDULE 2<br />\
    <img src="styles/legend/ZonedAreas_15_16.png" /> NEIGHBOURHOOD RESIDENTIAL ZONE - SCHEDULE 3<br />\
    <img src="styles/legend/ZonedAreas_15_17.png" /> RESIDENTIAL GROWTH ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_18.png" /> RESIDENTIAL GROWTH ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_19.png" /> RESIDENTIAL GROWTH ZONE - SCHEDULE 2<br />\
    <img src="styles/legend/ZonedAreas_15_20.png" /> RESIDENTIAL GROWTH ZONE - SCHEDULE 3<br />\
    <img src="styles/legend/ZonedAreas_15_21.png" /> TOWNSHIP ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_22.png" /> URBAN GROWTH ZONE<br />\
    <img src="styles/legend/ZonedAreas_15_23.png" /> URBAN GROWTH ZONE - SCHEDULE 1<br />\
    <img src="styles/legend/ZonedAreas_15_24.png" /> URBAN GROWTH ZONE - SCHEDULE 2<br />'
        });
var format_LGABOUNDARY_16 = new ol.format.GeoJSON();
var features_LGABOUNDARY_16 = format_LGABOUNDARY_16.readFeatures(json_LGABOUNDARY_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9473'});
var jsonSource_LGABOUNDARY_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGABOUNDARY_16.addFeatures(features_LGABOUNDARY_16);
var lyr_LGABOUNDARY_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGABOUNDARY_16, 
                style: style_LGABOUNDARY_16,
                popuplayertitle: "LGA BOUNDARY",
                interactive: false,
                title: '<img src="styles/legend/LGABOUNDARY_16.png" /> LGA BOUNDARY'
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
                                layers: [],
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
                                layers: [],
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
                                layers: [lyr_waterwaysbuffered_1,lyr_FOFloodwayOverlay_2,lyr_HOHeritageOverlay_3,lyr_LSIOLandSubjecttoInundationOverlay_4,lyr_VPOVegetationProtectionOverlay_5,lyr_EasementsNOTDEDUCTED_6,],
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
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_LGABOUNDARY_16,lyr_ParcelBoundaryBendigo_17,lyr_ParcelBoundaryBallarat_18,lyr_TopLeadsZoned_19,],
                                fold: "open",
                                title: "Boundaries"});
var group_PlanningSchemeZones = new ol.layer.Group({
                                layers: [lyr_ZonedAreas_15,],
                                fold: "open",
                                title: "Planning Scheme Zones"});
var group_NoteToDD = new ol.layer.Group({
                                layers: [lyr_RXORoadClosureOverlay_7,lyr_PAOPublicAcquisitionOverlay_8,lyr_BMOBushfire_Management_Overlay_9,lyr_BAOBufferAreaOverlay_10,lyr_ESOEnvironmental_Significance_Overlay_11,lyr_SLOSignificantLandscapeOverlay_12,lyr_SROStateResourceOverlay_13,lyr_RORestructureOverlay_14,],
                                fold: "open",
                                title: "Note To DD"});
var group_OverlaysDeduct = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Overlays Deduct"});
var group_ELSWORTHSTCANADIAN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ELSWORTH ST CANADIAN"});
var group_REPO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "REPO"});
var group_AUS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "AUS"});
var group_group2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "group2"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_waterwaysbuffered_1.setVisible(false);lyr_FOFloodwayOverlay_2.setVisible(false);lyr_HOHeritageOverlay_3.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_4.setVisible(false);lyr_VPOVegetationProtectionOverlay_5.setVisible(false);lyr_EasementsNOTDEDUCTED_6.setVisible(false);lyr_RXORoadClosureOverlay_7.setVisible(false);lyr_PAOPublicAcquisitionOverlay_8.setVisible(false);lyr_BMOBushfire_Management_Overlay_9.setVisible(false);lyr_BAOBufferAreaOverlay_10.setVisible(false);lyr_ESOEnvironmental_Significance_Overlay_11.setVisible(false);lyr_SLOSignificantLandscapeOverlay_12.setVisible(false);lyr_SROStateResourceOverlay_13.setVisible(false);lyr_RORestructureOverlay_14.setVisible(false);lyr_ZonedAreas_15.setVisible(false);lyr_LGABOUNDARY_16.setVisible(true);lyr_ParcelBoundaryBendigo_17.setVisible(false);lyr_ParcelBoundaryBallarat_18.setVisible(false);lyr_TopLeadsZoned_19.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_Deduct,group_NoteToDD,group_PlanningSchemeZones,group_Boundaries];
lyr_waterwaysbuffered_1.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_FOFloodwayOverlay_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HOHeritageOverlay_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VPOVegetationProtectionOverlay_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EasementsNOTDEDUCTED_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ufi': 'ufi', 'pfi': 'pfi', 'status': 'status', 'task_id': 'task_id', 'pfi_create': 'pfi_create', 'ufi_old': 'ufi_old', 'ufi_create': 'ufi_create', 'Shape__Len': 'Shape__Len', });
lyr_RXORoadClosureOverlay_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfire_Management_Overlay_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BAOBufferAreaOverlay_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ESOEnvironmental_Significance_Overlay_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLOSignificantLandscapeOverlay_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SROStateResourceOverlay_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RORestructureOverlay_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZonedAreas_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'LGA': 'LGA', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', });
lyr_LGABOUNDARY_16.set('fieldAliases', {'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', 'Data_Total target 2051': 'Data_Total target 2051', });
lyr_ParcelBoundaryBendigo_17.set('fieldAliases', {'fid': 'fid', 'PARCEL_PFI': 'PARCEL_PFI', 'PARCEL_SPI': 'PARCEL_SPI', 'PC_LGAC': 'PC_LGAC', 'PC_PLANNO': 'PC_PLANNO', 'PC_LOTNO': 'PC_LOTNO', 'PARC_ACCLT': 'PARC_ACCLT', 'PC_ALL': 'PC_ALL', 'PC_BLK': 'PC_BLK', 'PC_PNUM': 'PC_PNUM', 'Gross HA': 'Gross HA', });
lyr_ParcelBoundaryBallarat_18.set('fieldAliases', {'fid': 'fid', 'PARCEL_PFI': 'PARCEL_PFI', 'PARCEL_SPI': 'PARCEL_SPI', 'PC_LGAC': 'PC_LGAC', 'PC_PLANNO': 'PC_PLANNO', 'PC_LOTNO': 'PC_LOTNO', 'PARC_ACCLT': 'PARC_ACCLT', 'PC_ALL': 'PC_ALL', 'PC_BLK': 'PC_BLK', 'PC_PNUM': 'PC_PNUM', 'Gross HA': 'Gross HA', });
lyr_TopLeadsZoned_19.set('fieldAliases', {'Gross HA': 'Gross HA', 'LGA': 'LGA', 'ZONE_CODE': 'ZONE_CODE', 'Zone 1 Ha': 'Zone 1 Ha', 'NDH.': 'NDH.', 'Address': 'Address', 'Lead Link': 'Lead Link', 'P_Lot size': 'P_Lot size', });
lyr_waterwaysbuffered_1.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FOFloodwayOverlay_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HOHeritageOverlay_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LSIOLandSubjecttoInundationOverlay_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VPOVegetationProtectionOverlay_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EasementsNOTDEDUCTED_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ufi': 'TextEdit', 'pfi': 'TextEdit', 'status': 'TextEdit', 'task_id': 'TextEdit', 'pfi_create': 'TextEdit', 'ufi_old': 'TextEdit', 'ufi_create': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_RXORoadClosureOverlay_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PAOPublicAcquisitionOverlay_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BMOBushfire_Management_Overlay_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BAOBufferAreaOverlay_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ESOEnvironmental_Significance_Overlay_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SLOSignificantLandscapeOverlay_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SROStateResourceOverlay_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RORestructureOverlay_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZonedAreas_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', });
lyr_LGABOUNDARY_16.set('fieldImages', {'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'Data_Total target 2051': 'Range', });
lyr_ParcelBoundaryBendigo_17.set('fieldImages', {'fid': 'TextEdit', 'PARCEL_PFI': 'TextEdit', 'PARCEL_SPI': 'TextEdit', 'PC_LGAC': 'TextEdit', 'PC_PLANNO': 'TextEdit', 'PC_LOTNO': 'TextEdit', 'PARC_ACCLT': 'TextEdit', 'PC_ALL': 'TextEdit', 'PC_BLK': 'TextEdit', 'PC_PNUM': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_ParcelBoundaryBallarat_18.set('fieldImages', {'fid': 'TextEdit', 'PARCEL_PFI': 'TextEdit', 'PARCEL_SPI': 'TextEdit', 'PC_LGAC': 'TextEdit', 'PC_PLANNO': 'TextEdit', 'PC_LOTNO': 'TextEdit', 'PARC_ACCLT': 'TextEdit', 'PC_ALL': 'TextEdit', 'PC_BLK': 'TextEdit', 'PC_PNUM': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_TopLeadsZoned_19.set('fieldImages', {'Gross HA': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'Zone 1 Ha': 'TextEdit', 'NDH.': 'TextEdit', 'Address': 'TextEdit', 'Lead Link': 'TextEdit', 'P_Lot size': 'TextEdit', });
lyr_waterwaysbuffered_1.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_FOFloodwayOverlay_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HOHeritageOverlay_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LSIOLandSubjecttoInundationOverlay_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VPOVegetationProtectionOverlay_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_EasementsNOTDEDUCTED_6.set('fieldLabels', {'OBJECTID': 'no label', 'ufi': 'no label', 'pfi': 'no label', 'status': 'no label', 'task_id': 'no label', 'pfi_create': 'no label', 'ufi_old': 'no label', 'ufi_create': 'no label', 'Shape__Len': 'no label', });
lyr_RXORoadClosureOverlay_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PAOPublicAcquisitionOverlay_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BMOBushfire_Management_Overlay_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BAOBufferAreaOverlay_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ESOEnvironmental_Significance_Overlay_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SLOSignificantLandscapeOverlay_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SROStateResourceOverlay_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RORestructureOverlay_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PFI': 'no label', 'SCHEME_COD': 'no label', 'LGA_CODE': 'no label', 'LGA': 'no label', 'ZONE_NUM': 'no label', 'ZONE_STATU': 'no label', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'no label', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'no label', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZonedAreas_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'LGA': 'inline label - always visible', 'ZONE_CODE': 'inline label - always visible', 'ZONE_DESCRIPTION': 'inline label - always visible', });
lyr_LGABOUNDARY_16.set('fieldLabels', {'LGA_CODE24': 'no label', 'LGA_NAME24': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM': 'no label', 'LOCI_URI21': 'no label', 'Data_Total target 2051': 'no label', });
lyr_ParcelBoundaryBendigo_17.set('fieldLabels', {'fid': 'hidden field', 'PARCEL_PFI': 'hidden field', 'PARCEL_SPI': 'hidden field', 'PC_LGAC': 'hidden field', 'PC_PLANNO': 'inline label - visible with data', 'PC_LOTNO': 'inline label - visible with data', 'PARC_ACCLT': 'hidden field', 'PC_ALL': 'hidden field', 'PC_BLK': 'hidden field', 'PC_PNUM': 'hidden field', 'Gross HA': 'inline label - always visible', });
lyr_ParcelBoundaryBallarat_18.set('fieldLabels', {'fid': 'hidden field', 'PARCEL_PFI': 'hidden field', 'PARCEL_SPI': 'hidden field', 'PC_LGAC': 'hidden field', 'PC_PLANNO': 'inline label - visible with data', 'PC_LOTNO': 'inline label - visible with data', 'PARC_ACCLT': 'hidden field', 'PC_ALL': 'hidden field', 'PC_BLK': 'hidden field', 'PC_PNUM': 'hidden field', 'Gross HA': 'inline label - visible with data', });
lyr_TopLeadsZoned_19.set('fieldLabels', {'Gross HA': 'inline label - visible with data', 'LGA': 'inline label - visible with data', 'ZONE_CODE': 'inline label - visible with data', 'Zone 1 Ha': 'inline label - visible with data', 'NDH.': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'P_Lot size': 'inline label - always visible', });
lyr_TopLeadsZoned_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});