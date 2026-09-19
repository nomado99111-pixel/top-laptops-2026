const buttons=[...document.querySelectorAll('.chips button')];
const cards=[...document.querySelectorAll('.card')];
const search=document.querySelector('#search');
const empty=document.querySelector('#empty');

function filterCards(){
  const filter=document.querySelector('.chips button.active')?.dataset.filter || 'all';
  const q=search.value.toLowerCase().trim();
  let shown=0;
  cards.forEach(card=>{
    const matchesFilter=filter==='all'||card.dataset.category.split(' ').includes(filter);
    const matchesSearch=card.innerText.toLowerCase().includes(q);
    const show=matchesFilter&&matchesSearch;
    card.style.display=show?'block':'none';
    if(show) shown++;
  });
  empty.style.display=shown?'none':'block';
}
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filterCards();
}));
buttons[0].classList.add('active');
search.addEventListener('input',filterCards);
