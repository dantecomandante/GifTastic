let gif={
    topics:["pizza","hotdog","pie","noodles","chicken nuggets","avocado"],
    search:""
}

fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5'))
  .then(function(response) {
    return response.json();
  })
 
        

