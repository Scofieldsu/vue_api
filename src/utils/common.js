// 公共方法
// to-do: list类型根据','来split不合理，因为list中的元素可能为包含',' 的list或者dict
function transStrToList (newvalue) {
  let tempvalue = ''
  if (newvalue.startsWith('[') && newvalue.endsWith(']')) {
    tempvalue = newvalue.substr(1, newvalue.length - 2).split(',')
  } else {
    tempvalue = newvalue.split(',')
  }
  newvalue = []
  for (let x in tempvalue) {
    if (tempvalue[x].startsWith('[') && tempvalue[x].endsWith(']')) {
      tempvalue[x] = transStrToList(tempvalue[x])
      newvalue.push(tempvalue[x])
    } else if (tempvalue[x].startsWith('{') && tempvalue[x].endsWith('}')) {
      tempvalue[x] = transStrToDict(tempvalue[x])
      newvalue.push(tempvalue[x])
    } else if (isNaN(Number(tempvalue[x]))) {
      newvalue.push(tempvalue[x].replace(/'/g, '').replace(/"/g, ''))
    } else {
      newvalue.push(Number(tempvalue[x]))
    }
  }
  return newvalue
}

function transStrToDict (dictStr) {
  let resDict = {}
  let tempList = dictStr.substr(1, dictStr.length - 2).split(',')
  if (tempList) {
    for (let x in tempList) {
      if (tempList[x]) {
        let itemlist = tempList[x].split(':')
        resDict[itemlist[0].replace(/"/g, '').trim()] = itemlist[1].replace(/"/g, '').trim()
      }
    }
  }
  return resDict
}

export default {
  transStr: {
    toList: transStrToList
  }
}
