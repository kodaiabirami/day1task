function register() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let age = document.getElementById("age").value;
            let address = document.getElementById("address").value;
            let output = document.getElementById("output");
            if (name == "" || email == "" || age == "" || address == "") {
                output.style.display = "block";
                output.className = "alert alert-danger mt-4";
                output.innerHTML = "please fill all fields";
            }
            else {
                output.style.display = "block";
                output.className = "alert alert-success mt-4";
                output.innerHTML = "Registration Successful!<br>" + "Name:" + name + "<br>" + "Email:" + email + "<br>" + "Age:" + age + "<br>" + "Address:" + address;
            }
        }