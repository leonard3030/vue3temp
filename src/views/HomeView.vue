<template>
  <div class="home">
    <Navbar />
    <section class="intro">
      <h1>Bienvenue chez NO MORE WASTE</h1>
      <h2>Ensemble contre le gaspillage</h2>
    </section>
    <section class="content">
      <section class="about">
        <h3>Qui sommes-nous ?</h3>
        <p>NO MORE WASTE est une association humanitaire fondée en 2013 à Paris, dédiée à la lutte contre le gaspillage alimentaire et matériel. Notre objectif est de récupérer les invendus commerciaux et les produits proches de la date limite de consommation pour les redistribuer à ceux qui en ont besoin.</p>
      </section>
      <section class="mission">
        <h3>Notre Mission</h3>
        <p>Nous croyons qu'un monde sans gaspillage est possible. Chaque jour, nos équipes et nos bénévoles travaillent sans relâche pour collecter et redistribuer des produits alimentaires et autres, afin de soutenir les personnes en difficulté et de réduire notre impact environnemental.</p>
      </section>
      <section class="actions">
        <h3>Nos Actions</h3>
        <ul>
          <li>Collecte et redistribution : Récupération des invendus et des produits périssables chez les commerçants et les particuliers.</li>
          <li>Conseils et éducation : Offrir des conseils anti-gaspi et des cours de cuisine pour aider chacun à réduire le gaspillage.</li>
          <li>Partage et entraide : Faciliter le partage de véhicules, l’échange de services et la réparation d’objets.</li>
        </ul>
      </section>
      <section class="impact">
        <h3>Notre Impact</h3>
        <p>Depuis notre création, nous avons distribué des tonnes de nourriture et aidé des milliers de personnes à travers nos actions locales et internationales. Grâce à notre réseau croissant, nous touchons de plus en plus de vies chaque jour.</p>
      </section>
      <section class="join">
        <h3>Rejoignez-nous</h3>
        <p>Vous pouvez faire la différence. Devenez membre de NO MORE WASTE et participez à nos actions. Ensemble, nous pouvons construire un avenir plus durable et solidaire.</p>
        <button>S'inscrire</button>
      </section>
      <section class="testimonials">
        <h3>Témoignages</h3>
        <blockquote>
          "Grâce à NO MORE WASTE, nous avons pu obtenir de la nourriture que nous n'aurions pas pu nous permettre autrement. Merci pour tout ce que vous faites !" - Marie, bénéficiaire
        </blockquote>
        <blockquote>
          "Participer aux actions de NO MORE WASTE m'a permis de redonner du sens à mon quotidien et de contribuer à une cause qui me tient à cœur." - Julien, bénévole
        </blockquote>
      </section>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.intro {
  margin-bottom: 40px;
}
.intro h1 {
  color: #e74c3c;
  font-size: 2.5em;
  margin-bottom: 10px;
}
.intro h2 {
  color: #2c3e50;
  font-size: 1.5em;
  margin-bottom: 20px;
}
.content {
  width: 100%;
  max-width: 800px; /* Ajuster la largeur maximale selon votre préférence */
  text-align: left; /* Aligner le texte à gauche à l'intérieur du contenu */
  margin-top: 20px;
}
section {
  margin-bottom: 40px;
  box-sizing: border-box;
  padding-right: 20px;
}
h3 {
  color: #e74c3c;
  font-size: 1.8em;
  margin-bottom: 15px;
}
p, ul {
  color: #2c3e50;
  font-size: 1.1em;
  text-align: left; /* Aligner le texte à gauche */
}
ul {
  list-style-type: disc;
  margin-left: 20px;
}
button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
button:hover {
  background-color: #c0392b;
}
blockquote {
  font-style: italic;
  color: #2c3e50;
  border-left: 5px solid #e74c3c;
  padding-left: 10px;
  margin: 20px 0;
}
</style>
