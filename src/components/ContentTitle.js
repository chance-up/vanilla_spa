class ContentTitle{
    constructor($main,$title){
        this.$main = $main
        this.$title = $title
    }

    render(){
        const titleDiv = document.createElement("div")
        titleDiv.setAttribute("class","content_title")
        const h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode(this.$title))

        titleDiv.appendChild(h1)
        this.$main.appendChild(titleDiv)
    }
}

export default ContentTitle