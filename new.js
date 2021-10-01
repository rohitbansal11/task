
var ok = {}
var headrow = '';
var bodyrow = '';
var thead = document.getElementById("thead")
var tbody = document.getElementById("tbody")
var oko = test.map(data => {
    var p = {}
    var filterData = '';
    var dataPouchName = data.pouchName;
    filterData = test.filter(data => data.pouchName == dataPouchName)
    p.l = filterData
    p.h = dataPouchName
    return p
})
oko.filter(data => {
    ok[(data.h)] = data.l
})
for (data in ok) {
    var dataCollection = "";
    headrow += `
    <th >${data}</th>`
    ok[data].map(data => {
        dataCollection += `<td>${data.deliveryType}-${data.isNCR ? "NCR" : ""}-${data.price}<td><br/>`
    })
    bodyrow += `<tr>${(dataCollection)}</tr> `
}
thead.innerHTML = headrow
tbody.innerHTML = bodyrow





