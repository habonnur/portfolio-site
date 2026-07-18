const revealItems = document.querySelectorAll("[data-reveal]")

const revealObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("is-visible")
    }
  },
  { threshold: 0.18 }
)

revealItems.forEach(item => revealObserver.observe(item))

const indexToggle = document.querySelector(".index-toggle")
const siteIndex = document.querySelector(".site-index")

function setIndexOpen(open) {
  siteIndex.classList.toggle("is-open", open)
  indexToggle.setAttribute("aria-expanded", String(open))
  indexToggle.textContent = open ? "INDEX −" : "INDEX +"
}

indexToggle.addEventListener("click", () => {
  setIndexOpen(!siteIndex.classList.contains("is-open"))
})

siteIndex.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setIndexOpen(false))
})

addEventListener("keydown", event => {
  if (event.key === "Escape") setIndexOpen(false)
})

const projectFrames = [...document.querySelectorAll(".project-frame")]
const resumeFrame = document.querySelector(".resume-frame")
const resumeStage = document.querySelector(".resume-stage")
const resumePaper = document.querySelector(".morgan-resume")
let ticking = false

function updateResumeObject() {
  if (!resumeFrame || !resumePaper) return

  const viewport = window.innerHeight
  const rect = resumeFrame.getBoundingClientRect()
  const travel = Math.max(1, rect.height - viewport)
  const progress = Math.min(1, Math.max(0, -rect.top / travel))
  const entry = Math.min(1, progress / .28)
  const entryEase = entry * entry * (3 - 2 * entry)
  const scan = Math.min(1, Math.max(0, (progress - .28) / .58))
  const scanEase = scan * scan * (3 - 2 * scan)
  const scale = .68 + entryEase * .36
  const stageHeight = resumeStage.clientHeight
  const visualHeight = resumePaper.offsetHeight * scale
  const topSafeY = 24 + visualHeight / 2 - stageHeight / 2
  const bottomSafeY = stageHeight / 2 - 24 - visualHeight / 2
  const entryY = topSafeY + 96
  const y = progress < .28
    ? entryY + (topSafeY - entryY) * entryEase
    : topSafeY + (bottomSafeY - topSafeY) * scanEase

  resumePaper.style.setProperty("--resume-scale", scale.toFixed(3))
  resumePaper.style.setProperty("--resume-y", `${y.toFixed(2)}px`)
  resumePaper.style.setProperty("--resume-tilt", `${((1 - entryEase) * 10).toFixed(2)}deg`)
  resumePaper.style.setProperty("--resume-roll", `${((1 - entryEase) * -1.2).toFixed(2)}deg`)
  resumePaper.style.setProperty("--resume-opacity", (.36 + Math.min(1, entryEase * 2.8) * .64).toFixed(3))
  resumePaper.style.boxShadow = `0 ${Math.round(8 + entryEase * 24)}px ${Math.round(14 + entryEase * 66)}px rgb(17 17 15 / ${(.08 + entryEase * .14).toFixed(2)})`
}

function updateProjectStories() {
  const viewport = window.innerHeight

  for (const frame of projectFrames) {
    const panel = frame.querySelector(".project-layout")
    const rect = frame.getBoundingClientRect()
    const travel = Math.max(1, rect.height - viewport)
    const chapterProgress = Math.min(1, Math.max(0, -rect.top / travel))
    const storyProgress = Math.min(1, Math.max(0, (chapterProgress - 0.16) / 0.32))
    panel.style.setProperty("--story-opacity", storyProgress.toFixed(3))
    panel.style.setProperty("--story-shift", `${((1 - storyProgress) * 36).toFixed(2)}px`)
    panel.style.setProperty("--title-shift", `${(-storyProgress * 5).toFixed(2)}vh`)
    panel.style.setProperty("--title-scale", (1 - storyProgress * 0.08).toFixed(3))
  }

  updateResumeObject()

  ticking = false
}

function requestStoryUpdate() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateProjectStories)
}

addEventListener("scroll", requestStoryUpdate, { passive: true })
addEventListener("resize", requestStoryUpdate)
updateProjectStories()

const caseRail = document.querySelector(".case-card-rail")
const caseCards = [...document.querySelectorAll(".archive-card")]
const caseCurrent = document.querySelector(".archive-current")
const casePrevious = document.querySelector(".archive-prev")
const caseNext = document.querySelector(".archive-next")
let activeCaseIndex = 0
let caseScrollTicking = false

function setActiveCase(index) {
  if (!caseCards.length) return
  activeCaseIndex = Math.min(caseCards.length - 1, Math.max(0, index))
  if (caseCurrent) caseCurrent.textContent = caseCards[activeCaseIndex].dataset.case
}

function nearestCaseIndex() {
  if (!caseRail || !caseCards.length) return 0
  const railLeft = caseRail.getBoundingClientRect().left
  let nearest = 0
  let nearestDistance = Infinity

  caseCards.forEach((card, index) => {
    const distance = Math.abs(card.getBoundingClientRect().left - railLeft)
    if (distance < nearestDistance) {
      nearest = index
      nearestDistance = distance
    }
  })

  return nearest
}

function updateCaseCounter() {
  setActiveCase(nearestCaseIndex())
  caseScrollTicking = false
}

caseRail?.addEventListener("scroll", () => {
  if (caseScrollTicking) return
  caseScrollTicking = true
  requestAnimationFrame(updateCaseCounter)
}, { passive: true })

function goToCase(index, includeVertical = false) {
  const card = caseCards[Math.min(caseCards.length - 1, Math.max(0, index))]
  if (!card) return
  card.scrollIntoView({ behavior: "smooth", block: includeVertical ? "center" : "nearest", inline: "start" })
  setActiveCase(index)
}

casePrevious?.addEventListener("click", () => goToCase(activeCaseIndex - 1))
caseNext?.addEventListener("click", () => goToCase(activeCaseIndex + 1))

document.querySelectorAll(".cover-directory a").forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"))
    const index = caseCards.indexOf(target)
    if (index < 0) return
    event.preventDefault()
    goToCase(index, true)
  })
})
