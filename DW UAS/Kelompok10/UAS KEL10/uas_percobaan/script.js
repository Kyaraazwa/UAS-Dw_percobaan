
// Bagian Product Js dari index.html

    // Get the product grid and buttons
    const productGrid = document.getElementById('productGrid');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');
    
    // Scroll by a set amount (you can adjust this value)
    const scrollAmount = 300;
    
    // Function to scroll left
    scrollLeftButton.addEventListener('click', () => {
      productGrid.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
    });
    
    // Function to scroll right
    scrollRightButton.addEventListener('click', () => {
      productGrid.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
    });
    
    
    
    // Function to show product modal
    function product(productId) {
    const modal = document.getElementById(`productModal${productId}`);
    const closeBtn = document.getElementById(`closeModal${productId}`);
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Close modal when the close button is clicked
    closeBtn.onclick = function () {
      modal.classList.add('hidden');
    }
    
    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
      if (event.target == modal) {
          modal.classList.add('hidden');
      }
    }
    }
    
    // Add event listeners for each button
    document.getElementById('openModal1').addEventListener('click', function() {
    product(1);
    });
    document.getElementById('openModal2').addEventListener('click', function() {
    product(2);
    });
    document.getElementById('openModal3').addEventListener('click', function() {
    product(3);
    });
    document.getElementById('openModal4').addEventListener('click', function() {
    product(4);
    });
    document.getElementById('openModal5').addEventListener('click', function() {
    product(5);
    });
    document.getElementById('openModal6').addEventListener('click', function() {
    product(6);
    });


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


document.addEventListener("DOMContentLoaded", function() {
    const logoContainer = document.querySelector("#logo1");
    let speed = 50; // Durasi scroll dalam detik
    
    // Ubah kecepatan scroll saat tombol diklik
    document.getElementById("increaseSpeed").addEventListener("click", function() {
        speed -= 5;
        logoContainer.style.animationDuration = speed + "s";
    });

    document.getElementById("decreaseSpeed").addEventListener("click", function() {
        speed += 5;
        logoContainer.style.animationDuration = speed + "s";
    });
});



function sendToWhatsapp(){
	let number = "+6285283241926";


	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;


	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";


	window.open(url, '_blank').focus();
}










