const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};

function getFormValues (){
    const websiteTypeElement = document.querySelector("#project_type")

    const pmEl = document.querySelector("#project-management")
    const designEl = document.querySelector("#design")
    const developerEl = document.querySelector("#developer")
    const qaEl = document.querySelector("#qa")
    
    return {
        websiteType: websiteTypeElement.value,
        pm: pmEl.checked,
        design: designEl.checked,
        developer: developerEl.checked,
        qa: qaEl.checked,
    }
}

function calculateWork() {    
    const values = getFormValues();

    let totalPrice = 0;

    const workTypes = prices[values.websiteType]

    if (values.pm) {
        totalPrice = workTypes.pm
    }

    if (values.design) {
        totalPrice = totalPrice + workTypes.design
    }

    if (values.developer) {
        totalPrice = totalPrice + workTypes.developer
    }

    if (values.qa) {
        totalPrice = totalPrice + workTypes.qa
    }

    const totalPriceEl = document.querySelector("#total_price")

    totalPriceEl.textContent = totalPrice;

    console. log (totalPrice)

}

const formEl = document.querySelector("#project_form");
const emailModal = document.querySelector("#modal_email");
const successModal = document.querySelector("#modal_success");

formEl.addEventListener("change", calculateWork);

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    emailModal.classList.add("modal_active");    
});

const closebuttons = document.querySelectorAll(".btn_close");

closebuttons.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        emailModal.classList.remove("modal_active");
        successModal.classList.remove("modal_active");
    });
})
const modalEmailContainer = document.querySelector("#modal_email-container");

modalEmailContainer.addEventListener("submit", function (event) {
    event.preventDefault();

    const userEmalInput = document.querySelector("#user_emal")
    
    if (userEmalInput.value) {
        
        emailModal.classList.remove("modal_active"); 
        successModal.classList.add("modal_active");
        

    }

    const inputConainer = document.querySelector("#container_email-input");

    inputConainer.classList.add("container_email-input-error");
    
})