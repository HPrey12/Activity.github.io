const secOne = (title, para, ContactBtn) => {
    let div = document.createElement('div')
    div.className = "bruce"
    div.innerHTML = `<h1>${title}</h1>
    <p>${para}</p>
    <button>${ContactBtn}</button>
    `
    return div
}
export{ secOne }