const key = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`

async function fetchNews() {

    try {
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // TODO: Add a function call to display the news
            displayNews(data.articles);
        }

    catch (error) {
      console.error('There was an error!', error);
    }
  }
  


function displayNews(newsData) {
   console.log(newsData)
 
    const newsDiv = document.getElementsByClassName("newsDiv")[0];
    let news = newsData
    const row = document.createElement("div");
    row.className = "row";
    console.log(news)
        //create the bootstrap row and column divs for the grid
        

        for(const article of newsData) {

            let headline = article.title;
            let author = article.author;
            let shortDescription = article.description;
            let source = article.source.name;
            let articlePublished = article.publishedAt;
            let imageUrl = article.urlToImage;

            console.log(newsData)            
            const column = document.createElement("div");
            column.className = "col-sm-6 col-lg-4 mb-5 ";
            row.appendChild(column);
            //create a card template to display the news information
            //card element
            let card = document.createElement("div");
            card.className = "card";
            //card image portio
            let img = document.createElement("img");
            img.className = "card-img-top";
            img.src = imageUrl;
            img.alt ="News headlines image"
            card.appendChild(img);
            //card main body
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody);
            //card title
            let cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = headline;
            card.appendChild(cardTitle);
            //card text
            let newsSource = document.createElement("h6")
            newsSource.textContent = shortDescription;
            newsSource.className = "card-text";
            newsSource.textContent = source;
            newsSource.style = "width:70px;display:inline-block"
            card.appendChild(newsSource);
            //date article publlished
            let publishDate = document.createElement("h6")
            publishDate.textContent = articlePublished;
            publishDate.style = "width: 170px";
            //create span to append source and publish date
            let infoSpan = document.createElement("span");
            infoSpan.appendChild(newsSource);
            infoSpan.appendChild(publishDate)
            infoSpan.style = "display:flex;"
            card.appendChild(infoSpan); //append the info span to the card
            //link to full article
            let link = document.createElement("a");
            link.href = article.url;
            link.className = "btn btn-primary";
            link.textContent = "Full News";
            card.appendChild(link);

            column.appendChild(card);
            //append the card to the newsDiv parent    
            newsDiv.appendChild(row);
    
            
        }
}

function refreshContent() {
    
}

 fetchNews()

