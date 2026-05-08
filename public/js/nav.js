window.addEventListener("load", () => {

    const navContainer =
        document.getElementById("nav");

    if(!navContainer) return;

    const isArabic =
        window.location.pathname.startsWith("/ar/");

    const navPath = isArabic
        ? "/ar/components/nav.html"
        : "/components/nav.html";

    fetch(navPath)
        .then(res => res.text())
        .then(data => {

            navContainer.innerHTML = data;

            const langToggle =
                document.getElementById("langToggle");

            if(!langToggle) return;

            const currentPath =
                window.location.pathname;

            // عربي → إنجليزي
            if(isArabic){

                langToggle.href =
                    currentPath.replace(/^\/ar/, "");

            }else{

                // إنجليزي → عربي
                langToggle.href =
                    "/ar" + currentPath;
            }

        });

});