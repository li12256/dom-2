const testDiv = dom.find('#test')[0]
console.log(testDiv)
console.log(dom.find('.red',test))
dom.style(test,{'color':'red',testDiv})
const divList = dom.find('#divList')
dom.each(divList, (n)=>console.log(n, 'color', 'red'))


