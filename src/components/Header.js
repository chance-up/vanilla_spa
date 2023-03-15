class Header {
    constructor($body){
        this.$body = $body
    }

    createMenuDiv(side,name){
        const div = document.createElement("div")
        div.setAttribute("class",`header header_${side}`)

        const span = document.createElement("span")
        span.setAttribute("class","menu_name")
        span.setAttribute("id",`menu_${name.toLowerCase()}`)
        span.appendChild(document.createTextNode(`${name.toUpperCase()}`))
        div.appendChild(span)

        return div

    }

    render(){
        const header = document.createElement("header")

        const homeDiv = this.createMenuDiv("left","home")
        const signupDiv = this.createMenuDiv("right","signup")

        header.appendChild(homeDiv)
        header.appendChild(signupDiv)

        homeDiv.addEventListener("click",()=>{
            window.history.pushState("", "", "/web/");
            const urlChange = new CustomEvent("urlChange", {
                detail: { href: "/web/" }
            });
            document.dispatchEvent(urlChange);
        })

        signupDiv.addEventListener("click",()=>{
            window.history.pushState("", "", "/web/signup");
            const urlChange = new CustomEvent("urlChange", {
                detail: { href: "/web/signup" }
            });
            document.dispatchEvent(urlChange);
        })



        this.$body.appendChild(header)
    }
}

export default Header