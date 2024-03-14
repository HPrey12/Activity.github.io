const cardsecOne = (a, b, c) => {
    let div = document.createElement('div')
    div.className = "bruce0"
    div.innerHTML = `<p>${a}</p>
    <p>${b}</p>
    <p>${c}</p>
    `
    return div
}
const cardsecOnebtn = (d, e, f) => {
    let div = document.createElement('div')
    div.className = "bruce2"
    div.innerHTML = ` <button>${d}</button>
    <button>${e}</button>
    <button>${f}</button>
    `
    return div
}
const card = (title0) => {
    let div = document.createElement('div')
    div.className = "bruce3"
    div.innerHTML = ` <h1>${title0}</h1>
    `
    return div
}
export{ cardsecOne, cardsecOnebtn, card }

