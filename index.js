function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
   lis[i].innerHTML =  parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  const nodeList = document.querySelector('#grand-node').querySelectorAll('div')
  var deepestChildNode = []
  var nodeLength = nodeList.length
  
  deepestChildNode = nodeList[nodeLength-1]
  return deepestChildNode
}



