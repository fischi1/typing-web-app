

const filenames = [
    "eklee-KeyPressMac01.wav",
    "eklee-KeyPressMac02.wav",
    "eklee-KeyPressMac03.wav",
    "eklee-KeyPressMac04.wav",
    "eklee-KeyPressMac05.wav",
    "eklee-KeyPressMac06.wav",
    "eklee-KeyPressMac07.wav",
]

const audioObjects = filenames.map(name => new Audio("/eklee-KeyPresses-cc0-opengameart/wav44100/" + name));


export class Soundmanager {
    play() {
    }
}