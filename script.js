function myFunction(){
    let x = document.getElementById("numb").value;
    let y = document.getElementById("numb2").value;
    let text  ,sum;


    text = x*y;
    
    document.getElementById("answer").innerHTML = "Answer: "+text;

}