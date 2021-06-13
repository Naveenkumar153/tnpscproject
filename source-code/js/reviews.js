
const cardReview = [
  {
    student_name: 'Rose',
    student_info: 'Student',
    src:'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560917__340.jpg',
    student_review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda dolores, voluptates laboriosam quisquam iste asperiores facilis veniam, reiciendis velit, sed mollitia cum? Illo dolorum impedit odio aliquid eligendi quas?',
  },
  {
    student_name: 'Naveen',
    student_info: 'Student',
    src:'https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330__340.jpg',
    student_review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda dolores, voluptates laboriosam quisquam iste asperiores facilis veniam, reiciendis velit, sed mollitia cum? Illo dolorum impedit odio aliquid eligendi quas?',
  },
  {
    student_name: 'Henna',
    student_info: 'Student',
    src:'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560917__340.jpg',
    student_review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda dolores, voluptates laboriosam quisquam iste asperiores facilis veniam, reiciendis velit, sed mollitia cum? Illo dolorum impedit odio aliquid eligendi quas?',
    },
    {
    student_name: 'Peter',
    student_info: 'Student',
    src:'https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg',
    student_review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda dolores, voluptates laboriosam quisquam iste asperiores facilis veniam, reiciendis velit, sed mollitia cum? Illo dolorum impedit odio aliquid eligendi quas?',
  },
];


  //  create container 
   const reviewContainer = document.querySelector('.review-slider');

  //  forEach

  cardReview.forEach( (result,idx) => {
       

        // content
        const content = `
              <div class="col-md-4">
                  <div class="card">
                          <div class="img-area">
                              <img src="${result.src}" alt="">
                          </div>
                          <div class="card-body">
                              <h5 class='card-title'>${result.student_name}</h5>
                              <h6 class='card-title'>${result.student_info}</h6>
                              <p class="card-text">${result.student_review}</p>
                          </div>
                  </div>
              </div>
        `;

        // append element
        reviewContainer.innerHTML += content;
  });




  $('.review-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow:'<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    centerMode: true,
    draggable:true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false
          }
        }
      ]
    });
  