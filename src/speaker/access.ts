/// <reference types="@workadventure/iframe-api-typings" />

console.info('Script speaker access started successfully');

WA.onInit().then(() => {
    if(!WA.player.tags.includes("speaker")) return;
    WA.room.hideLayer("collisionsSpeakerAccess");
});

export {};
