const syllabusCard = [
  {
    card_title: 'Group-1',
    btn_text: 'View',
    src: 'https://image.flaticon.com/icons/png/128/138/138849.png',
    href:'../syllabus/Group_I.pdf'
  },
  {
    card_title: 'Group-2',
    btn_text: 'View',
    src: 'https://image.flaticon.com/icons/png/128/138/138849.png',
    href:'../syllabus/Group_II.pdf'
  },
  {
    card_title: 'Group-2A',
    btn_text: 'View',
    src: 'https://image.flaticon.com/icons/png/128/138/138849.png',
    href:'../syllabus/G-2a.pdf'
  },
  {
    card_title: 'Group-4',
    btn_text: 'View',
    src: 'https://image.flaticon.com/icons/png/128/138/138849.png',
    href:'../syllabus/Group_IV.pdf'
  },
];

    //container
    const syllabusContainer = document.querySelector('.syllabus-card');

    syllabusCard.forEach( (result) => {

         const content = `
                    <div class="col">
                            <div class="card">
                                <div class="img-area">
                                    <img src=${result.src} alt="">
                                </div>

                                <div class="card-body">
                                    <h3 class="card-title">${result.card_title}</h3>
                                    <a href="${result.href}" class="btn btn-primary">${result.btn_text}</a>
                                </div>
                            </div>
                    </div>`;

        syllabusContainer.innerHTML += content;
    });


