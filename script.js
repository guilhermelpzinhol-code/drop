// Stock countdown animation
function updateStockCount(count) {
  const stockCountElement = document.getElementById("stock-count")
  if (stockCountElement) {
    stockCountElement.textContent = count
  }
}

// Inicia o contador em 16
window.addEventListener("load", () => {
  setTimeout(() => updateStockCount(14), 15000)
  setTimeout(() => updateStockCount(13), 25000)
  setTimeout(() => updateStockCount(7), 60000)
})

// Scroll-Reveal effect
function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

window.addEventListener("scroll", reveal)
reveal()

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header")

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const currentItem = this.parentElement
      const content = currentItem.querySelector(".accordion-content")
      const isActive = currentItem.classList.contains("active")

      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active")
        item.querySelector(".accordion-content").style.maxHeight = null
        item.querySelector(".accordion-header").classList.remove("active")
      })

      if (!isActive) {
        currentItem.classList.add("active")
        content.style.maxHeight = content.scrollHeight + "px"
        this.classList.add("active")
      }
    })
  })
})
