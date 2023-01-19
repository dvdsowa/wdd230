const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const chapters = getChapterList () || [];
chapters.forEach(chapter => {displayList(chapter);});

button.addEventListener('click', () => {
    
    if (input.value != '') {
    displayList(input.value);
    chapters.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter(item => item !== chapter);
    setChapterList();
}
