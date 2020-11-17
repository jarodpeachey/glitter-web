(function () {
  const notBuild = typeof window !== "undefined";

  function addScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    console.log("Appended script: ", script);
  }

  addScript("/js/navigation.js");
  addScript("/js/carousel.js");
  addScript("/js/collapse.js");

  if (notBuild && window.location.pathname.includes("themes")) {
    addScript("/js/themes.js");
  }
})();
