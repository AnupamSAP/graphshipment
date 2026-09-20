sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.styker.graphshipment.controller.Main", {
        onInit() {
            var oVizFrameStatus = this.byId("idVizFrameStatus");

    var oPopOverStatus = this.byId("idStatusPopover");

    oPopOverStatus.connect(oVizFrameStatus.getVizUid());

    // 
     var oVizFrameDivison = this.byId("idVizFrameDivisionStatus");

    var oPopOver = this.byId("idPopOver");

    oPopOver.connect(oVizFrameDivison.getVizUid());
        }
    });
});