import { Howl, Howler } from 'howler';

Howler.mute(false);

const urlFailSound = "/sounds/Explosion4.wav";
const urlSuccessSound = "/sounds/Pickup_Coin66.wav";

const relativaPathTyping = "/sounds/eklee-KeyPresses-cc0-opengameart/wav44100/";

const urlTypingSounds = [
    "eklee-KeyPressMac01.wav",
    "eklee-KeyPressMac02.wav",
    "eklee-KeyPressMac03.wav",
    "eklee-KeyPressMac04.wav",
    "eklee-KeyPressMac05.wav",
    "eklee-KeyPressMac06.wav",
    "eklee-KeyPressMac07.wav",
    "eklee-KeyPressOld01.wav",
    "eklee-KeyPressOld02.wav",
    "eklee-KeyPressOld03.wav",
    "eklee-KeyPressOld04.wav",
    "eklee-KeyPressOld05.wav"
]

var addedSounds = 0;
var loadedSounds = 0;

const addSound = (url : string) : Howl => {
    addedSounds++;
    return new Howl({
        src: url,
        onload: () => loadedSounds++
    })
}

const typingSounds = urlTypingSounds.map(name => addSound(relativaPathTyping + name));

const failSound = addSound(urlFailSound);
failSound.volume(0.5);

const successSound = addSound(urlSuccessSound);
successSound.volume(0.5);

Howler.volume(0.2);

const sleep = async (ms : number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const waitForSoundsLoaded = async () => {
    while(loadedSounds !== addedSounds)  {
        console.log("waiting");
        await sleep(100);
    }
}

export const playTypingSound = () => {
    typingSounds[Math.floor(Math.random() * typingSounds.length)].play();
}

export const playFailSound = () => {
    failSound.play();
}

export const playSuccessSound = () => {
    //successSound.play();
}