const data = document.querySelector('#inputTextArea')
const output = document.querySelector('#converter')
function textChanger (){
    const myvelue= data.value;
    const splitData=myvelue.split(' ');
    console.log(splitData)
    const result = splitData
    .map((word) => {
      return word[0].toUpperCase()+ word.substring(1);
    }).join('')
    console.log(result)
    
  output.innerText = result;
  
  
}
const clearForm = () => {
    data.value = "";
    output.innerText = "";
  };