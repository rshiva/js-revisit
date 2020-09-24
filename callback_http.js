let url="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

function loadAssets(url, type, callback){
  //  let url = "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";
   let request  = new XMLHttpRequest();
   request.open('GET',url);
   request.responseType = type;

   request.onload = function(){
     callback(request.response);
   };

   request.send()
}

function displayImage(blob){
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAssets(url, 'blob', displayImage)