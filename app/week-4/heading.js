export default function Heading({ title, pageinfo }) {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold my-3">{title}</h1>;
      <p className="text-xl text-center">{pageinfo}</p>
    </>
  );
}
