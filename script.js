let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let ai=document.querySelector("#ai")

function speak(text){
   let text_speak= new SpeechSynthesisUtterance(text)
   text_speak.pitch=1
   text_speak.rate=1
   text_speak.volume=1
   text_speak.lang="hi-GB"
   window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
     let hours=day.getHours()
     if(hours>=0 && hours<12){
        speak("Good morning sir") 
     }
     else if(hours>=12 && hours<16){
        speak("Good afternoon dude")
     }else{
        speak("Good evenig buddy")
     }
}
window.addEventListener('load',()=>{

   wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
  let currentIndex= event.resultIndex
  event.results[currentIndex][0].transcript
  content.innerText=transcript
 takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.Style.display= "none"
    ai.style.display="block"
})
function takeCommand(message){
   btn.Style.display= "flex"
    ai.style.display="none"
   if(message.includes("hello") || message.includes("hey") ){
      speak("hello sir,what can i help u")
   }
   else if (message.includes("who are u ") ){
      speak("i'm vurtual assistant , created by shaikh mansoor ilahi")
   }
   else if(message.includes("open youtube")){
      speak("open youtube")
      window.open("https://youtube.com/","_blank")
   }
   else if(message.includes("open google")){
      speak("open google")
      window.open("https://google.com/","_blank")
   }
   else if(message.includes("open facebook")){
      speak("open facebook")
      window.open("https://facebook.com/","_blank")
   }
   else{
      let finalText= " this is what i found on internet regarding " + message.replace("shipra","") || message.replace("shifra","")
      speak(finalText)
      window.open('https://www.google.com/search?q=${message.replace("shipra","")}',"_blank")
   }
}
