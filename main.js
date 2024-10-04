import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import LayerList from "@arcgis/core/widgets/LayerList";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { createApp } from "vue";

import './style.css'

import DrawExpander from "@/components/DrawExpander.vue";

const esriMap = new EsriMap({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "map-view-div", // reference the div id
  map: esriMap,
  zoom: 4,
  center: [15, 65]
});

const polygonDrawGraphics = new GraphicsLayer({
    graphics: [],
    title: "Polygon Draw Graphics",
    // listMode: "hide", // hides in the LayerList widget
    spatialReference: { wkid: 102100 },
});

const pointDrawGraphics = new GraphicsLayer({
    graphics: [],
    title: "Point Draw Graphics",
    // listMode: "hide", 
    spatialReference: { wkid: 102100 },
});

esriMap.addMany([polygonDrawGraphics, pointDrawGraphics]);

const polygonSketchVM = 
    new SketchViewModel({
        view: view,
        layer: polygonDrawGraphics,
    });

const pointSketchVM = 
    new SketchViewModel({
        view: view,
        layer: pointDrawGraphics,
    });

const html = document.createElement("div");

createApp(
    DrawExpander, 
    {
        drawPolygon: () => {
            polygonSketchVM.create("polygon");
        },
        drawPoint: () => {
            pointSketchVM.create("point");
        },
    })
    .mount(html);

view.ui.add([
        new Expand({
            view: view,
            content: new LayerList({
                view: view,
            }),
            group: "top-left",
            expanded: false
        }),
        new Expand({
            view: view,
            content: html, 
            group: "top-left",
            expanded: false,
        })
    ],
    "top-left");