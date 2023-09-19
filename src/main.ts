/// <reference types="@workadventure/iframe-api-typings" />
import { Popup } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popupPrivateOffice1: Popup|null;
let popupPrivateOffice2: Popup|null;
let popupPrivateOffice3: Popup|null;
let popupPrivateOffice4: Popup|null;
let popupPrivateOffice5: Popup|null;
let popupStand: Popup|null;
let link: any;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.area.onEnter("zone_work1").subscribe(() => {
        if(popupPrivateOffice1) return;
        if(!WA.state.work1) {
            popupPrivateOffice1 = WA.ui.openPopup("popup_work1", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work1; 
                    WA.nav.openCoWebSite(site);
                    popupPrivateOffice1?.close();
                    popupPrivateOffice1 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work2").subscribe(() => {
        if(popupPrivateOffice2) return;
        if(!WA.state.work2) {
            popupPrivateOffice2 = WA.ui.openPopup("popup_work2", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work2; 
                    popupPrivateOffice2?.close(site);
                    popupPrivateOffice2 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work3").subscribe(() => {
        if(popupPrivateOffice3) return;
        if(!WA.state.work3) {
            popupPrivateOffice3 = WA.ui.openPopup("popup_work3", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work3; 
                    WA.nav.openCoWebSite(site);
                    popupPrivateOffice3?.close();
                    popupPrivateOffice3 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work4").subscribe(() => {
        if(popupPrivateOffice4) return;
        if(!WA.state.work4) {
            popupPrivateOffice4 = WA.ui.openPopup("popup_work4", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work4; 
                    WA.nav.openCoWebSite(site);
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
                    WA.nav.openCoWebSite(site);
                    popupPrivateOffice5?.close();
                    popupPrivateOffice5 = null;
                }
            }]);
        }
    });

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
    WA.room.area.onLeave("zone_work4").subscribe(() => {
        popupPrivateOffice4?.close();
        popupPrivateOffice4 = null;
    });
    WA.room.area.onLeave("zone_work5").subscribe(() => {
        popupPrivateOffice5?.close();
        popupPrivateOffice5 = null;
    });

    WA.room.area.onEnter("zone_intro_stand1").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand1", "Merci de consulter les vidéos sur les bornes avant d'entrer dans l'espace pour poser vos questions au créateur de l'application", [{
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
        popupStand = WA.ui.openPopup("popup_stand2", "Merci de consulter les vidéos sur les bornes avant d'entrer dans l'espace pour poser vos questions au créateur de l'application", [{
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
        popupStand = WA.ui.openPopup("popup_stand3", "Merci de consulter les vidéos sur les bornes avant d'entrer dans l'espace pour poser vos questions au créateur de l'application", [{
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
        popupStand = WA.ui.openPopup("popup_stand4", "Merci de consulter les vidéos sur les bornes avant d'entrer dans l'espace pour poser vos questions au créateur de l'application", [{
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
        popupStand = WA.ui.openPopup("popup_stand5", "Merci de consulter les vidéos sur les bornes avant d'entrer dans l'espace pour poser vos questions au créateur de l'application", [{
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

    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};
