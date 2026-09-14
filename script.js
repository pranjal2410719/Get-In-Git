      (function () {
        "use strict";

        function init() {
          // Elements
          var waitlistForm = document.getElementById("waitlist-form");
          var emailInput = document.getElementById("email-input");
          var emailError = document.getElementById("email-error");
          var waitlistSuccess = document.getElementById("waitlist-success");
          var confirmedEmail = document.getElementById("confirmed-email");
          var confirmedRole = document.getElementById("confirmed-role");
          var resetWaitlistBtn = document.getElementById("reset-waitlist-btn");
          var rolePills = document.querySelectorAll(".role-pill");
          var mobileMenuToggle = document.getElementById("mobile-menu-toggle");
          var mobileNavDrawer = document.getElementById("mobile-nav-drawer");
          var mobileLinks = document.querySelectorAll(".mobile-link");

          var selectedRole = "Developer";
          var STORAGE_KEY = "gig_waitlist_registrations";

          // 1. Role Selection Pills
          rolePills.forEach(function (pill) {
            pill.addEventListener("click", function () {
              rolePills.forEach(function (p) {
                p.classList.remove("active");
                p.setAttribute("aria-checked", "false");
              });
              pill.classList.add("active");
              pill.setAttribute("aria-checked", "true");
              selectedRole = pill.getAttribute("data-role") || "Developer";
            });
          });

          // 2. Email Validation Function
          function validateEmail(email) {
            var trimmed = (email || "").trim();
            if (!trimmed) {
              return {
                valid: false,
                message:
                  "Please enter your email address to join the waitlist.",
              };
            }
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailRegex.test(trimmed)) {
              return {
                valid: false,
                message:
                  "Please enter a valid email address (e.g. name@domain.com).",
              };
            }
            return { valid: true, email: trimmed };
          }

          function showError(message) {
            if (!emailError) return;
            emailError.textContent = message;
            emailError.classList.add("visible");
            if (emailInput) {
              emailInput.classList.add("has-error");
              emailInput.setAttribute("aria-invalid", "true");
            }
          }

          function clearError() {
            if (!emailError) return;
            emailError.textContent = "";
            emailError.classList.remove("visible");
            if (emailInput) {
              emailInput.classList.remove("has-error");
              emailInput.removeAttribute("aria-invalid");
            }
          }

          // Real-time validation on input
          if (emailInput) {
            emailInput.addEventListener("input", function () {
              if (emailError && emailError.classList.contains("visible")) {
                var validation = validateEmail(emailInput.value);
                if (validation.valid) {
                  clearError();
                }
              }
            });
          }

          // 3. Form Submission Handling
          if (waitlistForm) {
            waitlistForm.addEventListener("submit", function (event) {
              event.preventDefault();
              var rawEmail = emailInput ? emailInput.value : "";
              var validation = validateEmail(rawEmail);

              if (!validation.valid) {
                showError(validation.message);
                if (emailInput) emailInput.focus();
                return;
              }

              clearError();
              var finalEmail = validation.email;

              // LocalStorage persistence
              try {
                var existing = [];
                var raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                  existing = JSON.parse(raw);
                  if (!Array.isArray(existing)) existing = [];
                }

                var alreadyRegistered = existing.some(function (entry) {
                  return (
                    (entry.email || "").toLowerCase() ===
                    finalEmail.toLowerCase()
                  );
                });

                if (!alreadyRegistered) {
                  existing.push({
                    email: finalEmail,
                    role: selectedRole,
                    timestamp: new Date().toISOString(),
                  });
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
                }
              } catch (err) {
                // LocalStorage errors handled gracefully
              }

              // Transition to Success Confirmation
              if (confirmedEmail) confirmedEmail.textContent = finalEmail;
              if (confirmedRole) confirmedRole.textContent = selectedRole;

              waitlistForm.style.display = "none";
              if (waitlistSuccess) {
                waitlistSuccess.style.display = "block";
              }
            });
          }

          // Reset / Register Another Email
          if (resetWaitlistBtn) {
            resetWaitlistBtn.addEventListener("click", function () {
              if (emailInput) emailInput.value = "";
              clearError();
              if (waitlistSuccess) waitlistSuccess.style.display = "none";
              if (waitlistForm) waitlistForm.style.display = "block";
              if (emailInput) emailInput.focus();
            });
          }

          // 4. Mobile Menu Drawer Toggle
          if (mobileMenuToggle && mobileNavDrawer) {
            mobileMenuToggle.addEventListener("click", function () {
              var isOpen = mobileNavDrawer.classList.contains("open");
              if (isOpen) {
                mobileNavDrawer.classList.remove("open");
                mobileMenuToggle.setAttribute("aria-expanded", "false");
              } else {
                mobileNavDrawer.classList.add("open");
                mobileMenuToggle.setAttribute("aria-expanded", "true");
              }
            });

            mobileLinks.forEach(function (link) {
              link.addEventListener("click", function () {
                mobileNavDrawer.classList.remove("open");
                mobileMenuToggle.setAttribute("aria-expanded", "false");
              });
            });
          }
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      })();
