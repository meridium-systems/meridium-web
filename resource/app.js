
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.querySelector("#formStatus");
      if (status) {
        status.textContent = "Thanks — your message has been captured in this demo contact form.";
      }
      form.reset();
    });
  }
});
