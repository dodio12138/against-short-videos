function FindClip(str) {
    const clips = document.getElementsByClassName(str)

    for (let i = 0; i < clips.length; i++) {
        const clip = clips[i];
        //console.log(clip);
        const timeElement = clip.getElementsByClassName("bili-video-card__stats__duration")[0];
        //console.log(timeElement);
        const text = timeElement.innerText;
        //console.log(timeElement.innerText);
        var time = time2second(text);
        //console.log(time);
        if(time<=180){
            const clip_pic = clip.getElementsByClassName("v-img bili-video-card__cover")[0];
            clip_pic.remove();
        }
    }
}

function time2second(str){
    const strTime = str.split(':');
    if(strTime.length==2){
        return Number(strTime[0]*60) + Number(strTime[1]);
    }else{
        return Number(strTime[0]*3600) + Number(strTime[1]*60) + Number(strTime);
    }
}

window.onload = function(){
    FindClip("feed-card");
};

