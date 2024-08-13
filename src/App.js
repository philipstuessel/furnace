const Home = {
    view: () => m("main", 
            m("h1", "The Furnace: A Glimpse into"), 
                m("h2", "My First App Development"),
                m("img", {class: "logo", src: "./src/img/kiln.png", alt: "https://www.flaticon.com/free-icons/kiln Kiln icons created by Freepik - Flaticon"})
        )
}

const About = {
    view: () => m("main", m("h1", "About Page"))
};

export { Home, About };