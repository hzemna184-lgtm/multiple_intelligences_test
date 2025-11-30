var results1=[0,0,0,0,0,0,0,0];
var results2=[0,0,0,0,0,0,0,0];
var results3=[0,0,0,0,0,0,0,0];
var results4=[0,0,0,0,0,0,0,0];
var results5=[0,0,0,0,0,0,0,0];
var results6=[0,0,0,0,0,0,0,0];
var results7=[0,0,0,0,0,0,0,0];
var results8=[0,0,0,0,0,0,0,0];
var results9=[0,0,0,0,0,0,0,0];
var results10=[0,0,0,0,0,0,0,0];
var results11=[0,0,0,0,0,0,0,0];
var results12=[0,0,0,0,0,0,0,0];

document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var cover = document.getElementById('cover');
    var quizContent = document.getElementById('quizContent');
    var final = document.getElementById('final');
    var comment=document.getElementById('comment');
    
    var q1 = document.getElementById('q1');
    var q2 = document.getElementById('q2');
    var q3 = document.getElementById('q3');
    var q4 = document.getElementById('q4');
    var q5 = document.getElementById('q5');
    var q6 = document.getElementById('q6');
    var q7 = document.getElementById('q7');
    var q8 = document.getElementById('q8');
    var q9 = document.getElementById('q9');
    var q10 = document.getElementById('q10');
    var q11 = document.getElementById('q11');
    var q12 = document.getElementById('q12');
   
   
    var to2 = document.getElementById('to2');
    var to3 = document.getElementById('to3');
    var to4 = document.getElementById('to4');
    var to5 = document.getElementById('to5');
    var to6 = document.getElementById('to6');
    var to7 = document.getElementById('to7');
    var to8 = document.getElementById('to8');
    var to9 = document.getElementById('to9');
    var to10 = document.getElementById('to10');
    var to11 = document.getElementById('to11');
    var to12 = document.getElementById('to12');
    var RESULT = document.getElementById('RESULT');

    var buttons = document.getElementById('buttons');
    var buttons2 = document.getElementById('buttons2');
    var buttons3 = document.getElementById('buttons3');
    var buttons4 = document.getElementById('buttons4');
    var buttons5 = document.getElementById('buttons5');
    var buttons6 = document.getElementById('buttons6');
    var buttons7 = document.getElementById('buttons7');
    var buttons8 = document.getElementById('buttons8');
    var buttons9 = document.getElementById('buttons9');
    var buttons10 = document.getElementById('buttons10');
    var buttons11 = document.getElementById('buttons11');
    var buttons12 = document.getElementById('buttons12');

    function questionone(){ 
        var que1 = document.createTextNode("1. What is the mechanism in the human body that amazes you the most?");
        var qu1=document.createElement("h1");
        qu1.appendChild(que1);
        q1.insertBefore(qu1,buttons);
    }
    
    function addParagraphsToButtons1() {
        const buttonElements = buttons.getElementsByTagName('button');
        const texts = [
             "A. How the brain solves problems like a supercomputer.", 
             "B. How the voice can shape words, stories, and emotions.",
             "C. How muscles, bones, and nerves work together so I can move, dance, or play sports.", 
             "D. How the ears detect tiny vibrations and turn them into music and rhythm.",
             "E. How emotions and facial expressions help people understand each other.", 
             "F. How thoughts, memories, and feelings interact inside my mind.",
             "G. How the eyes turn light into images and help us imagine whole worlds.", 
             "H. How every organ works together like an ecosystem, especially how we adapt to nature."
            ];
         const style = document.createElement('style');
            style.textContent = `
                .btn-with-desc { 
                    display: flex; 
                    align-items: center; 
                    gap: 20px; 
                    justify-content: flex-start; 
                    margin-bottom: 15px; 
                    width: 100%;
                 }
                .btn-desc { 
                    color: black; 
                    margin: 0; 
                    text-align: left;
                    max-width: 400px;
                    flex: 1;
                    
                }
                .btn-with-desc button {
                flex-shrink: 0;
                padding: 12px 24px;
                background-color: rgba(159, 206, 209, 0.685);
                color: rgb(48, 75, 90);
                border: 2px solid rgba(255,255,255,0.3);
                border-radius: 8px;
                cursor: pointer;
                min-width: 120px;
                }`;
            document.head.appendChild(style);
    // Convert HTMLCollection to Array
        const buttonsArray = Array.from(buttonElements);
    
        buttonsArray.forEach((button, index) => {
             const wrapper = document.createElement('div');
             wrapper.className = 'btn-with-desc';
        
             const desc = document.createElement('p');
             desc.className = 'btn-desc';
             desc.textContent = texts[index];
        
             button.parentNode.insertBefore(wrapper, button);
             wrapper.appendChild(desc);
             wrapper.appendChild(button);
             });
    }

    function result1(){
        var butons = document.querySelectorAll('#buttons button');
    
        for(let i = 0; i < butons.length; i++) {
             butons[i].addEventListener('click', function() {
                
                for(let j = 0; j < butons.length; j++) {
                     if(j !== i) {
                          butons[j].disabled = true;
                          butons[j].style.opacity = '0.5';
                    }
                }
                 to2.style.display = 'block';
                 results1.fill(0);
                 results1[i] = 1;
                
                 console.log('Button', (i+1), 'selected. Results:', results1);
                  return(results1);
         });
        }
     }

    function questiontwo(){ 
        var que2 = document.createTextNode("2. What is the animal you would like to experience a day as?");
        var qu2=document.createElement("h1");
        qu2.appendChild(que2);
        q2.insertBefore(qu2,buttons2);
    }
    
    function addParagraphsToButtons2() {
        const buttonElements2 = buttons2.getElementsByTagName('button');
        const texts2 = [
             "A. Dolphin – to explore how they solve problems and communicate with clicks and signals.", 
             "B. Parrot – to speak, mimic sounds, and 'talk' with everyone around me.",
             "C. Cheetah – to run fast, feel powerful movement, and use my whole body.", 
             "D. Songbird – to create melodies and sing freely in nature.",
             "E. Elephant – to live in a tight, caring group and connect deeply with others.", 
             "F. Owl – to observe quietly, think deeply, and understand the world in silence.",
             "G. Eagle – to see the world from above with incredible vision.", 
             "H. Wolf – to roam forests, understand ecosystems, and feel part of nature."
            ];
         const style2 = document.createElement('style');
            style2.textContent = `
                .btn-with-desc { 
                    display: flex; 
                    align-items: center; 
                    gap: 20px; 
                    justify-content: flex-start; 
                    margin-bottom: 15px; 
                    width: 100%;
                 }
                .btn-desc { 
                    color: black; 
                    margin: 0; 
                    text-align: left;
                    max-width: 400px;
                    flex: 1;
                    
                }
                .btn-with-desc button {
                flex-shrink: 0;
                padding: 12px 24px;
                background-color: rgba(159, 206, 209, 0.685);
                color: rgb(48, 75, 90);
                border: 2px solid rgba(255,255,255,0.3);
                border-radius: 8px;
                cursor: pointer;
                min-width: 120px;
                }`;
            document.head.appendChild(style2);
    // Convert HTMLCollection to Array
        const buttonsArray2 = Array.from(buttonElements2);
    
        buttonsArray2.forEach((button, index) => {
             const wrapper2 = document.createElement('div');
             wrapper2.className = 'btn-with-desc';
        
             const desc2 = document.createElement('p');
             desc2.className = 'btn-desc';
             desc2.textContent = texts2[index];
        
             button.parentNode.insertBefore(wrapper2, button);
             wrapper2.appendChild(desc2);
             wrapper2.appendChild(button);
             });
    }

    function result2(){
        var butons2 = document.querySelectorAll('#buttons2 button');
    
        for(let i = 0; i < butons2.length; i++) {
             butons2[i].addEventListener('click', function() {
                
                for(let j = 0; j < butons2.length; j++) {
                     if(j !== i) {
                          butons2[j].disabled = true;
                          butons2[j].style.opacity = '0.5';
                    }
                }
                 to3.style.display = 'block';
                 results2.fill(0);
                 results2[i] = 1;
                 
                 console.log('Button', (i+1), 'selected. Results:', results2);
                 return(results2);
         });
        }
     }

    function questionthree(){ 
        var que3 = document.createTextNode("3. What superpower would you like to have?");
        var qu3=document.createElement("h1");
        qu3.appendChild(que3);
        q3.insertBefore(qu3,buttons3);
    }
    
    function addParagraphsToButtons3() {
        const buttonElements3 = buttons3.getElementsByTagName('button');
        const texts3= [
             "A. Instant Problem-Solving – the ability to understand patterns and solve any puzzle instantly.", 
             "B. Universal Language Mastery – speak, read, and write every language in the world.",
             "C. Ultimate Agility – move with perfect speed, balance, and strength like a real-life superhero.", 
             "D. Sound Shaping – create music out of thin air or control sound waves with your mind.",
             "E. Emotion Reading – instantly understand how anyone feels and help them.", 
             "F. Inner Vision – see your own thoughts, memories, and future goals clearly at any time.",
             "G. Vision Beyond Limits – see through objects, zoom in like a hawk, or view the world in 360°.", 
             "H. Nature Control – grow plants instantly, talk to animals, or influence weather gently."
            ];
         const style3 = document.createElement('style');
            style3.textContent = `
                .btn-with-desc { 
                    display: flex; 
                    align-items: center; 
                    gap: 20px; 
                    justify-content: flex-start; 
                    margin-bottom: 15px; 
                    width: 100%;
                 }
                .btn-desc { 
                    color: black; 
                    margin: 0; 
                    text-align: left;
                    max-width: 400px;
                    flex: 1;
                    
                }
                .btn-with-desc button {
                flex-shrink: 0;
                padding: 12px 24px;
                background-color: rgba(159, 206, 209, 0.685);
                color: rgb(48, 75, 90);
                border: 2px solid rgba(255,255,255,0.3);
                border-radius: 8px;
                cursor: pointer;
                min-width: 120px;
                }`;
            document.head.appendChild(style3);
    // Convert HTMLCollection to Array
        const buttonsArray3 = Array.from(buttonElements3);
    
        buttonsArray3.forEach((button, index) => {
             const wrapper3 = document.createElement('div');
             wrapper3.className = 'btn-with-desc';
        
             const desc3 = document.createElement('p');
             desc3.className = 'btn-desc';
             desc3.textContent = texts3[index];
        
             button.parentNode.insertBefore(wrapper3, button);
             wrapper3.appendChild(desc3);
             wrapper3.appendChild(button);
             });
    }

    function result3(){
        var butons3 = document.querySelectorAll('#buttons3 button');
    
        for(let i = 0; i < butons3.length; i++) {
             butons3[i].addEventListener('click', function() {
                
                for(let j = 0; j < butons3.length; j++) {
                     if(j !== i) {
                          butons3[j].disabled = true;
                          butons3[j].style.opacity = '0.5';
                    }
                }
                 to4.style.display = 'block';
                 results3.fill(0);
                 results3[i] = 1; 
                
                 console.log('Button', (i+1), 'selected. Results:', results3);
                  return(results3);
         });
        }
     }

    function questionfour(){ 
        var que4 = document.createTextNode("4. If a genie were to give you one wish, what would it be?");
        var qu4=document.createElement("h1");
        qu4.appendChild(que4);
        q4.insertBefore(qu4,buttons4);
    }

    function addParagraphsToButtons4() {
         const buttonElements4 = buttons4.getElementsByTagName('button');
         const texts4= [
             "A. Endless knowledge – to instantly understand anything and solve any problem.", 
             "B. The perfect way with words – to write stories, poems, or speeches that inspire everyone.",
             "C. Super agility and strength – to move like a superhero and master any physical skill.", 
             "D. Musical mastery – to create amazing music or play any instrument perfectly.",
             "E. Everyone gets along – to help people understand each other and feel connected.", 
             "F. Deep self-understanding – to fully know yourself, your feelings, and your purpose.",
             "G. Ultimate imagination – to create incredible visual worlds, designs, or inventions in your mind.", 
             "H. Harmony with nature – to protect animals, grow plants, and live in balance with the Earth."
             ];
        const style4 = document.createElement('style');
        style4.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style4);
    // Convert HTMLCollection to Array
        const buttonsArray4 = Array.from(buttonElements4);

         buttonsArray4.forEach((button, index) => {
             const wrapper4 = document.createElement('div');
             wrapper4.className = 'btn-with-desc';
    
             const desc4 = document.createElement('p');
             desc4.className = 'btn-desc';
             desc4.textContent = texts4[index];
    
             button.parentNode.insertBefore(wrapper4, button);
             wrapper4.appendChild(desc4);
             wrapper4.appendChild(button);
         });
    }

    function result4(){
         var butons4 = document.querySelectorAll('#buttons4 button');
          for(let i = 0; i < butons4.length; i++) {
             butons4[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons4.length; j++) {
                     if(j !== i) {
                         butons4[j].disabled = true;
                        butons4[j].style.opacity = '0.5';
                    }
                }
                to5.style.display = 'block';
                results4.fill(0);
                results4[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results4);
                  return(results4);
               });
           }
       }

    function questionfive(){ 
        var que5 = document.createTextNode("5. What is the first question you would ask a person you meet for the first time?");
        var qu5=document.createElement("h1");
        qu5.appendChild(que5);
        q5.insertBefore(qu5,buttons5);
    }

    function addParagraphsToButtons5() {
         const buttonElements5 = buttons5.getElementsByTagName('button');
         const texts5= [
             "A. 'What's something you've figured out recently that amazed you?'", 
             "B. 'What's your favorite book, song, or story?'",
             "C. 'What's your favorite way to stay active or move your body?'", 
             "D. 'If you could make any song right now, what would it sound like?'",
             "E. 'Who are the most important people in your life?'", 
             "F. 'What's something about yourself you think about a lot?'",
             "G. 'If you could design the perfect place, what would it look like?'", 
             "H. 'What's your favorite place in nature or animal you love?'"
             ];
        const style5 = document.createElement('style');
        style5.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style5);
    // Convert HTMLCollection to Array
        const buttonsArray5 = Array.from(buttonElements5);

         buttonsArray5.forEach((button, index) => {
             const wrapper5 = document.createElement('div');
             wrapper5.className = 'btn-with-desc';
    
             const desc5 = document.createElement('p');
             desc5.className = 'btn-desc';
             desc5.textContent = texts5[index];
    
             button.parentNode.insertBefore(wrapper5, button);
             wrapper5.appendChild(desc5);
             wrapper5.appendChild(button);
         });
    }

    function result5(){
         var butons5 = document.querySelectorAll('#buttons5 button');
          for(let i = 0; i < butons5.length; i++) {
             butons5[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons5.length; j++) {
                     if(j !== i) {
                         butons5[j].disabled = true;
                        butons5[j].style.opacity = '0.5';
                    }
                }
                to6.style.display = 'block';
                results5.fill(0);
                results5[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results5);
                 return(results5);
               });
           }
       }

    function questionsix(){ 
        var que6 = document.createTextNode("6. What is something you would like to change in the Tunisian education system?");
        var qu6=document.createElement("h1");
        qu6.appendChild(que6);
        q6.insertBefore(qu6,buttons6);
    }

    function addParagraphsToButtons6() {
         const buttonElements6 = buttons6.getElementsByTagName('button');
         const texts6= [
             "A. More problem-solving and critical thinking classes.", 
             "B. More storytelling, writing, and discussion opportunities.",
             "C. More physical activity, sports, and hands-on learning.", 
             "D. More music, arts, and creative programs.",
             "E. More teamwork and social projects.", 
             "F. More time for self-reflection and personal growth.",
             "G. More visual learning tools and creative design projects.", 
             "H. More nature, environment, and outdoor learning programs."
             ];
        const style6 = document.createElement('style');
        style6.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style6);
    // Convert HTMLCollection to Array
        const buttonsArray6 = Array.from(buttonElements6);

         buttonsArray6.forEach((button, index) => {
             const wrapper6 = document.createElement('div');
             wrapper6.className = 'btn-with-desc';
    
             const desc6 = document.createElement('p');
             desc6.className = 'btn-desc';
             desc6.textContent = texts6[index];
    
             button.parentNode.insertBefore(wrapper6, button);
             wrapper6.appendChild(desc6);
             wrapper6.appendChild(button);
         });
    }

    function result6(){
         var butons6 = document.querySelectorAll('#buttons6 button');
          for(let i = 0; i < butons6.length; i++) {
             butons6[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons6.length; j++) {
                     if(j !== i) {
                         butons6[j].disabled = true;
                        butons6[j].style.opacity = '0.5';
                    }
                }
                to7.style.display = 'block';
                results6.fill(0);
                results6[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results6);
                  return(results6);
               });
           }
       }

    function questionseven(){ 
        var que7 = document.createTextNode("7. What is your dream trip?");
        var qu7=document.createElement("h1");
        qu7.appendChild(que7);
        q7.insertBefore(qu7,buttons7);
    }

    function addParagraphsToButtons7() {
         const buttonElements7 = buttons7.getElementsByTagName('button');
         const texts7= [
             "A. A tour of science museums and tech labs around the world.", 
             "B. A visit to the city of your favorite writers, poets, or storytellers.",
             "C. An adventure trip – hiking, surfing, skiing, or exploring active challenges.", 
             "D. A music capital like Los Angeles, Seoul, or London – concerts, studios, and inspiration.",
             "E. A trip with friends to a place full of people, culture, and new connections.", 
             "F. A peaceful retreat – mountains, quiet towns, or somewhere to reflect.",
             "G. A visually stunning place – Tokyo lights, Santorini sunsets, or architectural wonders.", 
             "H. A nature-filled destination – rainforests, safaris, national parks, or wildlife."
             ];
        const style7 = document.createElement('style');
        style7.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style7);
    // Convert HTMLCollection to Array
        const buttonsArray7 = Array.from(buttonElements7);

         buttonsArray7.forEach((button, index) => {
             const wrapper7 = document.createElement('div');
             wrapper7.className = 'btn-with-desc';
    
             const desc7 = document.createElement('p');
             desc7.className = 'btn-desc';
             desc7.textContent = texts7[index];
    
             button.parentNode.insertBefore(wrapper7, button);
             wrapper7.appendChild(desc7);
             wrapper7.appendChild(button);
         });
    }

    function result7(){
         var butons7 = document.querySelectorAll('#buttons7 button');
          for(let i = 0; i < butons7.length; i++) {
             butons7[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons7.length; j++) {
                     if(j !== i) {
                         butons7[j].disabled = true;
                        butons7[j].style.opacity = '0.5';
                    }
                }
                to8.style.display = 'block';
                results7.fill(0);
                results7[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results7);
                  return(results7);
               });
           }
       }

    function questioneight(){ 
        var que8 = document.createTextNode("8. What is the secret of the universe you would like to solve?");
        var qu8=document.createElement("h1");
        qu8.appendChild(que8);
        q8.insertBefore(qu8,buttons8);
    }

    function addParagraphsToButtons8() {
         const buttonElements8 = buttons8.getElementsByTagName('button');
         const texts8= [
             "A. How everything works together logically.", 
             "B. The story behind life and consciousness.",
             "C. The limits of human strength and movement.", 
             "D. The origins of music and sound.",
             "E. How people truly connect.", 
             "F. The nature of the mind and self.",
             "G. The secrets of space and dimensions.", 
             "H. The patterns of nature and life on Earth."
             ];
        const style8 = document.createElement('style');
        style8.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style8);
    // Convert HTMLCollection to Array
        const buttonsArray8 = Array.from(buttonElements8);

         buttonsArray8.forEach((button, index) => {
             const wrapper8 = document.createElement('div');
             wrapper8.className = 'btn-with-desc';
    
             const desc8 = document.createElement('p');
             desc8.className = 'btn-desc';
             desc8.textContent = texts8[index];
    
             button.parentNode.insertBefore(wrapper8, button);
             wrapper8.appendChild(desc8);
             wrapper8.appendChild(button);
         });
    }

    function result8(){
         var butons8 = document.querySelectorAll('#buttons8 button');
          for(let i = 0; i < butons8.length; i++) {
             butons8[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons8.length; j++) {
                     if(j !== i) {
                         butons8[j].disabled = true;
                        butons8[j].style.opacity = '0.5';
                    }
                }
                to9.style.display = 'block';
                results8.fill(0);
                results8[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results8);
                  return(results8);
               });
           }
       }

    function questionnine(){ 
        var que9 = document.createTextNode("9. What is one thing you would like to change in the course of history?");
        var qu9=document.createElement("h1");
        qu9.appendChild(que9);
        q9.insertBefore(qu9,buttons9);
    }

    function addParagraphsToButtons9() {
         const buttonElements9 = buttons9.getElementsByTagName('button');
         const texts9= [
             "A. Stop major wars to save lives.", 
             "B. Give everyone access to education sooner.",
             "C. Make sports and games more equal for everyone.", 
             "D. Preserve lost music and art.",
             "E. End slavery and unfair treatment of people.", 
             "F. Help people understand themselves and each other sooner.",
             "G. Save famous landmarks or buildings from being destroyed.", 
             "H. Protect the environment earlier."
             ];
        const style9 = document.createElement('style');
        style9.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style9);
    // Convert HTMLCollection to Array
        const buttonsArray9 = Array.from(buttonElements9);

         buttonsArray9.forEach((button, index) => {
             const wrapper9 = document.createElement('div');
             wrapper9.className = 'btn-with-desc';
    
             const desc9 = document.createElement('p');
             desc9.className = 'btn-desc';
             desc9.textContent = texts9[index];
    
             button.parentNode.insertBefore(wrapper9, button);
             wrapper9.appendChild(desc9);
             wrapper9.appendChild(button);
         });
    }

    function result9(){
         var butons9 = document.querySelectorAll('#buttons9 button');
          for(let i = 0; i < butons9.length; i++) {
             butons9[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons9.length; j++) {
                     if(j !== i) {
                         butons9[j].disabled = true;
                        butons9[j].style.opacity = '0.5';
                    }
                }
                to10.style.display = 'block';
                results9.fill(0);
                results9[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results9);
                  return(results9);
               });
           }
       }

    function questionten(){ 
        var que10 = document.createTextNode("10. If you were to be famous, what would you want to be famous for?");
        var qu10=document.createElement("h1");
        qu10.appendChild(que10);
        q10.insertBefore(qu10,buttons10);
    }

    function addParagraphsToButtons10() {
         const buttonElements10 = buttons10.getElementsByTagName('button');
         const texts10= [
             "A. Inventing something useful.", 
             "B. Writing a bestselling book or creating amazing stories.",
             "C. Being an athlete or doing incredible physical challenges.", 
             "D. Making hit songs or becoming a great musician.",
             "E. Helping people and inspiring others.", 
             "F. Sharing wisdom and helping people understand themselves.",
             "G. Creating amazing designs, art, or movies.", 
             "H. Protecting nature or animals."
             ];
        const style10 = document.createElement('style');
        style10.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style10);
    // Convert HTMLCollection to Array
        const buttonsArray10 = Array.from(buttonElements10);

         buttonsArray10.forEach((button, index) => {
             const wrapper10 = document.createElement('div');
             wrapper10.className = 'btn-with-desc';
    
             const desc10 = document.createElement('p');
             desc10.className = 'btn-desc';
             desc10.textContent = texts10[index];
    
             button.parentNode.insertBefore(wrapper10, button);
             wrapper10.appendChild(desc10);
             wrapper10.appendChild(button);
         });
    }

    function result10(){
         var butons10 = document.querySelectorAll('#buttons10 button');
          for(let i = 0; i < butons10.length; i++) {
             butons10[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons10.length; j++) {
                     if(j !== i) {
                         butons10[j].disabled = true;
                        butons10[j].style.opacity = '0.5';
                    }
                }
                to11.style.display = 'block';
                results10.fill(0);
                results10[i] = 1; 
                
                 console.log('Button', (i+1), 'selected. Results:', results10);
                  return(results10);
               });
           }
       }

    function questioneleven(){ 
        var que11 = document.createTextNode("11. What is your ideal way to study for exams?");
        var qu11=document.createElement("h1");
        qu11.appendChild(que11);
        q11.insertBefore(qu11,buttons11);
    }

    function addParagraphsToButtons11() {
         const buttonElements11 = buttons11.getElementsByTagName('button');
         const texts11= [
             "A. Solving problems and practicing examples.", 
             "B. Reading notes aloud or explaining them to someone.",
             "C. Moving around while studying or using hands-on activities.", 
             "D. Turning lessons into songs or rhythms.",
             "E. Studying in groups or discussing with friends.", 
             "F. Studying alone and reflecting deeply.",
             "G. Using charts, diagrams, and visual aids.", 
             "H. Studying outdoors or connecting lessons to real-life nature examples."
             ];
        const style11 = document.createElement('style');
        style11.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style11);
    // Convert HTMLCollection to Array
        const buttonsArray11 = Array.from(buttonElements11);

         buttonsArray11.forEach((button, index) => {
             const wrapper11 = document.createElement('div');
             wrapper11.className = 'btn-with-desc';
    
             const desc11 = document.createElement('p');
             desc11.className = 'btn-desc';
             desc11.textContent = texts11[index];
    
             button.parentNode.insertBefore(wrapper11, button);
             wrapper11.appendChild(desc11);
             wrapper11.appendChild(button);
         });
    }

    function result11(){
         var butons11 = document.querySelectorAll('#buttons11 button');
          for(let i = 0; i < butons11.length; i++) {
             butons11[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons11.length; j++) {
                     if(j !== i) {
                         butons11[j].disabled = true;
                        butons11[j].style.opacity = '0.5';
                    }
                }
                to12.style.display = 'block';
                results11.fill(0);
                results11[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results11);
                  return(results11);
               });
           }
       }

    function questiontwelve(){ 
        var que12 = document.createTextNode("12. What kind of people do you usually prefer not to interact with?");
        var qu12=document.createElement("h1");
        qu12.appendChild(que12);
        q12.insertBefore(qu12,buttons12);
    }

    function addParagraphsToButtons12() {
         const buttonElements12 = buttons12.getElementsByTagName('button');
         const texts12= [
             "A. People who are illogical or ignore facts.", 
             "B. People who never communicate clearly or lie a lot.",
             "C. People who are lazy or avoid action.", 
             "D. People who are always noisy or chaotic.",
             "E. People who are mean, selfish, or insensitive to others.", 
             "F. People who don't think about themselves or their actions.",
             "G. People who lack creativity or imagination.", 
             "H. People who harm nature or disrespect animals."
             ];
        const style12 = document.createElement('style');
        style12.textContent = `
            .btn-with-desc { 
                display: flex; 
                align-items: center; 
                gap: 20px; 
                justify-content: flex-start; 
                margin-bottom: 15px; 
                width: 100%;
             }
            .btn-desc { 
                color: black; 
                margin: 0; 
                text-align: left;
                max-width: 400px;
                flex: 1;
                
            }
            .btn-with-desc button {
            flex-shrink: 0;
            padding: 12px 24px;
            background-color: rgba(159, 206, 209, 0.685);
            color: rgb(48, 75, 90);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            cursor: pointer;
            min-width: 120px;
            }`;
        document.head.appendChild(style12);
    // Convert HTMLCollection to Array
        const buttonsArray12 = Array.from(buttonElements12);

         buttonsArray12.forEach((button, index) => {
             const wrapper12 = document.createElement('div');
             wrapper12.className = 'btn-with-desc';
    
             const desc12 = document.createElement('p');
             desc12.className = 'btn-desc';
             desc12.textContent = texts12[index];
    
             button.parentNode.insertBefore(wrapper12, button);
             wrapper12.appendChild(desc12);
             wrapper12.appendChild(button);
         });
    }

    function result12(){
         var butons12 = document.querySelectorAll('#buttons12 button');
          for(let i = 0; i < butons12.length; i++) {
             butons12[i].addEventListener('click', function() {
            
                for(let j = 0; j < butons12.length; j++) {
                     if(j !== i) {
                         butons12[j].disabled = true;
                        butons12[j].style.opacity = '0.5';
                    }
                }
                RESULT.style.display = 'block';
                results12.fill(0);
                results12[i] = 1; 
            
                 console.log('Button', (i+1), 'selected. Results:', results12);
                  return(results12);
               });
           }
       }
    function finals(){
        const types=[
            "Logical–Mathematical",
            "Linguistic",
            "Bodily–Kinesthetic",
            "Musical",
            "Interpersonal",
            "Intrapersonal",
            "Visual–Spatial",
            "Naturalistic"
        ];
        var somme=[0,0,0,0,0,0,0,0];
        for(i=0;i<results1.length;i++){ 
            somme[i]=somme[i] + results1[i] + results2[i] + results3[i] + results4[i] + results5[i] + results6[i] + results7[i] + results8[i] + results9[i] + results10[i] + results11[i] + results12[i];
        }
        function findLargestNumberIndexUsingMathMax(arr) {
             if (arr.length === 0) {
                return -1;
             }

             const maxNumber = Math.max(...arr); // Finds the largest number
             return arr.indexOf(maxNumber); // Finds the index of the first occurrence of the largest number
        }
        const theindication =findLargestNumberIndexUsingMathMax(somme);
        const intelligence = types[theindication];
        console.log("your intelligence type is ",intelligence,"intelligence");
        const myresult=document.createTextNode("your intelligence type is  " + intelligence + " intelligence");
        let thefinal=document.createElement("p");
        thefinal.appendChild(myresult);
        final.insertBefore(thefinal,comment);

    }





    startButton.addEventListener('click', function() {
        // Hide cover and show quiz content
        cover.style.display = 'none';
        quizContent.style.display = 'block';
        
        // Show first question
        q1.style.display = 'block';
        
        // Initialize question
        questionone();
        addParagraphsToButtons1();
        result1();
    });
    to2.addEventListener('click', function() {
        // Hide cover and show quiz content
        q1.style.display = 'none';
       
        
        // Show first question
        q2.style.display = 'block';
        
        // Initialize question
        questiontwo();
        addParagraphsToButtons2();
        result2();
    });

    to3.addEventListener('click', function() {
        // Hide cover and show quiz content
        q2.style.display = 'none';
       
        
        // Show first question
        q3.style.display = 'block';
        
        // Initialize question
        questionthree();
        addParagraphsToButtons3();
        result3();
    });
    to4.addEventListener('click', function() {
        // Hide cover and show quiz content
        q3.style.display = 'none';
       
        
        // Show first question
        q4.style.display = 'block';
        
        // Initialize question
        questionfour();
        addParagraphsToButtons4();
        result4();
    });

    to5.addEventListener('click', function() {
        q4.style.display = 'none';
        q5.style.display = 'block';
        questionfive();
        addParagraphsToButtons5();
        result5();
    });

    to6.addEventListener('click', function() {
        q5.style.display = 'none';
        q6.style.display = 'block';
        questionsix();
        addParagraphsToButtons6();
        result6();
    });

    to7.addEventListener('click', function() {
        q6.style.display = 'none';
        q7.style.display = 'block';
        questionseven();
        addParagraphsToButtons7();
        result7();
    });

    to8.addEventListener('click', function() {
        q7.style.display = 'none';
        q8.style.display = 'block';
        questioneight();
        addParagraphsToButtons8();
        result8();
    });

    to9.addEventListener('click', function() {
        q8.style.display = 'none';
        q9.style.display = 'block';
        questionnine();
        addParagraphsToButtons9();
        result9();
    });

    to10.addEventListener('click', function() {
        q9.style.display = 'none';
        q10.style.display = 'block';
        questionten();
        addParagraphsToButtons10();
        result10();
    });

    to11.addEventListener('click', function() {
        q10.style.display = 'none';
        q11.style.display = 'block';
        questioneleven();
        addParagraphsToButtons11();
        result11();
    });

    to12.addEventListener('click', function() {
        q11.style.display = 'none';
        q12.style.display = 'block';
        questiontwelve();
        addParagraphsToButtons12();
        result12();
    });
    RESULT.addEventListener('click', function() {
        q12.style.display = 'none';
        quizContent.style.display = 'none';
        finals();
        final.style.display = 'block';
        final.style.display = 'flex';
    });


});