// Stock countdown animation
function updateStockCount() {
  const counts = [12, 10, 8, 5, 3, 2, 1]
  let currentIndex = 0

  setInterval(() => {
    const stockElement = document.querySelector(".stock-count")
    if (stockElement) {
      currentIndex = (currentIndex + 1) % counts.length
      stockElement.textContent = counts[currentIndex]
    }
  }, 20000)
}

// Scroll reveal animation with performance optimization
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .showcase-item")

  function checkReveal() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active")
      }
    })
  }

  let ticking = false
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkReveal()
        ticking = false
      })
      ticking = true
    }
  })

  checkReveal() // Check on load
}

// FAQ Accordion with smooth animation
function initFAQ() {
  const faqHeaders = document.querySelectorAll(".faq-header")

  faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const faqItem = header.parentElement
      const content = faqItem.querySelector(".faq-content")
      const isOpen = header.classList.contains("active")

      document.querySelectorAll(".faq-header").forEach((h) => {
        if (h !== header) {
          h.classList.remove("active")
          const otherContent = h.parentElement.querySelector(".faq-content")
          otherContent.classList.remove("open")
        }
      })

      // Toggle current item
      header.classList.toggle("active")
      content.classList.toggle("open")
    })
  })
}

// Smooth scroll for anchor links with polished behavior
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        const target = document.querySelector(href)
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar")
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.15)"
    } else {
      navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.08)"
    }

    lastScroll = currentScroll
  })
}

function initActiveSection() {
  const sections = document.querySelectorAll("section, header")
  const navLinks = document.querySelectorAll('a[href^="#"]')

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  updateStockCount()
  revealOnScroll()
  initFAQ()
  initSmoothScroll()
  initNavbarScroll()
  initActiveSection()

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Page is hidden
    } else {
      // Page is visible - can track as re-engagement
    }
  })
})

window.addEventListener("resize", () => {
  // Recalculate reveal positions on resize
  const reveals = document.querySelectorAll(".reveal, .showcase-item")
  reveals.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active")
    }
  })
  setTimeout(() => {
    revealOnScroll()
  }, 100)
})
