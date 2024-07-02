<template>
  <div class="about">
    <Navbar />
    <h1>À propos de NO MORE WASTE</h1>
    <h2>Notre Mission</h2>
    <p>
      Créée en 2013 à Paris, NO MORE WASTE est une association humanitaire engagée dans la lutte contre le gaspillage alimentaire et matériel.
      Notre mission est de réduire le gaspillage en récoltant les invendus commerciaux et les produits proches de la date limite de consommation chez les particuliers.
      Nous redistribuons ces produits à ceux qui en ont besoin, contribuant ainsi à un avenir plus durable et solidaire.
    </p>
    <h2>Notre Expansion</h2>
    <p>
      Depuis nos débuts, nous avons étendu notre présence au-delà de Paris, avec des agences locales à Nantes, Marseille, et Limoges.
      Notre ambition ne s'arrête pas là : nous nous développons également à l'international, avec des antennes à Naples, Porto et Dublin.
      Cette liste est en constante évolution, reflétant notre forte expansion et notre volonté de maximiser notre impact global.
    </p>
    <h2>Nos Services</h2>
    <p>
      Chez NO MORE WASTE, nous offrons une gamme de services destinés à aider chacun à éviter le gaspillage, à partager et à économiser.
      Ces services sont accessibles à nos adhérents moyennant une faible cotisation annuelle:
    </p>
    <ul>
      <li>Conseils anti-gaspi</li>
      <li>Cours de cuisine</li>
      <li>Partage de véhicules</li>
      <li>Échange de services entre particuliers (bricolage, électricité, plomberie)</li>
      <li>Services de réparation</li>
      <li>Gardiennage</li>
    </ul>
    <h2>Notre Équipe</h2>
    <p>
      Pour mener à bien nos activités, nous employons aujourd'hui 14 salariés en CDI, répartis entre notre siège à Paris et nos agences locales.
      Nous sommes également soutenus par une formidable équipe de plus de 200 bénévoles dévoués, qui jouent un rôle crucial dans la réalisation de nos actions quotidiennes.
    </p>
    <h2>Rejoignez-nous</h2>
    <p>
      Nous croyons fermement que chacun peut faire la différence. Rejoignez NO MORE WASTE pour contribuer à un avenir sans gaspillage.
      Ensemble, nous pouvons créer une communauté plus solidaire et respectueuse de l'environnement.
    </p>
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

<style>
.about h2, .about p , .about ul{
  text-align: left;
}
</style>
