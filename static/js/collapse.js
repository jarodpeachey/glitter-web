;(function () {
  const collapseElements = document.querySelectorAll(".collapse")

  collapseElements.forEach(collapse => {
    // GET ELEMENTS
    const collapseTitle = document.querySelector(`.${collapse.id}--title`)
    const collapseContent = document.querySelector(`.${collapse.id}--content`)

    // ADD EVENT LISTENER
    collapseTitle.addEventListener("click", toggleCollapse)

    // IMPORTANT VARIABLES
    let open = false
    const childrenHeight = collapseContent.children[0].clientHeight + 16

    function toggleCollapse() {
      if (open) {
        collapse.classList.remove("open")
        collapseContent.style.maxHeight = "0px"

        open = false
      } else {
        collapse.classList.add("open")
        collapseContent.style.maxHeight = `${childrenHeight}px`

        open = true
      }
    }
  })
})()
