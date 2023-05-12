function FindClip(str) {
    const clips = document.getElementsByClassName(str)
   // console.log(clips.length);
    for (let i = 0; i < clips.length; i++) {
        const clip = clips[i];
        //console.log(clip);
        if(clip.getElementsByClassName("bili-video-card__stats__duration")[0]!=null){
            const timeElement = clip.getElementsByClassName("bili-video-card__stats__duration")[0];
            //console.log(timeElement);
            const text = timeElement.innerText;
            //console.log(timeElement.innerText);
            var time = time2second(text);
            //console.log(time);
            if(time<=90){
                if(clip.getElementsByClassName("v-img bili-video-card__cover")[0]!=null){
                    const clip_pic = clip.getElementsByClassName("v-img bili-video-card__cover")[0];
                    //clip_pic.remove();
                    const pic = clip_pic.getElementsByTagName('img')[0];
                    const sources = clip_pic.getElementsByTagName('source');
                   //console.log(sources);
                    if(sources.length!=0){
                        sources[0].remove();
                        sources[0].remove();
                        
                       //pic.remove();
                        const url = chrome.extension.getURL("../images/img.png?");
                        // var img = document.createElement('img');
                        // clip_pic.appendChild(img);
                        // img.src = url;
                        // img.class = 'img_ASV';
                        pic.src = url + new Date().getTime();
                        //console.log(pic.src);
                    }
                }  
            }
        }
        else{
            
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
    // FindClip("feed-card");
    setTimeout(function() {
        FindClip("bili-video-card is-rcmd");
      }, 800);
};

// FindClip("bili-video-card is-rcmd");
var pastNumber;
var nowNumber;
setInterval(function(){
    pastNumber = document.getElementsByClassName('bili-video-card is-rcmd').length;
    //console.log(pastNumber);
}, 50)

setInterval(function(){
    nowNumber = document.getElementsByClassName('bili-video-card is-rcmd').length;
    //console.log(nowNumber);
}, 55)

setInterval(function(){
    timePastandNow(pastNumber,nowNumber);
}, 55)

function timePastandNow(x,y){
    if(x!=y){
        FindClip("bili-video-card is-rcmd");
    }
}

document.addEventListener('scroll', function(event) {
    FindClip("bili-video-card is-rcmd");
  });

// // 选择要监视的目标元素
// const target = document.getElementById('container is-version8');

// // 创建一个新的 MutationObserver 对象
// const observer = new MutationObserver(function(mutationsList, observer) {
//     for(let mutation of mutationsList) {
//         // 判断是否添加了新的子元素
//         if (mutation.type === 'childList') {
//             // 在这里执行你想要的函数
//             FindClip("bili-video-card is-rcmd");
//         }
//     }
// });

// // 开始观察目标元素
// observer.observe(target, { childList: true });
