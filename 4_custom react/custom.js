root=document.querySelector(".root")
// console.log("helo")

const reactElement={
    tagName:"a",
    attributes:{
        href: "https://google.com",
        target:"_blank"

    },
    content: "click me to visit google"
}


function customRender(reactElement,root){
    const ele= document.createElement(reactElement.tagName)
    ele.innerHTML=reactElement.content
    ele.setAttribute("href",reactElement.attributes.href)
    ele.setAttribute("target",reactElement.attributes.target)

    root.appendChild(ele)

}

customRender(reactElement,root)