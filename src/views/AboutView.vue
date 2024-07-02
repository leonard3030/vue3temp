<template>
  <div class="about">
    <Navbar />
    <section class="intro">
      <h1>À propos de NO MORE WASTE</h1>
      <h2>Notre Mission</h2>
      <p>
        Créée en 2013 à Paris, NO MORE WASTE est une association humanitaire engagée dans la lutte contre le gaspillage alimentaire et matériel.
        Notre mission est de réduire le gaspillage en récoltant les invendus commerciaux et les produits proches de la date limite de consommation chez les particuliers.
        Nous redistribuons ces produits à ceux qui en ont besoin, contribuant ainsi à un avenir plus durable et solidaire.
      </p>
    </section>
    <section class="content">
      <section class="about">
        <h3>Notre Expansion</h3>
        <p>
          Depuis nos débuts, nous avons étendu notre présence au-delà de Paris, avec des agences locales à Nantes, Marseille, et Limoges.
          Notre ambition ne s'arrête pas là : nous nous développons également à l'international, avec des antennes à Naples, Porto et Dublin.
          Cette liste est en constante évolution, reflétant notre forte expansion et notre volonté de maximiser notre impact global.
        </p>
      </section>
      <section class="mission">
        <h3>Nos Services</h3>
        <ul>
          <li>Conseils anti-gaspi</li>
          <li>Cours de cuisine</li>
          <li>Partage de véhicules</li>
          <li>Échange de services entre particuliers (bricolage, électricité, plomberie)</li>
          <li>Services de réparation</li>
          <li>Gardiennage</li>
        </ul>
      </section>
      <section class="actions">
        <h3>Notre Équipe</h3>
        <p>
          Pour mener à bien nos activités, nous employons aujourd'hui 14 salariés en CDI, répartis entre notre siège à Paris et nos agences locales.
          Nous sommes également soutenus par une formidable équipe de plus de 200 bénévoles dévoués, qui jouent un rôle crucial dans la réalisation de nos actions quotidiennes.
        </p>
      </section>
      <section class="impact">
        <h3>Rejoignez-nous</h3>
        <p>
          Nous croyons fermement que chacun peut faire la différence. Rejoignez NO MORE WASTE pour contribuer à un avenir sans gaspillage.
          Ensemble, nous pouvons créer une communauté plus solidaire et respectueuse de l'environnement.
        </p>
      </section>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AboutView",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.about {
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
  width: 100%;
  max-width: 800px;
  text-align: left; 
  margin-top: 20px;
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
</style>
