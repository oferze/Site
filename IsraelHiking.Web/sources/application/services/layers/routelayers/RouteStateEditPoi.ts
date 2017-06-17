﻿import { RouteStateEdit } from "./RouteStateEdit";
import { IconsService } from "../../IconsService";
import { IRouteLayer, EditModeString } from "./IRouteLayer";
import { EditMode } from "./IRouteState";
import * as Common from "../../../common/IsraelHiking";

export class RouteStateEditPoi extends RouteStateEdit {
    constructor(context: IRouteLayer) {
        super(context);
        this.hoverHandler.setRouteHover(false);
    }

    protected addPoint(e: L.MouseEvent) {
        let marker = this.createPoiMarker({ latlng: e.latlng, title: "" } as Common.MarkerData, true);
        this.context.route.markers.push({
            latlng: e.latlng,
            marker: marker,
            title: "",
            type: IconsService.getAvailableIconTypes()[0]
        });
        this.addComponentToMarker(marker);
        setTimeout(() => marker.openPopup(), 200);
        this.context.raiseDataChanged();
    }

    public getEditMode(): EditMode {
        return EditModeString.poi;
    }
}