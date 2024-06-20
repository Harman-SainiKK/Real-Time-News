const apikey = "bb22cb3c6b4d4cd39681c8c2776caa3a";
var content = document.querySelector(".content");
const business = document.querySelector('.nav2 #business')
const ai = document.querySelector('.nav2 #ai')
const politician = document.querySelector('.nav2 #politician')
const government = document.querySelector('.nav2 #government')
const haryana = document.querySelector('.nav2 #haryana')
var page2 = document.querySelector('.page2')
var inpt = document.querySelector('.nav3 form input')
var search = document.querySelector('.nav3 form i')

var today = new Date();
var year = today.getFullYear();
var mes = today.getMonth() + 1;
var dia = today.getDate();
var fecha = dia + "-" + mes + "-" + year;

var clutter = "";

const page1 = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=india&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
     console.log(articles);

    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      content.innerHTML = clutter;
      // console.log("harman")
    });
  } catch (error) {
    console.log(error);
  }
  
};

 


business.addEventListener("click",async function(){
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=business&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles); 
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  // content.style.display = "flex"
})

ai.addEventListener("click",async function(){
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=ai&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  // content.style.display = "flex"
})

haryana.addEventListener("click",async function(){
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=haryana&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  // content.style.display = "flex"
})
politician.addEventListener("click",async function(){
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=politician&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  // content.style.display = "flex"
})
government.addEventListener("click",async function(){
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=government&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  // content.style.display = "flex"
})


inpt.addEventListener('keypress', async function(e){
  if(e.key==="Enter"){
    {e.preventDefault();}
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${inpt.value}&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    inpt.value = ""
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
  }
  
})

search.addEventListener('click', async function(e){
  {e.preventDefault();}
  content.style.display = "none"
  clutter = ""
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${inpt.value}&from=${fecha}&sortBy=publishedAt&apiKey=${apikey}`
    );
    const data = await response.json();
    const articles = data.articles;
    // console.log(articles);
    // console.log("busnu")
    articles.forEach(function (elem) {
      if (elem.urlToImage != null) {
        clutter += `
        <div class="container">
            <div class="images">
                <a href=${elem.url} target="blank"><img src=${elem.urlToImage} alt=""></a>
                    
                </div>
                 <a href=${elem.url} target="blank">${elem.title}</a>
                </div>
            `;
      }
      // console.log(clutter)
      page2.innerHTML = clutter;
    });
  } catch (error) {
    console.log(error);
  }
})