

'use strict';

function dragstart(event) {
    var element = event.target;
    if (element.draggable != true) {return;}
    
    element.classList.add('target');
    event.dataTransfer.setData('text/plain', element.id);

    if (element.classList.contains('trello-cards-item')) {
        document.addEventListener('dragenter', dragenter);
        document.addEventListener('dragleave', dragleave);
    }
}

function dragenter(event) {
    var element = event.target;
    if (!element.classList.contains('trello-cards-item') || element.classList.contains('target')) {
        return;
    }

    element.classList.add('over');
}

function dragleave(event) {
    var element = event.target;
    if (!element.classList.contains('trello-cards-item') || element.classList.contains('target')) {
        return;
    }

    element.classList.remove('over');
}

function dragend(event) {
    var element = event.target;
    if (element.draggable != true) {
        return;
    }

    element.classList.remove('target');

    if (element.classList.contains('trello-cards-item')) {
        document.removeEventListener('dragenter', dragenter);
        document.removeEventListener('dragleave', dragleave);
    }
}

function dragover(event) {
    event.preventDefault();
}

function drop(event) {
    var element = event.target;
    if (!element.classList.contains('trello-cards-item')) {
        return;
    }

    element.classList.remove('over');
    var item = document.getElementById(event.dataTransfer.getData('text'));
    element.parentNode.insertBefore(item, element);
}

document.addEventListener('dragstart', dragstart);
document.addEventListener('dragend', dragend);
document.addEventListener('dragover', dragover);
document.addEventListener('drop', drop);
