function sendWhatsAppMessage() {
        const plan = document.getElementById('data-plan').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const [bundle, cost] = plan.split(' - ');
        const message = `I want to order ${bundle} for ${cost}. Bundle For This Number ${phoneNumber}.`;
        const whatsappUrl = `https://wa.me/+233503868557?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }

      function sendRecommendationMessage() {
        const friendNumber = document.getElementById('friend-number').value;
        const message = `Hey! Check out DataDock Ghana for the best data deals! They are legit. They are not scam. Visit https://datadockghana.netlify.app/ to buy data.`;
        const whatsappUrl = `https://wa.me/${friendNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }