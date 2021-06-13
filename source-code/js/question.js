
const card = [

       {
          card_title:'Group-1',
          btn_text:'View',
          src:'https://cdn.pixabay.com/photo/2014/09/27/13/46/question-mark-463497__340.jpg',
          href:'../dynamic-cards/cards.html'
       },

       {
        card_title:'Group-2',
        btn_text:'View',
        src:'https://cdn.pixabay.com/photo/2014/09/27/13/46/question-mark-463497__340.jpg',
        href:'../dynamic-cards/cards.html'
       },

       {
        card_title:'Group-2A',
        btn_text:'View',
        src:'https://cdn.pixabay.com/photo/2014/09/27/13/46/question-mark-463497__340.jpg',
        href:'../dynamic-cards/cards.html'
       },

       {
        card_title:'Group-4',
        btn_text:'View',
        src:'https://cdn.pixabay.com/photo/2014/09/27/13/46/question-mark-463497__340.jpg',
        href:'../dynamic-cards/cards.html'
       },

];

  const questionContainer = document.querySelector('.card-row');

  card.forEach( (result,idx) => {
         const content = `
              <div class="col-md-4 col-sm-3 p-4">
                    <div class="card" style="max-width: 18rem;">
                            <img src='${result.src}' alt="">
                            <div class="card-body">
                                <h4 class="card-title text-center">${result.card_title}</h4>
                                <a href='../dynamic-cards/cards.html' class="mt-3 btn btn-primary btn-view">${result.btn_text}</a>
                            </div>
                    </div>
              </div>                
         `;

         questionContainer.innerHTML += content;
      });











  $('.responsive').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots:true,
    centerPadding: '100px',
    centerMode: true,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerPadding: '20px',
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  