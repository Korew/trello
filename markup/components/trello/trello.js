'use strict';

function dragstart(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  t.classList.add('target');
  // var newEl = event.target.cloneNode(true);

  e.dataTransfer.setData('text/plain', t.id)

  if (t.classList.contains('trello-cards-item-holder')) {
    document.addEventListener('dragenter', dragenter);
    document.addEventListener('dragleave', dragleave);
  }
}

function dragenter(e) {
  let t = e.target;
  if (!t.classList.contains('trello-cards-item')) {return;}
}

function dragleave(e) {
  let t = e.target;
  if (!t.classList.contains('trello-cards-item') || t.classList.contains('target')) {return;}
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
  if (!t.classList.contains('trello-cards-item')) {return;}
  t.classList.remove('target');

  let item = document.getElementById(e.dataTransfer.getData('text'));
  t.parentNode.insertBefore(item, t);
}





document.addEventListener('dragstart', dragstart);
// document.addEventListener('drag', drag);
document.addEventListener('dragend', dragend);
document.addEventListener('dragover', dragover);
document.addEventListener('drop', drop);