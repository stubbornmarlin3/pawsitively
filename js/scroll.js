const anchorScroll = function(id){

    const navbar = document.querySelector("nav");
    const navbarRect = navbar.getBoundingClientRect();

    const element = document.querySelector(id);
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    window.scrollTo({
        top: viewHeight - navbarRect.height < rect.height ? rect.top + window.pageYOffset - navbarRect.height - 10: rect.top + window.pageYOffset - 20 + rect.height / 2 - viewHeight / 2,
        behavior: "smooth"
    });
}