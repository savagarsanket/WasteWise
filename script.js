
const form = document.getElementById("wasteForm");
const result = document.getElementById("result");
const submitButton = document.getElementById("submitButton");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile navigation after selecting a section
navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Display messages safely
function showResult(title, message, isError = false) {
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

// Connect the waste form to the Node.js backend
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const wasteType = document.getElementById("wasteType").value;
    const description =
        document.getElementById("description").value.trim();

    if (!wasteType) {
        showResult(
            "Select a category",
            "Please select a waste category before continuing.",
            true
        );
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Getting recommendation...";
    result.hidden = true;


try {
    const response = await fetch(
        "https://wastewise-naoa.onrender.com/api/waste",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                wasteType,
                description
            })
        }
    );


        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "The request could not be completed."
            );
        }

        showResult(
            "🌿 Your WasteWise Recommendation",
            data.suggestion
        );

    } catch (error) {
        console.error("WasteWise API error:", error);

        showResult(
            "Unable to get a recommendation",
            "Please check that your backend is running at localhost:5000 and that the /api/waste endpoint is available. Then try again.",
            true
        );
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML =
            'Get Recommendation <span>→</span>';
    }
});
