import HeaderTitle from "@/components/globals/HeaderTitle";

export default function PricesPage() {
  return (
    <>
      <HeaderTitle title="Mes Prestations" />

      <ul className="prestations_list">
        <li>
          <article>
            <h2>Visite Conseil</h2>
            <h3>120 €</h3>
            <p>RDV 1H30 (physique ou visio)</p>
            <p>Discussion autour de votre projet. Conseils pour réaménager une pièce, pour disposer, agencer différemment un espace. Conseils quant au choix des matériaux, proposition de coloris de peinture, idées pour cloisonner ou décloisonner un espace sans travaux...</p>
          </article>
        </li>
        <li>
          <article>
            <h2>E-book déco</h2>
            <h3>260 €</h3>
            <p>Plusieurs rendez-vous</p>
            <p>Discussion autour de votre projet, compte rendu de notre échange et de votre projet par écrit, réalisation d&apos;une planche inspiration / décoration, d&apos;une planche matériaux, d&apos;une planche mobilier.</p>
          </article>
        </li>
        <li>
          <article>
            <h2>Agencement, décoration et visuel 3D</h2>
            <h3>570 €</h3>
            <p>Plusieurs rendez-vous</p>
            <p>Prestation identique à la deuxième, avec une shopping liste, des vues en modélisation 3D par pièce pour avoir une idée concrète du rendu.</p>
          </article>
        </li>
        <li>
          <article>
            <h2>La shopping liste</h2>
            <h3>150 €</h3>
            <p>Sans rendez-vous</p>
            <p>Je donne vie à vos inspirations. A partir de photos de décoration qui vous plaisent et que vous me faites parvenir, j&apos;établis une liste shopping déco complète en fonction de votre budget, avec les références des produits, leurs prix et le coût global.</p>
          </article>
        </li>
        <li>
          <article>
            <h2>Carte cadeau</h2>
            <h3>Tarif relatif</h3>
            <p>...</p>
            <p>Offrez la prestation de votre choix</p>
          </article>
        </li>
      </ul>
    </>
  )
}