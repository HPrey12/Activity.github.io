const image = (img) =>{
    let div = document.createElement('div')
    div.innerHTML = `<img src="./assets/${img}">
    `
    return div
}

const image1 = (img1,img2,img3) =>{
    let div = document.createElement('div')
    div.className = "imagess"
    div.innerHTML = `<img src="./assets/${img1}">
    <img src="./assets/${img2}">
    <img src="./assets/${img3}">
    `
    return div
}


export {image, image1}