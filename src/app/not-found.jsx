import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Pagina no Encontrada</p>
      <Link href="/">Volver al Home</Link>
    </>
  );
}
