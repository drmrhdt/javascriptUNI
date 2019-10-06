const rawData = [
  {id: 2, name: "Организация", parent_id: null},
  {id: 3, name: "Бухгалтерия", parent_id: 2},
  {id: 6, name: " Отдел охраны", parent_id: 2},
  {id: 7, name: "Караульная служба", parent_id: 6},
  {id: 8, name: "Бюро пропусков", parent_id: 6},
  {id: 12, name: "Патентный отдел", parent_id: 2},
  {id: 13, name: "Лётная служба", parent_id: 2},
  {id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
  {id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
  {id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
  {id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
  {id: 21, name: "Лётно-методический отдел", parent_id: 13}
  ];

const dictData = rawData.reduce((prev, cur) => {
  prev[cur.id] = cur;
  cur.children = [];
  return prev;
}, {});

// console.log(dictData);

const treeData = rawData.reduce((prev, cur) => {
  if (!cur.parent_id) {
    prev = cur;
  } else {
    dictData[cur.parent_id].children.push(cur);
  }
  return prev;
}, {});

// console.log(treeData);

displayTreeData(treeData, document.getElementById("list"));

function displayTreeData(node, element) {
  let li = document.createElement('li');
  li.innerText = node.name;
  element.appendChild(li);
  if (node.children.length) {
    let ul = document.createElement('ul');
    li.appendChild(ul);
    for (let i = 0; i < node.children.length; i++) {
      displayTreeData(node.children[i], ul);
    }
  }
}