import { navigate } from "gatsby"

const SOUND_PREF = "mt";

export function setSound(soundOn: boolean) {
    if(soundOn === true) localStorage.setItem(SOUND_PREF, 'false');
    else localStorage.setItem(SOUND_PREF, 'true');
}

export function getSound() {
    return localStorage.getItem(SOUND_PREF) === 'true' ? false : true;
}

export function zoom(url: string) {
    document.body.className = "zoom";
        setTimeout(() => {
            document.body.className = "";
            navigate(url)
    }, 500);
}