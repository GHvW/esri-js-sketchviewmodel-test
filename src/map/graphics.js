// @ts-check

import Point from "@arcgis/core/geometry/Point";
import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";


/**
 * Creates a graphic from the polygon with simple fill symbol symbology
 * @param {Polygon} polygon
 * @returns {Graphic}
 */
function makeSimplePolygonGraphic(polygon) {
    return new Graphic({
        geometry: polygon,
        symbol: new SimpleFillSymbol({
            color: [51, 51, 204, 0.9],
            style: "solid"
        })
    });
}


/**
 * 
 * @param {Point} point 
 * @returns {Graphic}
 */
function makeSimplePointGraphic(point) {
    return new Graphic({
        geometry: point,
        symbol: new SimpleMarkerSymbol({
            color: [51, 51, 204, 0.9],
            style: "circle",
        })
    });
}


export {
    makeSimplePolygonGraphic,
    makeSimplePointGraphic
};