function yourFunction(){
   

    try {
        //buttons
        let buton=document.getElementsByClassName("ytp-ad-skip-button-container")[0];
        
        if(buton!=undefined){
            buton.click();
            displayVideo=true;
        }

      } catch (error) {
        console.log("Eror-----------------------")
        console.error(error);
        console.log("Eror-----------------------")
    
      }
      

      try{
        // 
        let containerForVide=document.getElementsByClassName("ytp-ad-preview-container");
        if(containerForVide.length>0){
            document.getElementsByClassName("style-scope ytd-player")[0].style.display="none";
            document.getElementsByClassName("video-stream html5-main-video")[0].muted=true;
        }else{
            document.getElementsByClassName("style-scope ytd-player")[0].style.display="block";
            document.getElementsByClassName("video-stream html5-main-video")[0].muted=false; 
        }
      }catch(eee){

      }

    setTimeout(yourFunction, 1000);
}

yourFunction();
