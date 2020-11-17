(function () {
  const buttonElements = document.querySelectorAll(".filter__button");
  const themes = document.querySelectorAll(".theme");
  const themesWrapper = document.getElementById("themes__wrapper");

  const themesArray = [];

  let category = "all";

  themes.forEach(job => {
    themesArray.push({
      title: job.firstElementChild.nextElementSibling.innerHTML,
      image: job.firstElementChild.src,
      category: job.getAttribute("data-category"),
    });
  });

  console.log(themesArray);

  buttonElements.forEach(button => {
    console.log(button);
    button.addEventListener("click", buttonClick);
  });

  function buttonClick(e) {
    console.log(e.target);

    buttonElements.forEach(newButton => {
      newButton.classList.remove("active");
    });

    e.target.classList.add("active");

    category = e.target.id;

    filterThemes();
  }

  function filterThemes() {
    const themes = document.querySelectorAll(".theme");

    themes.forEach(theme => {
      theme.remove();
    });

    themesArray.forEach(theme => {
      if (category === "all") {
        const themeHTML = `
          <div class="theme col-md-6 col-lg-4">
            <img src="${theme.image}" alt="${theme.title} Twitter theme" />
            <h3>${theme.title}</h3>
            <a href="/">Get It</a>
          </div>
        `;

        themesWrapper.innerHTML = themesWrapper.innerHTML + themeHTML;
      } else if (theme.category.toLowerCase() === category.toLowerCase()) {
        console.log(theme.category, category);
        const themeHTML = `
          <div class="theme col-md-6 col-lg-4">
            <img src="${theme.image}" alt="${theme.title} Twitter theme" />
            <h3>${theme.title}</h3>
            <a className="btn" href="/">Get It</a>
          </div>
        `;

        themesWrapper.innerHTML += themeHTML;
      }
    });

    const newerThemes = document.querySelectorAll(".theme");
    if (newerThemes.length === 0) {
      themesWrapper.innerHTML = `
        <p class="no-results">No results.</p>
      `;
    }
  }
})();
