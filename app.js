import { secOne } from "./info.js"
import { image, image1 } from "./img.js"
import { cardsecOne, cardsecOnebtn,card} from "./card.js"

const data = {
     
       title: "Hope of Man Kind",
       para : "This man is the hope for humans he always find a way to become successful in life. He always find works like Doctor, Construction, and even became a Teacher.",
       LearnBtn : "Contact me",
       myImage :  "images.jpg"


}

 const data2 = {
    title0: "Project title",
    myImage0 :  "gg.jpg",
    myImage1 :  "smile.jpg",
    myImage2 :  "opaw.jpg",
    para0 : "This man is the hope for humans he always find a way to become successful in life. He always find works like Doctor, Construction, and even became a Teacher.",
    para1 : "This man is the hope for humans he always find a way to become successful in life. He always find works like Doctor, Construction, and even became a Teacher.",
    para2 : "This man is the hope for humans he always find a way to become successful in life. He always find works like Doctor, Construction, and even became a Teacher.",
    LearnBtn0 : "Learn More",
    LearnBtn1 : "Learn More",
    LearnBtn2 : "Learn More"
    

 }

const {title, para, LearnBtn, myImage } = data
let sectionOne = document.getElementById ("sectionOne")

const {title0, para0, para1, para2, LearnBtn0, LearnBtn1, LearnBtn2, myImage0, myImage1, myImage2 } = data2
let sectioTwo = document.getElementById ("sectionTwo")


sectionOne.append(secOne(title, para, LearnBtn))
sectionOne.append(image(myImage))
sectioTwo.append(card(title0))
sectioTwo.append(image1(myImage0, myImage1, myImage2))
sectioTwo.append(cardsecOne(para0, para1,para2))
sectioTwo.append(cardsecOnebtn(LearnBtn0, LearnBtn1, LearnBtn2))


