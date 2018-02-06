'use strict';

function dragstart(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  t.classList.add('target');
  // var newEl = event.target.cloneNode(true);

  // document.addEventListener('dragenter', dragenter);
}

function drag(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  console.log('moving');
}

function dragend(e) {
  let t = e.target;
  if (t.draggable != true) {return;}
  console.log('bye');
  t.classList.remove('target');
}

// function dragenter(e) {
//   console.log('entered ' t);
// }



document.addEventListener('dragstart', dragstart);
document.addEventListener('drag', drag);
document.addEventListener('dragend', dragend);