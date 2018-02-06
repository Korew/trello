'use strict';

function dragenter(e) {
  let t = e.target;
  if (!t.classList.contains('trello-cards-item') || t.classList.contains('target')) {return;}
  
  let placeholder = document.createElement('div');
  placeholder.className = 'trello-cards-item-placeholder';
}

function dragleave(e) {
  let t = e.target;
  if (!t.classList.contains('trello-cards-item') || t.classList.contains('target')) {return;}
  console.log('entered', e.target);
}

function dragstart(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  t.classList.add('target');
  // var newEl = event.target.cloneNode(true);

  if (e.target.classList.contains('trello-cards-item')) {
    document.addEventListener('dragenter', dragenter);
    document.addEventListener('dragleave', dragleave);
  }
}

function drag(e) {
  let t = e.target;
}

function dragend(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  t.classList.remove('target');
}

function dragover(e) {
  e.preventDefault();
}

function drop(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  t.classList.remove('target');
}





document.addEventListener('dragstart', dragstart);
document.addEventListener('drag', drag);
document.addEventListener('dragend', dragend);
document.addEventListener('dragover', dragover);
document.addEventListener('drop', drop);