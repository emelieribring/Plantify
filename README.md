# 🪴 Plantify

**Plantify** är en stilren e-handelsplattform för växtälskare – byggd med Vue 3, Tailwind CSS och en touch av magi ✨  
Det är ett portfolio-projekt som visar upp ett helt flöde: från snygg produktvisning till riktig (test)betalning via Stripe.

---

## 🌿 Funktioner

- 💚 Modern design med Tailwind CSS
- 🛒 Varukorg med Pinia (Vue store)
- 💳 Fullt checkout-flöde med Stripe API (testläge)
- 📱 Mobilvänlig layout + hamburger-meny
- 🌱 Responsiv produktvy med kolumner
- 🔍 Filtrering via kategorier
- 💌 Kontakt- & tacksida
- 🧑‍💻 Snygg kodstruktur & komponentuppdelning

---

## 🔧 Tekniker

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Stripe](https://stripe.com/)
- [Node.js + Express](https://expressjs.com/) (för backend checkout-session)
- TypeScript 💙

---

## 🚀 Kom igång lokalt

```bash
# 1. Klona projektet
git clone https://github.com/emelieribring/Plantify.git
cd Plantify

# 2. Installera dependencies
npm install

# 3. Starta frontend
npm run dev

# 4. Gå till server/ och kör backend
cd server
npm install
node server.js
```

Lägg till en .env i server/ med din Stripe-nyckel:

STRIPE_SECRET_KEY=sk_test_your_key_here

👉 Eller använd .env.example som mall.

Du kan betala med:

Kortnummer: 4242 4242 4242 4242
Datum: valfritt i framtiden
CVC: valfritt

✨ Emelie Ribring
Portfolio | LinkedIn | GitHub
