const Paccc = () => (
  <p className="text-white border-2 p-3 my-6">
    ra a debitis neque illo eaque labore culpa libero adipisci incidunt omnis
    quos perferendis inventore quas quam, asperiores officia fugiat reiciendis
    eveniet. In fuga repudiandae consectetur optio ipsa, voluptatibus ex quis
    perferendis inventore quaerat voluptates iure praesentium voluptatum.
    Repudiandae deserunt dicta earum obcaecati at dolorum cupiditate laboriosam
    nostrum et, unde asperiores corrupti reprehenderit corporis tempore
    architecto ullam libero, esse quidem? Enim sint laboriosam, ad voluptate
    voluptatum architecto libero eligendi quos aliquam fugiat.
  </p>
);

export default function App() {
  return (
    <section className="bg-custom-background min-h-screen bg-cover bg-secondary-colour fixed w-screen border-2 border-red-300">
      <section className="fixed w-full h-full bg-primary-colour opacity-90 border-2 overflow-y-auto">
        <Paccc />
        <Paccc />
        <Paccc />
        <Paccc />
      </section>
    </section>
  );
}
