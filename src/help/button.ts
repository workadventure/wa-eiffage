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
    WA.ui.modal.openModal({
        src: "https://drive.google.com/file/d/11Y5pMDSINoocpdVowU2ZxlwNYhJBRj-S/preview",
        allow: "fullscreen",
        title: "Help Center",
        allowApi: true,
        position: "center",
    });
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
