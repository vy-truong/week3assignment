import Link from "next/link";

export default function Home(){
  const linkStyles = "underline text-cyan-600 hover: text-cyan-300";
  return(
    <main>
      <h2>Page Links</h2>
      <p><Link className={linkStyles} href="./item-list">Item List</Link></p>
      <p><Link className={linkStyles} href="./item">Item</Link></p>
      <p><Link className={linkStyles} href="./page">Page</Link></p>
      
     
    </main>
  );
}