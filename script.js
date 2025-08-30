document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const mobile = form.mobile.value;
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const mobile = form.mobile.value;

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.(eg:example@gmail.com)");
    return;
  }

  alert("Form submitted successfully!");
});

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});
