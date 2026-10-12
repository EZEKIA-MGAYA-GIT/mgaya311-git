function  searchAudio(){
    let input = document.getElementById('elison').value.toLowerCase();
    let audioIterms =document.getElementsByClassName('songs');
    for(let i = 0; i<audioIterms.length ;i++){
        let title = audioIterms[i].getElementsByTagName('p')[0].innerText.toLocaleLowerCase();
        if(title.includes(input)){
            audioIterms[i].style.display="";
        }
        else{
            audioIterms[i].style.display="none";
        }
    }
}
document.addEventListener('play',function(e){
    let allAudio=document.getElementsByTagName('audio');
    for(let i = 0; i<allAudio.length;i++){
    if(allAudio[i] !==e.target){
        allAudio[i].pause();
    }
}
},true);