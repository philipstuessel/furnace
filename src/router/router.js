export function router(rootElement, initialPath, routeMap) {
    const routes = { ...routeMap };
    const notFoundPath = "/404"; 
    const notFoundHandler = () => m("h1", "404 Page Not Found");
    function render() {
        const path = window.location.pathname || initialPath;

        if (path in routes) {
            m.render(rootElement, routes[path].view());
        } else if (routes[notFoundPath]) {
            m.render(rootElement, routes[notFoundPath].view());
        } else {
            m.render(rootElement, notFoundHandler());
        }
    }

    function navigateTo(path) {
        window.history.pushState({}, "", path);
        render();
    }

    window.addEventListener("popstate", render);

    document.addEventListener("click", (event) => {
        if (event.target.tagName === "A" && event.target.href) {
            event.preventDefault();
            const path = new URL(event.target.href).pathname;
            navigateTo(path);
        }
    });

    render();
    
    return {
        navigateTo,
        addRoute: (path, handler) => {
            routes[path] = handler;
        },
    };
}
