console.log('Starting');

let image;
let  url = "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"

fetch(url).then((response) => {
  console.log("It worked :")
  return response.blob();
}).then((myBlob) =>{
  console.log("myBlob",myBlob)
  let objectURL = URL.createObjectURL(myBlob);
  console.log("url",objectURL)
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).then(() =>{
  console.log ('All done!'+ image.src + 'displayed.');
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});


