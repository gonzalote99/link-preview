const content = document.getElementById('content');
function getPreview() {
  content.style.backgroundColor = '#080808';
  content.innerHTML = '';
  const givenurl = document.getElementById('lnk').value;
  fetch('https://api.linkpreview.net/?key=384bd30487e246153d26b7699700c661&q='+ givenurl)
  .then(res => res.json())
  .then(data => {
    const status = document.createElement('p');
    content.appendChild(status);
    if(data.error == undefined ) {
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const url = document.createElement('h4');
      const description = document.createElement('p');
      image.src = data.image;
      title.innerHTML = data.title;
      url.innerHTML = data.url;
      description.innerHTML = data.description;
      content.append(image, title, url, description);


    } else {
      status.innerHTML = 'not found';
    }
  });

}
