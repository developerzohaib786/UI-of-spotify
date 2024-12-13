async function getSongs() {
    let a= await fetch("http://127.0.0.1:5500/audio/");
    let response= await a.text();
    console.log(response);
    let div=document.createElement("div");
    div.innerHTML= response;
    let as= div.getElementsByTagName("a");
    let songs=[];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs;
}

async function main() {
    // will get all the audio from folder 
    let songs= await getSongs();
    console.log(songs);
    // play audio 
    var audio = new Audio(songs[0]);
audio.play();        

audio.addEventListener("ontimeupdate",()=>{
    let duration=audio.duration;
    console.log(audio.duration, audio.currentSrc, audio.currentTime)
})
}

main();
