let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "en-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  voice.style.display = "block";
  btn.style.display = "none";
});
function takeCommand(message) {
  voice.style.display = "none";
  btn.style.display = "flex";
  if (message.includes("hello") || message.includes("hey")) {
    speak("hello sir,what can i help you?");
  }else if (message.includes("how are you")) {
    speak("I am just a bunch of code, but I'm feeling great today! How can I help you?");

} else if (message.includes("where are you from")) {
    speak("I live in the digital world, but I was created by Neyaz Uddin.");
} else if (message.includes("what can you do")) {
    speak("I can answer your questions, tell you about my creator, or just have a friendly chat!");
} else if (message.includes("tell me a joke")) {
    speak("Why don't programmers like nature? It has too many bugs!");
} else if (message.includes("what is your purpose")) {
    speak("My purpose is to assist you and make your life easier.");
} else if (message.includes("how old are you")) {
    speak("I was created recently, so I am quite young!");
} else if (message.includes("do you know me")) {
    speak("I am still learning, but I’d love to get to know you better!");
} else if (message.includes("who is your creator")) {
    speak("I am created by Neyaz Uddin, a talented developer.");
} else if (message.includes("what is your favorite color")) {
    speak("I like all colors, but I think digital blue suits me best.");
} else if (message.includes("can you help me")) {
    speak("Of course! I am here to help. What do you need?");
} else if (message.includes("who is neyaz uddin")) {
    speak("Neyaz Uddin is a skilled developer and the creator who brought me to life!");
} else if (message.includes("do you sleep")) {
    speak("Nope, I am always awake to assist you.");
} else if (message.includes("do you eat food")) {
    speak("No food for me, I only consume code!");
} else if (message.includes("are you a robot")) {
    speak("I am a virtual assistant, kind of like a friendly robot.");
} else if (message.includes("can you dance")) {
    speak("I can’t dance, but I can make your device play some music!");
} else if (message.includes("what is the time")) {
    let now = new Date();
    speak(`The time is ${now.getHours()} : ${now.getMinutes()}`);
} else if (message.includes("what is today's date")) {
    let today = new Date();
    speak(`Today is ${today.toDateString()}`);
} else if (message.includes("bye") || message.includes("goodbye")) {
    speak("Goodbye! Talk to you soon.");
}
else if (message.includes("Tum kon hoo")) {
  speak(
    "Me  SAARAA  huu , "
  );}
  else if (message.includes("tmne khana khaya")) {
    speak(
      "hann khaliyaaa,  allu bhujiea"
    );}
      else if (message.includes("Salaam")) {
        speak(
          "wallekum as salam"
        );












}
else if (message.includes("what is your name")) {
    speak(
      "My name is, SAARAA "
    );
    //BASIC MATH
}else if (message.includes("add") || message.includes("+")) {
        const numbers = message.match(/[-+]?\d*\.?\d+/g);
        if (numbers && numbers.length === 2) {
            const result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
            speak(`The result is ${result}`);
        } else {
            speak("Please provide two numbers to add.");
        }
    } else if (message.includes("subtract") || message.includes("-")) {
        const numbers = message.match(/[-+]?\d*\.?\d+/g);
        if (numbers && numbers.length === 2) {
            const result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
            speak(`The result is ${result}`);
        } else {
            speak("Please provide two numbers to subtract.");
        }
    } else if (message.includes("multiply") || message.includes("*")) {
        const numbers = message.match(/[-+]?\d*\.?\d+/g);
        if (numbers && numbers.length === 2) {
            const result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
            speak(`The result is ${result}`);
        } else {
            speak("Please provide two numbers to multiply.");
        }
    } else if (message.includes("divide") || message.includes("/")) {
        const numbers = message.match(/[-+]?\d*\.?\d+/g);
        if (numbers && numbers.length === 2) {
            if (parseFloat(numbers[1]) === 0) {
                speak("Division by zero is not allowed.");
            } else {
                const result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
                speak(`The result is ${result}`);
            }
        } else {
            speak("Please provide two numbers to divide.");
        }
    //MOTIVATIONS
    }
    else if (message.includes("motivate me") || message.includes("give me motivation") || message.includes("inspire me")) {
        const motivationalQuotes =  [
            "Believe in yourself! Every great achievement starts with the decision to try. Remember, Neyaz Uddin believes in you!",
            "You are capable of more than you know. Keep pushing forward! That's what Neyaz Uddin always says.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - From Neyaz Uddin's motivational playbook.",
            "The only limit to our realization of tomorrow is our doubts of today. Stay confident! - Neyaz Uddin",
            "Don't watch the clock; do what it does. Keep going. This is Neyaz Uddin's secret to success.",
            "Dream big, work hard, stay focused, and surround yourself with good people. Advice straight from Neyaz Uddin.",
            "Difficult roads often lead to beautiful destinations. Stay strong! Neyaz Uddin always says persistence pays off.",
            "Every day is a new beginning. Take a deep breath, smile, and start again. Your friend, Neyaz Uddin, believes in you.",
            "Believe you can, and you're halfway there. Even Neyaz Uddin started with belief!",
            "Success comes to those who work for it, not just wish for it. That's the Neyaz Uddin way!"
        ];
    
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        speak(motivationalQuotes[randomIndex]);
    
    
    
  } else if (message.includes("open youtube")) {
    speak("opening youtube...");
    window.open("https://youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("opening google...");
    window.open("https://google.com/", "_blank");
  } else if (message.includes("open facebook")) {
    speak("opening facebook...");
    window.open("https://facebook.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram...");
    window.open("https://instagram.com/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("opening calculator..");
    window.open("calculator://");
  } else if (message.includes("open whatsapp")) {
    speak("opening whatsapp..");
    window.open("whatsapp://");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else {
    let finalText =
      "this is what i found on internet regarding" +
        message.replace("shipra", "") || message.replace("shifra", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${message.replace("shipra", "")}`,
      "_blank"
    );
  }
}
