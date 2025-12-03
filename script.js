// Stock counter animation
function updateStockCount() {
  const counts = [16, 14, 12, 10, 8, 6, 4, 2]
  let index = 0

  setInterval(() => {
    const stockElement = document.getElementById("stock-count")
    if (stockElement) {
      index = (index + 1) % counts.length
      stockElement.textContent = counts[index]
    }
  }, 30000)
}

// Scroll reveal animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active")
    }
  })
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

      // Close all other items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== currentItem) {
          item.querySelector(".accordion-header").classList.remove("active")
          item.querySelector(".accordion-content").classList.remove("open")
        }
      })

      // Toggle current item
      this.classList.toggle("active")
      content.classList.toggle("open")
    })
  })
})

// Initialize on load
window.addEventListener("load", () => {
  updateStockCount()
})
