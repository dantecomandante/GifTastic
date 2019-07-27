let gif={
    topics:["pizza","hotdog","pie","noodles","chicken nuggets","avocado"],
    search:""
}
let c=0;
function printBtn() {
    for (let i = 0; i < gif.topics.length; i++) {
       let btn = document.createElement("button");
       let t = document.createTextNode(gif.topics[i]);
       btn.setAttribute("class","btn");
       btn.appendChild(t);     
       document.body.appendChild(btn);
       let mytopic=gif.topics[c]
       btn.onclick = function() {
        
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=QpGy8tofOxdRNC5gq0pmrLjq6jadIHbx&q=${mytopic}&limit=10&offset=0&rating=R&lang=en
        `)
        .then(mytopic=>mytopic.json())
        .then(gifs=>{
          document.querySelector('#gifs').innerHTML = ''
          gifs.data.forEach(element => {
            let ele=document.createElement('img')
            ele.setAttribute('src',element.images.original.url)
            document.getElementById('gifs').append(ele)
            
          });
        })
      }
      c++
    }
}

  

function search(){


}
function clickStill(){
  
}



printBtn();