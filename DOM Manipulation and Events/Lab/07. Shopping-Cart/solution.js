function solve() {

   let addButtons = Array.from(document.querySelectorAll('button.add-product'));
   let checkoutButton = document.querySelector('.checkout');
   let textArea = document.querySelector('textarea');

   let productsAdded = [];
   let totalPrice = 0


   for (const button of addButtons) {

      button.addEventListener('click', addProduct)

   }
      
      function addProduct(event) {
         let currentButton = event.currentTarget.parentNode.parentNode;

         const productName = currentButton.querySelector('.product-title').textContent;
         const productPrice = Number(currentButton.querySelector('.product-line-price').textContent);

         if(!productsAdded.includes(productName)) {
            productsAdded.push(productName);
            
         }

         totalPrice += productPrice;

         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         
      }


      checkoutButton.addEventListener('click', checkout)
      function checkout(event) {

         textArea.textContent += `You bought ${productsAdded.join(', ')} for ${totalPrice.toFixed(2)}.`

         addButtons.forEach(button => {
            button.disabled = true
         })

         checkoutButton.disabled = true
      }
      
   
   
}