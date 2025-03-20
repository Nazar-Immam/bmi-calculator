const container = document.querySelector('.form-container')
const heightInput = document.getElementById('height-inp')
const weightInput = document.getElementById('weight-inp')
const para = document.getElementById('result')
const button = document.getElementById('button')

function bmi(){
    button.addEventListener('click', function (event) {
        event.preventDefault()
        const hvalue = heightInput.value 
        const wvalue = weightInput.value
        const calculation =  wvalue / (hvalue*hvalue)
        console.log(calculation);
        
        para.innerHTML = `YOUR BMI IS ${calculation.toFixed(2)}`
     
        para.appendChild(result)
        
     })
}
bmi()