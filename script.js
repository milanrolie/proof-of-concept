//importeer de prismic hulp package om data te kunnen fetchen via prismic
import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';
//opgeslagen elementen voor next/previous buttons
var cardSection = document.querySelector('.card-section')
var newsCardSection = document.querySelector('.news-card-section')
var nextBtn = document.querySelector ('.next-btn')
var prevBtn = document.querySelector ('.prev-btn')
var newsNextBtn = document.querySelector ('.news-next-btn')
var newsPrevBtn = document.querySelector ('.news-prev-btn')

// sla alle belangrijke data voor de connectie op in een constante
const repositoryName = 'projectink'
const accessToken = 'MC5aSTNldEJVQUFDb0FCNFFt.dSHvv71CND8t77-977-977-9Mzp377-9fjTvv73vv73vv73vv73vv73vv73vv71G77-977-9GO-_ve-_vWrvv718' 
//roep de client(tussenlaag) aan en geef de repo naam en accestoken mee om in de api te kunnen werken
const client = prismic.createClient(repositoryName, { accessToken })
//als de connectie gemaakt kan worden haal dan alle data die als type speler heeft op
// voor elk databundel render het in de html als een speler card
const init = async () => {
  const players = await client.getAllByType('spelers')

  players.forEach(player => {
    
    cardSection.innerHTML +=
    `<article class="card"> 
    <div class="card-header">
        <img class="card-profile" src="`+ player.data.afbeelding.url +`" alt="">
        <span class="card-number">` + player.data.nummer + `</span>
        <span class="card-nm">RB</span>
        <img class="card-flag" src="./assets/card/flag.png" alt="">
        <img class="card-logo" src="./assets/card/smallInkLogo.svg" alt="">
    </div>  
    <div class="card-text">

        <h3>` + player.data.naam[0].text + ` </h3>
    <table>
        <tr>
          <td class="number">` + player.data.eng + `</td>
          <td>ENG</td>
          <td class="number">` + player.data.por + `</td>
          <td>POR</td>
        </tr>
        <tr>
          <td class="number">` + player.data.mat + `</td>
          <td>MAT </td>
          <td class="number">` + player.data.phy + `</td>
          <td>PHY</td>
        </tr>
        <tr>
          <td class="number">` + player.data.bio + `</td>
          <td>BIO </td>
          <td class="number">` + player.data.foo+`</td>
          <td>FOO</td>
        </tr>
      </table>
    </div>
</article>`
                    
  });
}

init()
//card carousel buttons functionality. als er op de knop geklikt wordt schuift de scrollbar met 500 pixels
nextBtn.onclick = () => {
    cardSection.scrollLeft += 500;
  };
  prevBtn.onclick = () => {
    cardSection.scrollLeft -= 500;
  };
//news carousel
  newsNextBtn.onclick = () => {
    newsCardSection.scrollLeft += 500;
  };
  newsPrevBtn.onclick = () => {
    newsCardSection.scrollLeft -= 500;
  };
