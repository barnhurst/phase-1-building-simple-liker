// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// query for elements with class like-glyph
const heart = document.querySelectorAll('.like-glyph');
//iterate over all heart elements
heart.forEach(el => 
  // added click event listener to elements
  el.addEventListener('click', () => {
  
    mimicServerCall().then(() => {
      like(el);
    }).catch(() => {document.getElementById('modal').className ='visible';
    
    setTimeout(() => {
      document.getElementById('modal').className ='hidden'
    }, 3000);

    })
    


  })
  
)
function like(el){
  console.log(el)
  if (el.className === "like-glyph")
  {
    console.log("heart1")
    el.innerHTML = FULL_HEART
    el.className = "like-glyph activated-heart"
  } 
  else if (el.className === "like-glyph activated-heart") 
  {
    console.log("heart2")
    el.innerHTML = EMPTY_HEART
    el.className = "like-glyph"
  }   
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
