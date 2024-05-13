function customRender(newElement,root){
    const newTag=document.createElement(newElement.type);
    newTag.innerHTML=newElement.children;
    newTag.setAttribute("href",newElement.props.href);
    newTag.setAttribute("target",newElement.props.target);
    root.appendChild(newTag);

}

function betterRender(Element, root){
    const newDOM=document.createElement(Element.type);
    newDOM.innerHTML=Element.children;
    for(let prop in Element.props){
        newDOM.setAttribute(prop,Element.props[prop]);
    }
    root.appendChild(newDOM);
}

const root=document.querySelector('#root');

const newElement={
    type:'a',
    props:{
        href:"https://www.google.com/",
        target:'_blank'
    },
    children:"Creating custom react elements, better"
    
}

betterRender(newElement,root);