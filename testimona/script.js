function changeTestimonial() {
  document.getElementById("testimonial-text").innerHTML = "We love using SageIt for our Services. It has saved us time and money, and the support team is fantastic!";
  document.getElementById("logo").innerHTML = "<img src='logo2.png' alt='New Logo'>";
  document.getElementById("testimonial-heading").innerHTML = "Wow SageIt";
  document.getElementById("triangle-btn").setAttribute("onclick", "changeBack()");
}

function changeBack() {
  document.getElementById("testimonial-text").innerHTML = "“After months of demos and research of about 20 different event platforms, we found Sage IT to be the product for us. It’s very easy to use and offers the best pricing and customization.”";
  document.getElementById("logo").innerHTML = "<img src='logo.png' alt='Logo'>";
  document.getElementById("testimonial-heading").innerHTML = "Excellent works";
  document.getElementById("triangle-btn").setAttribute("onclick", "changeTestimonial()");
}
