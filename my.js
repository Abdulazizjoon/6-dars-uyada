let form=document.getElementById("form")
document.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(event.target);
        var name = formData.get("name");
        var fam= formData.get("fam")
        var email = formData.get("email");

        console.log("Ism:", name);
        console.log('Fam:',fam);
        console.log("Email:", email);

        var div = document.createElement("div");
        div.textContent = "Ism:       " + name +",      Fam:   "+fam+ ",    Email: " + email;
        document.body.appendChild(div);
    });

