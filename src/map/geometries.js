// @ts-check

import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import Polygon from "@arcgis/core/geometry/Polygon";

/**
 * @param {number} x
 * @param {number} y
 */
function createPoint(x, y) {
    return new Point({
        x: x,
        y: y
    });
}

/**
 * @param {Array<[x: number, y: number]>} vertices
 */
function createPolyline(vertices) {
    return new Polyline({
        paths: [vertices],
        spatialReference: { wkid: 102100 }
    });
}


/**
 * @param {Array<[x: number, y: number]>} vertices
 * vertices must have the first point and last point in the array be the same
 */
function createPolygon(vertices) {
    return new Polygon({
        rings: [vertices],
        spatialReference: { wkid: 102100 }
    });
}

export {
    createPoint,
    createPolyline,
    createPolygon,
}