var p=document.getElementById("p");
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var button_data=[];
var tracks={
    track1: new Audio("track 1.mp3"),
    track2: new Audio("track 2.mp3"),
    track3: new Audio("track 3.mp3"),
    track4: new Audio("track 4.mp3"),
    track5: new Audio("track 5.mp3"),
    track6: new Audio("track 6.mp3")
};
var snek_y_vector=0;
var snek_x_vector=0;
var soundEffects={
    platform: new Audio("walking.mp3"),
    water: new Audio("water.mp3"),
    lava: new Audio("lava.mp3"),
    ladder: new Audio("ladder.mp3"),
    slither: new Audio("slithering.mp3"),
    win: new Audio("win.mp3"),
}
var display=document.getElementById("display");
display.width=window.width;
display.height=window.height;
display.style.position="absolute"
display.style.left="0px"
display.style.top="0px"
display.style.display="none"
canvas.style.width=window.innerWidth
canvas.style.height=window.innerHeight
var on_title_screen=true;
//var sprite_list={
  //  snek1: document.getElementById("snek1")
//};
var snek=document.getElementById("snek");
snek.style.zIndex=100
snek.style.display="none";
snek.src="snek1.jpg";
snek.style.position="absolute";
var x=0;
var y=0;
var title_screen=document.getElementById("title screen");
var background_image=document.getElementById("background image");
background_image.style.width=window.innerWidth+"px";
background_image.style.height=window.innerHeight+"px";
var play_button=document.getElementById("play button");
play_button.style.position="absolute";
play_button.style.top=window.innerHeight/2-play_button.style.height+"px";
play_button.style.right=window.innerWidth/2-play_button.style.width+"px";
var snek_animation_frame=1;
var level_num=1;
var level=[];
var generated=false;
var block_list=[document.getElementById("lava"),document.getElementById("water"),document.getElementById("vines"),document.getElementById("ladder"),document.getElementById("fancy_floor"),document.getElementById("bricks")];
function perlin_screen(){
    noise.seed(Math.random());
    var row=0;
    var collum=0;
    for(var x2=0; x2<=screen.width; x2+=100){
        collum=x2/100;
        for(var y2=0; y2<=screen.height; y2+=100){
            row=y2/100;
            if(row>3 || collum>3){
            var image_value=Math.abs(Math.round(noise.simplex2(x2,y2)*255))
            if(image_value>39 && image_value<50){
                var image=document.createElement("img");
                image.src="lava.jpg";
                image.width=100
                image.height=100
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("lava")
                level.push(x2)
                level.push(y2)
                level.push(image)
            }
            else{
                if(image_value>49 && image_value<60){
                    var image=document.createElement("img");
                image.src="water.jpg";
                image.style.width=100+"px"
                image.style.height=100+"px"
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("water")
                level.push(x2)
                level.push(y2)
                level.push(image)
            }
            else{
                if(image_value>59 && image_value<65){
                    var image=document.createElement("img");
                image.src="vines.jpg";
                image.style.width=100+"px"
                image.style.height=100+"px"
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("ladder")
                level.push(x2)
                level.push(y2)
                level.push(image)
                }
                else{
                    if(image_value>64 && image_value<95){
                        var image=document.createElement("img");
                image.src="ladder.jpg";
                image.style.width=100+"px"
                image.style.height=100+"px"
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("ladder")
                level.push(x2)
                level.push(y2)
                level.push(image)
                    }
                    else{
                        if(image_value>94 && image_value<190){
                            var image=document.createElement("img");
                image.src="fancy_floor.jpg";
                image.style.width=100+"px"
                image.style.height=100+"px"
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("platform")
                level.push(x2)
                level.push(y2)
                level.push(image)
                        }
                        else{
                            if(image_value>189 && image_value<256){
                                var image=document.createElement("img");
                image.src="bricks.jpg";
                image.style.width=100+"px"
                image.style.height=100+"px"
                image.style.position="absolute"
                image.style.left=x2+"px"
                image.style.top=y2+"px"
                display.append(image);
                level.push("platform")
                level.push(x2)
                level.push(y2)
                level.push(image)
                            }
                        }
                    }
                }
            }
        }
    }
    }
}
generated=true
}             

var keybinds=[
    "w","s","d","a"," "
]
play_button.addEventListener("click",()=>{
snek.style.display="block";
title_screen.style.display="none";
on_title_screen=false;
display.style.display="block"
handle_audio();
perlin_screen()
})
/*function handle_audio(){
    alert("audio")
    
}*/
var track_playing;
function handle_audio(){
    var random=Math.floor(Math.random()*6);
    track_playing=random;
    if(random==0){
        tracks.track1.play();
    }
    else{
        if(random==1){
            tracks.track2.play();
        }
        else{
            if(random==2){
                tracks.track3.play();
            }
            else{
                if(random==3){
                    tracks.track4.play();
                }
                else{
                    if(random==4){
                        tracks.track5.play();
                    }
                    else{
                        if(random==5){
                            tracks.track6.play();
                        }
                    }
                }
            }
        }
    }
}
setInterval(function(){
    var random=Math.floor(Math.random()*6);
    track_playing=random;
    if(random==0){
        tracks.track1.play();
    }
    else{
        if(random==1){
            tracks.track2.play();
        }
        else{
            if(random==2){
                tracks.track3.play();
            }
            else{
                if(random==3){
                    tracks.track4.play();
                }
                else{
                    if(random==4){
                        tracks.track5.play();
                    }
                    else{
                        if(random==5){
                            tracks.track6.play();
                        }
                    }
                }
            }
        }
    }

},30000)
var sprint=0;
window.addEventListener("gamepadconnected",(event)=>{
alert("gamepad connected");
})
window.addEventListener("gamepaddisconnected",(event)=>{
    alert("gamepad disconnected");
    })
document.addEventListener("keydown",(event)=>{
    if(event.key==keybinds[0]){
        snek_y_vector=-1;
    }
    if(event.key==keybinds[1]){
        snek_y_vector=1;
    }
    if(event.key==keybinds[2]){
        snek_x_vector=1;
    }
    if(event.key==keybinds[3]){
        snek_x_vector=-1;
    }
    if(event.key==keybinds[4]){
        sprint=1;
    }
})
document.addEventListener("keyup",(event)=>{
    if(event.key==keybinds[0]){
        snek_y_vector=0;
    }
    if(event.key==keybinds[1]){
        snek_y_vector=0;
    }
    if(event.key==keybinds[2]){
        snek_x_vector=0;
    }
    if(event.key==keybinds[3]){
        snek_x_vector=0;
    }
    if(event.key==keybinds[4]){
        sprint=0;
    }
})
setInterval(function(){
const gamepad=navigator.getGamepads();
if(gamepad[0]){
button_data=[];
for(i=0; i < gamepad[0].buttons.length; i++){
    button_data.push(gamepad[0].buttons[i].pressed);
}
}
if(on_title_screen && button_data[0]==true){
    snek.style.display="block";
    title_screen.style.display="none";
    on_title_screen=false;
    display.style.display="block"
    handle_audio();
    perlin_screen()
}
else{
    if(generated==true){
if(gamepad[0]){
    snek_x_vector=gamepad[0].axes[0];
    snek_y_vector=gamepad[0].axes[1];
    
    if(gamepad[0].buttons[10].pressed){
        if(gamepad[0].vibrationActuator){
        gamepad[0].vibrationActuator.playEffect("dual-rumble", {
            startDelay: 0,
            duration: 200,
            weakMagnitude: 1.0,
            strongMagnitude: 1.0,
          });
        }
    }
    if(gamepad[0].buttons[7].pressed){
        if(gamepad[0].vibrationActuator){
        gamepad[0].vibrationActuator.playEffect("dual-rumble", {
            startDelay: 0,
            duration: 10,
            weakMagnitude: 0.1,
            strongMagnitude: gamepad[0].buttons[7].value,
          });
        }
    }
    
sprint=gamepad[0].buttons[10].touched;
}
x+=snek_x_vector*1.5*(sprint+0.5*2);
y+=snek_y_vector*1.5*(sprint+0.5*2);
if(x>screen.width){
    soundEffects.win.play();
    alert("you win, you just beat level "+ level_num+"!")
    x=0;
    y=0;
    remove_screen()
    level=[];
    level_num+=1;
    generated=false;
    perlin_screen()
}
if(level){
for(var i=0; i<level.length-1; i+=4){
    if(x<level[i+1]+100 && x+snek.width>level[i+1] && y<level[i+2]+100 && y+snek.height>level[i+2]){
        //alert("x:"+x+", boxX:"+level[i+1]+", y:"+y+", boxY"+level[i+2]+", type:"+level[i])
        //let xoffset=(x+45)-(level[i+1]+100)
        //let yoffset=(y+20)-(level[i+2]+100)
        //let xoffset = (x + 90) - (level[i + 1] + 100);
        //let yoffset = (y + 40) - (level[i + 2] + 100);
        //alert(xoffset)
        //alert(yoffset)
        if(track_playing==0){
            tracks.track1.pause();
        }
        else{
            if(track_playing==1){
                tracks.track2.pause();
            }
            else{
                if(track_playing==2){
                    tracks.track3.pause();
                }
                else{
                    if(track_playing==3){
                        tracks.track4.pause();
                    }
                    else{
                        if(track_playing==4){
                            tracks.track5.pause();
                        }
                        else{
                            if(track_playing==5){
                                tracks.track6.pause();
                            }
                        }
                    }
                }
            }
        }
        if(level[i]=="lava"){
            if(soundEffects.lava.paused){
            soundEffects.lava.play();
            }
        }
        if(level[i]=="water"){
            if(soundEffects.water.paused){
            soundEffects.water.play();
            }
        }
        if(level[i]=="ladder"){
            if(soundEffects.ladder.paused){
            soundEffects.ladder.play();
            }
        }
        if(level[i]=="vines"){
            if(soundEffects.ladder.paused){
                soundEffects.ladder.play();
                }
        }
        console.log(level[i]+", x:"+(level[i+1]+100)+", y:"+level[i+2]+", playerX:"+(x+45)+", playerY:"+y)
        if(level[i]=="platform"){
            if( soundEffects.platform.paused){
                soundEffects.platform.play();
            }
            if(y<level[i+2] && y>level[i+2]-100 && x>level[i+1]+50){
                x=level[i+1]+100;
                //alert("left")
                console.log("left")
                //alert("left")
            }
            else{
                if(y<level[i+2] && y>level[i+2]-100 && x<level[i+1]+50){
                    x=level[i+1]-100;
                    //alert("right")
                    console.log("right")
                    //alert("right")
                }
                else{
                    if((x+45)<level[i+1]+100 && x>level[i+1]-100 && y>level[i+2]){
                        y=level[i+2]+100;
                        //alert("down")
                        //alert("down")
                        console.log("down")
                    }
                    else{
                        if((x+45)<level[i+1]+100 && x>level[i+1]-100 && y<level[i+2]){
                            y=level[i+2]-100;
                           //alert("up")
                           //alert("up")
                           console.log("up")
                        }
                    }
                }
            }
        }
        if(track_playing==0){
            if(tracks.track1.paused){
            tracks.track1.play();
            }
        }
        else{
            if(track_playing==1){
                if(tracks.track2.paused){
                tracks.track2.play();
                }
            }
            else{
                if(track_playing==2){
                    if(tracks.track3.paused){
                    tracks.track3.play();
                    }
                }
                else{
                    if(track_playing==3){
                        if(tracks.track4.paused){
                        tracks.track4.play();
                        }
                    }
                    else{
                        if(track_playing==4){
                            if(tracks.track5.paused){
                            tracks.track5.play();
                            }
                        }
                        else{
                            if(track_playing==5){
                                if(tracks.track6.paused){
                                tracks.track6.play();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}
}
}
},10)
function remove_screen(){
    for(var i=0; i<level.length-1; i+=4){
        display.removeChild(level[i+3])
    }

}
setInterval(function(){
    snek.style.left=x+"px";
    snek.style.top=y+"px";
    if(Math.round(Math.abs(snek_x_vector)*3)/3>=0.32 ){
    snek_animation_frame+=1;
    soundEffects.slither.play();
    }
    else{
        if(Math.round(Math.abs(snek_y_vector)*3)/3>=0.32){
            snek_animation_frame+=1;
            soundEffects.slither.play();
        }
    }
    if(snek_x_vector>0){
        snek.style.transform="scaleX(1)";
    }
    else{
        if(snek_x_vector<0){
            snek.style.transform="scaleX(-1)";
        }
    }

snek.src="snek"+snek_animation_frame+".jpg";
if(snek_animation_frame>9){
    snek_animation_frame=1;
}
},100)