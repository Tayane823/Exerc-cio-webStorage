

const endBackColor = document.querySelector('.back-collor-opcao')
const endFontColor = document.querySelector('.text-color-opcao')
const endFontSize = document.querySelector('.text-size-opcao')
const endFontStyle = document.querySelector('.font-style-opcao')

function settingPreference() {
    //fixando a cor de fundo selecionada no localStorage
    const myBackground = localStorage.getItem('background')
    document.body.style.backgroundColor = JSON.parse(myBackground)
    
    //criando um input e button para o backgroundColor 
    const backColor = document.createElement("input");
    backColor.className = "back-color";
    endBackColor.appendChild(backColor);
     
    const buttonBackColor = document.createElement('button')
    buttonBackColor.className = "button-back-color"
    buttonBackColor.innerHTML = "Escolher cor de fundo"
    endBackColor.appendChild(buttonBackColor);
    buttonBackColor.addEventListener('click', changeBackColor)



    // fixando a cor da fonte selecionada no localStorage
    const myFontColor = localStorage.getItem('fontColor')
    document.body.style.color = JSON.parse(myFontColor)
    
    //criando um input e button para o fontColor
    const fontColor = document.createElement("input");
    fontColor.className = "font-color";
    endFontColor.appendChild(fontColor);

    const buttonFontColor = document.createElement('button')
    buttonFontColor.className = "button-font-color"
    buttonFontColor.innerHTML = "Escolher cor da fonte"
    endFontColor.appendChild(buttonFontColor);
    buttonFontColor.addEventListener('click', changeFontColor)



    // fixando o tamanho da fonte selecionada no localStorage
    const myFontSize = localStorage.getItem('fontSize')
    document.body.style.fontSize = JSON.parse(myFontSize)
    //criando um input e button para o fontSize
    const fontSize = document.createElement("input");
    fontSize.className = "font-size";
    endFontSize.appendChild(fontSize); 
    
    const buttonFontSize = document.createElement('button')
    buttonFontSize.className = "button-"
    buttonFontSize.innerHTML = "Escolher tamanho da fonte"
    endFontSize.appendChild(buttonFontSize);
    buttonFontSize.addEventListener('click', changeFontSize)



    // fixando o estilo da fonte selecionada no localStorage
    const myFontStyle = localStorage.getItem('fontStyle')
    document.body.style.fontFamily = JSON.parse(myFontStyle)
    //criando um input e button para o fontStyle
    const fontStyle = document.createElement("input");
    fontStyle.className = "Font-style";
    endFontStyle.appendChild(fontStyle);

    const buttonFontStyle = document.createElement('button')
    buttonFontStyle.className = "button-"
    buttonFontStyle.innerHTML = "Escolher fonte"
    endFontStyle.appendChild(buttonFontStyle);
    buttonFontStyle.addEventListener('click', changeFontStyle)

    function changeBackColor (colorSelected){
        colorSelected = backColor.value
        document.body.style.backgroundColor = colorSelected
        localStorage.setItem('background', JSON.stringify(colorSelected))
    }
    function changeFontColor(fontColorSelected){
        fontColorSelected = fontColor.value;
        document.body.style.color = fontColorSelected
        localStorage.setItem('fontColor', JSON.stringify(fontColorSelected))
    } 
    function changeFontSize(fontSizeSelected){
        fontSizeSelected = fontSize.value;
        document.body.style.fontSize = fontSizeSelected
        localStorage.setItem('fontSize', JSON.stringify(fontSizeSelected))
    }
    function changeFontStyle(fontStyleSelected){
        fontStyleSelected = fontStyle.value;
        document.body.style.fontFamily = fontStyleSelected
        localStorage.setItem('fontStyle', JSON.stringify(fontStyleSelected))
    }
}
window.onload = settingPreference()







