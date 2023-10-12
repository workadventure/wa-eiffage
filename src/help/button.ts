/// <reference types="@workadventure/iframe-api-typings" />

console.info('Help Script started successfully');

let popupHelpOpened: boolean = false;

const openHelpModal = () => {
    if(popupHelpOpened){
        WA.ui.modal.closeModal();
        popupHelpOpened = false;
        return;
    }

    popupHelpOpened = true;
    WA.nav.openTab("https://teams.microsoft.com/l/team/19%3aMEjzJdR0fyc9_XV_pyCo_O_g6K0kWxlbgsRifNYSibE1%40thread.tacv2/conversations?groupId=5353aa17-7eb8-4158-a77b-aa5a0488e9a4&tenantId=2ed0a394-379b-4092-aaee-9dce8bdb4f2d");
    /*WA.ui.modal.openModal({
        src: "https://drive.google.com/file/d/11Y5pMDSINoocpdVowU2ZxlwNYhJBRj-S/preview",
        allow: "fullscreen",
        title: "Help Center",
        allowApi: true,
        position: "center",
    });*/
}

WA.onInit().then(() => {
    WA.ui.actionBar.addButton({
        id: 'help-btn',
        type: 'action',
        imageSrc: 'https://workadventure.github.io/wa-eiffage/information.svg',
        toolTip: 'Help center',
        callback: () => {
            openHelpModal();
        }
    });
});

export {};
