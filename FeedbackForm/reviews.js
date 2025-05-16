const reviewList = document.querySelector('#reviewList')

let feedback = JSON.parse((localStorage.getItem("feedbackArray"))) || []

 // localStorage.clear()

if (feedback.length == 0){
    let li = document.createElement("li");
    li.innerHTML = "No feedback stored";
    reviewList.appendChild(li)
}
else{
 feedback.forEach((element)=>{
    let li = document.createElement("li");
    li.innerHTML = `${element.nameValue} gave rating: ${element.ratingValue}, and left comments: ${element.commentsValue}`;
    reviewList.appendChild(li)
 })
}