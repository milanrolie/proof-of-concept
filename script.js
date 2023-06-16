var cardSection = document.querySelector('.card-section')
var nextBtn = document.querySelector ('.next-btn')
var prevBtn = document.querySelector ('.prev-btn')


nextBtn.onclick = () => {
    cardSection.scrollLeft += 500;
  };
  prevBtn.onclick = () => {
    cardSection.scrollLeft -= 500;
  };

