import React, { useEffect, useRef } from 'react'

function Results() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();
    let resultParaRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let englishResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();

    let CalculateResult = () => {
        console.log("inside calculateResult");
        let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguInputRef.current.value);
                    let hindiMarks = Number(hindiInputRef.current.value);
                    let englishMarks = Number(englishInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let scienceMarks = Number(scienceInputRef.current.value);
                    let socialMarks = Number(socialInputRef.current.value);
                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
                    
                    
                    alert(` ${firstName} ${lastName} Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalMarks}`;
                    console.log(totalMarks);
    };

    

    useEffect(()=>{
       alert("Welcome to Our Website")
    },[]);

    let teluguOnFocus = ()=>{
        console.log("Telugu-onFocus");
        teluguInputRef.current.style.backgroundColor = "green";
        teluguInputRef.current.style.color = "white";
    };
    let teluguOnChange = ()=>{
        if(teluguInputRef.current.value >= 0 && teluguInputRef.current.value <= 100){
            if(teluguInputRef.current.value >=35){
                teluguResultRef.current.innerHTML = "Pass";
                teluguResultRef.current.style.backgroundColor = "green";
                teluguResultRef.current.style.color = "white";
            }else{
                teluguResultRef.current.innerHTML = "Fail";
                teluguResultRef.current.style.backgroundColor = "red";
                teluguResultRef.current.style.color = "white";
            }

           }else{
            teluguResultRef.current.innerHTML = "Invalid";
            teluguResultRef.current.style.backgroundColor = "black";
            teluguResultRef.current.style.color = "white";
           }
    };
    let teluguOnBlur =() => {
        console.log("Telugu-onBlur");
                    teluguInputRef.current.style.backgroundColor = "";
                    teluguInputRef.current.style.color = "black";
    };
let hindiOnFocus = ()=>{
    console.log("Hindi-onFocus");
                    hindiInputRef.current.style.backgroundColor = "orange";
                    hindiInputRef.current.style.color = "white";
};
let hindiOnChange = ()=>{
    if(hindiInputRef.current.value >= 0 && hindiInputRef.current.value <= 100){
    if(hindiInputRef.current.value >=35){
        hindiResultRef.current.innerHTML = "Pass";
        hindiResultRef.current.style.backgroundColor = "green";
        hindiResultRef.current.style.color = "white";
    }else{
        hindiResultRef.current.innerHTML = "Fail";
        hindiResultRef.current.style.backgroundColor = "red";
        hindiResultRef.current.style.color = "white";
    }

   }else{
    hindiResultRef.current.innerHTML = "Invalid";
    hindiResultRef.current.style.backgroundColor = "black";
    hindiResultRef.current.style.color = "white";
   }
};
let hindiOnBlur =()=>{
    console.log("Hindi-onBlur");
                    hindiInputRef.current.style.backgroundColor = "";
                    hindiInputRef.current.style.color = "black";
};
let englishOnFocus =()=>{
    console.log("English-onFocus");
                    englishInputRef.current.style.backgroundColor = "black";
                    englishInputRef.current.style.color = "white";
};
let englishOnChange =()=>{
    if(englishInputRef.current.value >= 0 && englishInputRef.current.value <= 100){
        if(englishInputRef.current.value >=35){
            englishResultRef.current.innerHTML = "Pass";
            englishResultRef.current.style.backgroundColor = "green";
            englishResultRef.current.style.color = "white";
        }else{
            englishResultRef.current.innerHTML = "Fail";
            englishResultRef.current.style.backgroundColor = "red";
            englishResultRef.current.style.color = "white";
        }

       }else{
        englishResultRef.current.innerHTML = "Invalid";
        englishResultRef.current.style.backgroundColor = "black";
        englishResultRef.current.style.color = "white";
       }
};
let englishOnBlur =()=>{
    console.log("English-onBlur");
                    englishInputRef.current.style.backgroundColor = "";
                    englishInputRef.current.style.color = "black";
};
let mathsOnFocus = ()=>{
    console.log("Maths-onFocus");
                    mathsInputRef.current.style.backgroundColor = "red";
                    mathsInputRef.current.style.color = "white";
};
let mathsOnChange = ()=>{
    if(mathsInputRef.current.value >= 0 && mathsInputRef.current.value <= 100){
        if(mathsInputRef.current.value >=35){
            mathsResultRef.current.innerHTML = "Pass";
            mathsResultRef.current.style.backgroundColor = "green";
            mathsResultRef.current.style.color = "white";
        }else{
            mathsResultRef.current.innerHTML = "Fail";
            mathsResultRef.current.style.backgroundColor = "red";
            mathsResultRef.current.style.color = "white";
        }

       }else{
        mathsResultRef.current.innerHTML = "Invalid";
        mathsResultRef.current.style.backgroundColor = "black";
        mathsResultRef.current.style.color = "white";
       }
};
let mathsOnBlur = ()=>{
    console.log("Maths-onBlur");
                    mathsInputRef.current.style.backgroundColor = "";
                    mathsInputRef.current.style.color = "black";
};
let scienceOnFocus =()=>{
    console.log("Science-onFocus");
                    scienceInputRef.current.style.backgroundColor = "Yellow";
                    scienceInputRef.current.style.color = "black";
};
let scienceOnChange =()=>{
    if(scienceInputRef.current.value >= 0 && scienceInputRef.current.value <= 100){
        if(scienceInputRef.current.value >=35){
            scienceResultRef.current.innerHTML = "Pass";
             scienceResultRef.current.style.backgroundColor = "green";
             scienceResultRef.current.style.color = "white";
        }else{
             scienceResultRef.current.innerHTML = "Fail";
             scienceResultRef.current.style.backgroundColor = "red";
             scienceResultRef.current.style.color = "white";
        }

       }else{
         scienceResultRef.current.innerHTML = "Invalid";
         scienceResultRef.current.style.backgroundColor = "black";
         scienceResultRef.current.style.color = "white";
       }
};
let scienceOnBlur =()=>{
    console.log("Science-onBlur");
                    scienceInputRef.current.style.backgroundColor = "";
                    scienceInputRef.current.style.color = "black";
};

let socialOnFocus = ()=>{
    console.log("Social-onFocus");
    socialInputRef.current.style.backgroundColor = "blue";
    socialInputRef.current.style.color = "white";
};
let socialOnChange = ()=>{
    if(socialInputRef.current.value >= 0 && socialInputRef.current.value <= 100){
        if(socialInputRef.current.value >=35){
            socialResultRef.current.innerHTML = "Pass";
            socialResultRef.current.style.backgroundColor = "green";
            socialResultRef.current.style.color = "white";
        }else{
            socialResultRef.current.innerHTML = "Fail";
            socialResultRef.current.style.backgroundColor = "red";
            socialResultRef.current.style.color = "white";
        }

       }else{
        socialResultRef.current.innerHTML = "Invalid";
        socialResultRef.current.style.backgroundColor = "black";
        socialResultRef.current.style.color = "white";
       }
};
let socialOnBlur = ()=>{
    console.log("Social-onBlur");
    socialInputRef.current.style.backgroundColor = "";
    socialInputRef.current.style.color = "black";
};

  return (
    <div>
        <form className="markssheet">
            <div>
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}
                onFocus={()=>{
                    console.log("FirstName-onFocus");
                    firstNameInputRef.current.style.backgroundColor = "lightblue";
                    firstNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("FirstName-onChange");
                }} 
                onBlur={()=>{
                    console.log("FirstName-onBlur");
                    firstNameInputRef.current.style.backgroundColor = "";
                    firstNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}
                onFocus={()=>{
                    console.log("LastName-onFocus");
                    lastNameInputRef.current.style.backgroundColor = "lightpink";
                    lastNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("LastName-onChange");
                }} 
                onBlur={()=>{
                    console.log("LastName-onBlur");
                    lastNameInputRef.current.style.backgroundColor = "";
                    lastNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={teluguInputRef}
                onFocus={()=>{
                    teluguOnFocus();
                    
                }} 
                onChange={()=>{
                    teluguOnChange();
                   
                }} 
                onBlur={()=>{
                    teluguOnBlur();
                }}></input>
                <span ref={teluguResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hindiInputRef}
                onFocus={()=>{
                    hindiOnFocus();
                }} 
                onChange={()=>{
                    hindiOnChange();
                }} 
                onBlur={()=>{
                    hindiOnBlur();
                }}></input>
                <span ref={hindiResultRef}></span>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={englishInputRef}
                onFocus={()=>{
                    englishOnFocus();
                }} 
                onChange={()=>{
                   englishOnChange();
                }} 
                onBlur={()=>{
                    englishOnBlur();
                }}></input>
                <span ref={englishResultRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type="number" ref={mathsInputRef}
                onFocus={()=>{
                    mathsOnFocus();
                }} 
                onChange={()=>{
                   mathsOnChange();
                }} 
                onBlur={()=>{
                    mathsOnBlur();
                }}></input>
                <span ref={mathsResultRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={scienceInputRef}
                onFocus={()=>{
                    scienceOnFocus();
                }} 
                onChange={()=>{
                   scienceOnChange();
                }} 
                onBlur={()=>{
                    scienceOnBlur();
                }}></input>
                <span ref={scienceResultRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socialInputRef}
                onFocus={()=>{
                   socialOnFocus();
                }} 
                onChange={()=>{
                    socialOnChange();
                }} 
                onBlur={()=>{
                   socialOnBlur();
                }}></input>
                <span ref={socialResultRef}></span>
            </div>
            <div>
                <button type="button" 
                onClick={()=>{
                    CalculateResult();
                }}>Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default Results