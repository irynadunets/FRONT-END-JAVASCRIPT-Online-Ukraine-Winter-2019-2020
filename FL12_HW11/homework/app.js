const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];



function displayIcon(type,color) {
  let icon = document.createElement('i');
  icon.classList.add('material-icons');
  icon.innerText = type;
  icon.setAttribute('style', color);
  return icon;
}

function displayName(name,clName,title) {
  name = document.createElement('li');
  name.innerText = title;
  name.classList.add(clName);
  return name;
}

function buildTree(data,parentElement) {
  for (let el of Object.entries(data)) {
    let ul = document.createElement('ul');
    ul.classList.add('disable');
    parentElement.appendChild(ul);
    if (el[1].folder === true ) {
      if(el[1].children === null || el[1].children === false){
        ul.appendChild(displayIcon('folder','color:yellow'));
        let folderEmpty;
        ul.appendChild(displayName(folderEmpty,'emptyFolder',el[1].title));
        } else {
        ul.appendChild(displayIcon('folder','color:yellow'));
        let folder;
        ul.appendChild(displayName(folder,'folder',el[1].title));
        buildTree(el[1].children,ul);
      }
     } else {
       ul.appendChild(displayIcon('insert_drive_file','color:grey'));
       let file;
       ul.appendChild(displayName(file,'file',el[1].title));
     }
   }
}

function displayInitialTree() {
  let elements = document.getElementsByTagName('UL');
  for(let active of elements){
    if(active.parentElement.id === 'root'){
      active.classList.add('active');
    }
  }
}

function changeIcon(el,status, name) {
  el.classList.toggle(status);
  el.parentElement.removeChild(el.parentElement.getElementsByTagName('i')[0]);
  el.parentElement.prepend(displayIcon(name,'color:yellow'));
}

function openFolder(){
  let toggler = document.getElementsByClassName('folder');
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function() {
      let count = this.parentElement.children;
      for(let el of count){
      if(el.className === 'disable'){
        changeIcon(el,'active', 'folder_open');
      } else if(el.className === 'disable active'){
      changeIcon(el,'active', 'folder');
      }
      }
    });
  }
}

function openEmptyFolder(){
  let empty = document.getElementsByClassName('emptyFolder');
  for (let i = 0; i < empty.length; i++) {
    empty[i].addEventListener('click', function() {
      let count = this.parentElement.children;
      for(let el of count){
        if(el.className === 'emptyFolder'){
          changeIcon(el,'active', 'folder_open');
          let text;
          if(empty[i].childElementCount === 0){
            empty[i].appendChild(displayName(text,'text','Folder is empty'));
          }
        } else if(el.className ==='emptyFolder active'){
           changeIcon(el,'active', 'folder');
           empty[i].removeChild(empty[i].getElementsByTagName('li')[0]);
        }
      }
    });
  }
}

const rootNode = document.getElementById('root');
buildTree(structure,rootNode);
displayInitialTree();
openFolder();
openEmptyFolder();
