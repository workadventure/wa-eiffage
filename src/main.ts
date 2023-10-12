/// <reference types="@workadventure/iframe-api-typings" />
import { Popup } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import "./help/button";
import "./speaker/access";

console.log('Script started successfully');

let popupPrivateOffice1: Popup|null;
let popupPrivateOffice2: Popup|null;
let popupPrivateOffice3: Popup|null;
//let popupPrivateOffice4: Popup|null;
//let popupPrivateOffice5: Popup|null;
let popupStand: Popup|null;
let link: any;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.area.onEnter("zone_work1").subscribe(() => {
        if(popupPrivateOffice1) return;
        if(!WA.state.work1) {
            popupPrivateOffice1 = WA.ui.openPopup("popup_work1", WA.state.txt_popup_work1 as string, [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work1; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice1?.close();
                    popupPrivateOffice1 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work2").subscribe(() => {
        if(popupPrivateOffice2) return;
        if(!WA.state.work2) {
            popupPrivateOffice2 = WA.ui.openPopup("popup_work2", WA.state.txt_popup_work2 as string, [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work2;
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice2?.close();
                    popupPrivateOffice2 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work3").subscribe(() => {
        if(popupPrivateOffice3) return;
        if(!WA.state.work3) {
            popupPrivateOffice3 = WA.ui.openPopup("popup_work3", WA.state.txt_popup_work3 as string, [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work3; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice3?.close();
                    popupPrivateOffice3 = null;
                }
            }]);
        }
    });
    /*
    WA.room.area.onEnter("zone_work4").subscribe(() => {
        if(popupPrivateOffice4) return;
        if(!WA.state.work4) {
            popupPrivateOffice4 = WA.ui.openPopup("popup_work4", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work4; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice4?.close();
                    popupPrivateOffice4 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work5").subscribe(() => {
        if(popupPrivateOffice5) return;
        if(!WA.state.work5) {
            popupPrivateOffice5 = WA.ui.openPopup("popup_work5", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work5; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice5?.close();
                    popupPrivateOffice5 = null;
                }
            }]);
        }
    });
    */

    WA.room.area.onLeave("zone_work1").subscribe(() => {
        popupPrivateOffice1?.close();
        popupPrivateOffice1 = null;
    });
    WA.room.area.onLeave("zone_work2").subscribe(() => {
        popupPrivateOffice2?.close();
        popupPrivateOffice2 = null;
    });
    WA.room.area.onLeave("zone_work3").subscribe(() => {
        popupPrivateOffice3?.close();
        popupPrivateOffice3 = null;
    });
    /*
    WA.room.area.onLeave("zone_work4").subscribe(() => {
        popupPrivateOffice4?.close();
        popupPrivateOffice4 = null;
    });
    WA.room.area.onLeave("zone_work5").subscribe(() => {
        popupPrivateOffice5?.close();
        popupPrivateOffice5 = null;
    });
    */

    WA.room.area.onEnter("zone_intro_stand1").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand1", WA.state.txt_popup_stand1 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand1").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });

    WA.room.area.onEnter("zone_intro_stand2").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand2", WA.state.txt_popup_stand2 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand2").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });

    WA.room.area.onEnter("zone_intro_stand3").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand3", WA.state.txt_popup_stand3 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand3").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });

    WA.room.area.onEnter("zone_intro_stand4").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand4", WA.state.txt_popup_stand4 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand4").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });

    WA.room.area.onEnter("zone_intro_stand5").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand5", WA.state.txt_popup_stand5 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand5").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });


    WA.room.area.onEnter("zone_intro_stand6").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand6", WA.state.txt_popup_stand6 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand6").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });

    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};
