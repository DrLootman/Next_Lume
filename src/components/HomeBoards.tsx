import Image from "next/image";

export default function HomeBoards() {
  return (
    <>
      <h2 className={`home-boards_title`}>Planches d&apos;inspiration et de mobilier</h2>

      <ul className="home_boards">
        <li>
          <Image src="/PlancheInspi1.jpg" alt="Première planche d&apos;inspiration" width={700} height={500} onLoad={(e) => console.log(e.target.naturalHeight)} />
        </li>
        <li>
          <Image src="/PlancheInspi2.jpg" alt="Seconde planche d&apos;inspiration" width={700} height={500} />
        </li>
      </ul>
    </>
  )
}