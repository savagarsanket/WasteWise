
const form = document.getElementById("wasteForm");
const result = document.getElementById("result");
const submitButton = document.getElementById("submitButton");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

const API_URL = "https://wastewise-naoa.onrender.com/api/waste";

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation
if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Display messages safely
function showResult(title, message, isError = false) {
    if (!result) return;

    result.replaceChildren();

    const heading = document.createElement("h4");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    result.append(heading, paragraph);
    result.classList.toggle("error", isError);
    result.hidden = false;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// Connect the waste form to the live backend
if (form) {
    form.addEventListener("submit", async (event) => {
        // Prevent the browser from refreshing the page
        event.preventDefault();

        const wasteTypeElement = document.getElementById("wasteType");
        const descriptionElement = document.getElementById("description");

        const wasteType = wasteTypeElement
            ? wasteTypeElement.value
            : "";

        const description = descriptionElement
            ? descriptionElement.value.trim()
            : "";

        if (!wasteType) {
            showResult(
                "Select a category",
                "Please select a waste category before continuing.",
                true
            );
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Getting recommendation...";
        }

        if (result) {
            result.hidden = true;
        }

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    wasteType,
                    description
                })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Unable to analyze this waste type."
                );
            }

            showResult(
                "🌿 Your WasteWise Recommendation",
                data.suggestion || "No recommendation was returned."
            );

            // Show additional guidance if the backend provides it
            if (data.reuseTip || data.caution) {
                const details = document.createElement("div");

                if (data.reuseTip) {
                    const reuse = document.createElement("p");
                    reuse.textContent = `♻️ Reuse tip: ${data.reuseTip}`;
                    details.appendChild(reuse);
                }

                if (data.caution) {
                    const caution = document.createElement("p");
                    caution.textContent = `⚠️ Safety: ${data.caution}`;
                    details.appendChild(caution);
                }

                if (result) {
                    result.appendChild(details);
                }
            }
        } catch (error) {
            console.error("WasteWise API error:", error);

            showResult(
                "Unable to get a recommendation",
                "The request failed. Please try again in a moment. If the problem continues, the backend connection or CORS settings may need attention.",
                true
            );
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML =
                    'Get Recommendation <span>→</span>';
            }
        }
    });
} else {
    console.error(
        'WasteWise: Could not find the form with id="wasteForm".'
    );
}
