
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',g='image',e15='${t1}',x12='rgba(255,255,255,1)',e13='${t5}',tp='top',lf='left',e14='${t4}',x4='rgba(0,0,0,0)',i='none';var g8='t4.png',g7='t5.png',g11='t1.png',g9='t3.png',g5='bg2.jpg',g6='video.mp4',g10='t2.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'bg2',t:g,r:['0','0','300px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'video',t:'video',tag:'video',r:['0px','174px','300','250','auto','auto'],ap:'autoplay',lp:'loop',sr:[vid+g6],pr:'auto'},{id:'t5',t:g,r:['51px','440px','202px','52px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'t4',t:g,r:['4px','492px','292px','14px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'t3',t:g,r:['56px','436px','187px','65px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'t2',t:g,r:['17px','438px','270px','57px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'t1',t:g,r:['14px','428px','276px','61px','auto','auto'],f:[x4,im+g11,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:0,a:y,data:[["eid30",lf,0,0,"linear",e13,'51px','51px'],["eid39",lf,0,0,"linear",e14,'4px','4px'],["eid33",tp,0,0,"linear",e13,'440px','440px'],["eid43",tp,0,0,"linear",e14,'492px','492px'],["eid44",tp,0,0,"linear",e15,'428px','428px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-39286211");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("t1").hide();sym.$("t2").hide();sym.$("t3").hide();sym.$("t4").hide();sym.$("video")[0].addEventListener("ended",function(){sym.$("video")[0].currentTime=0;sym.$("video")[0].pause();sym.$("pauseBtn").hide();sym.$("playBtn").show();sym.$("t1").hide();sym.$("t2").hide();sym.$("t3").hide();sym.$("t4").hide();sym.$("t5").show();});sym.$("playBtn").hide();sym.$("pauseBtn").show();sym.$("soundOff").show();sym.$("soundOn").hide();sym.$("video")[0].volume=0;sym.$("video")[0].addEventListener("timeupdate",function(){var vidTime=parseInt(sym.$("video")[0].currentTime);var milliTime=vidTime*1000;if(milliTime>=1200&&milliTime<9000){sym.$("t1").show();sym.$("t2").hide();sym.$("t3").hide();sym.$("t4").show();sym.$("t5").hide();}else if(milliTime>=9000&&milliTime<12500){sym.$("t1").hide();sym.$("t2").show();sym.$("t3").hide();sym.$("t4").hide();sym.$("t5").hide();}else if(milliTime>=12500&&milliTime<18000){sym.$("t1").hide();sym.$("t2").hide();sym.$("t3").show();sym.$("t4").hide();sym.$("t5").hide();}else if(milliTime>=18000){sym.$("t1").hide();sym.$("t2").hide();sym.$("t3").hide();sym.$("t4").hide();sym.$("t5").show();}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-39286211");