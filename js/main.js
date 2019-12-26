var numBan=114;
var bannersCinteiner, num, moreBtn, numGor, bannersWidth, contactsBtn, closeContactsBtn, infoBtn, closeInfoBtn;

function init() {
    contactsBtn = document.getElementById("contactsBtn");
    closeContactsBtn = document.getElementById("closeContactsBtn");
    
    closeContactsBtn.onclick = function(){
        document.getElementById("contacts").style.visibility = 'hidden';
        document.getElementById("contactsBtn").style.opacity = 1;
        document.getElementById("contactsBtn").style.cursor = 'pointer';
    }
    contactsBtn.onclick = function(){
        ga('send', 'event', 'contacts', 'open');
        document.getElementById("contacts").style.visibility = 'visible';
        document.getElementById("contactsBtn").style.opacity = .5;
        document.getElementById("contactsBtn").style.cursor = 'default';
    }
    /*
    infoBtn = document.getElementById("infoBtn");
    closeInfoBtn = document.getElementById("closeInfoBtn");
    
    infoBtn.onclick = function(){
        document.getElementById("info").style.visibility = 'visible';
        document.getElementById("infoBtn").style.opacity = .5;
        document.getElementById("infoBtn").style.cursor = 'default';
        ga('send', 'event', 'info', 'open');
    }
    closeInfoBtn.onclick = function(){
        document.getElementById("info").style.visibility = 'hidden';
        document.getElementById("infoBtn").style.opacity = 1;
        document.getElementById("infoBtn").style.cursor = 'pointer';
    }
    */
    moreBtn = document.getElementById("loadMoreBtn");
    num = Math.ceil(window.innerHeight/600)*Math.floor(window.innerWidth/420) + Math.floor(window.innerWidth/420);
    
    addNewBanners();
    
    if(moreBtn != null) {
        moreBtn.onclick = function(){
            ga('send', 'event', 'moreBtn', 'click');
            num = Math.ceil(window.innerHeight/600)*Math.floor(window.innerWidth/420);
            addNewBanners();
        }
    }
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        numGor = Math.floor(window.innerWidth/420);
        bannersWidth = numGor*420;
        document.getElementById("banners").style.width = bannersWidth + 'px';
    }
    resizeCanvas();
}
function showBanner(evt) {
        ga('send', 'event', 'banner', 'play',"ban'"+evt.id+"'");
        var curBanner = document.getElementById(evt.id)
        curBanner.parentElement.innerHTML = "<div class='bannerStopBtn' id='"+evt.id+"' onclick='hideBanner(this)'></div><iframe src='images/content/ban"+evt.id+"/index.html' frameborder='0' align='left'></iframe><div id='preloader' style='position: absolute; margin-left: 134px; margin-top: 284px;'><img src='images/preloader.gif' alt='Preloader'></div> ";
        //evt.style.visibility='hidden';
}
function hideBanner (evt) {
    var curBanner = document.getElementById(evt.id)
        curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='"+evt.id+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/ban"+evt.id+"/img.jpg'></div>";
    
}
function addNewBanners() {
    var bannersCinteiner = document.getElementById("banners");
    for(var i=num; i>0; i--){
        if(numBan>0) {
            var newBan = document.createElement("div");
            var banClassName = 'banner';
            newBan.setAttribute('class',banClassName);
            newBan.innerHTML = "<div class='bannerPlayBtn' id='"+numBan+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/ban"+numBan+"/img.jpg'></div>";
            bannersCinteiner.appendChild(newBan);
            numBan--;
            if(numBan==0) {
                document.getElementById("main").removeChild( document.getElementById("loadMoreBtnConteiner"));
            }
        } else {
            document.getElementById("main").removeChild( document.getElementById("loadMoreBtnConteiner"));
        }
    }
}