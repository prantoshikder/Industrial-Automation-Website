import Container from "../shared/Container";

const brands = ["SIEMENS", "ABB", "KUKA", "FANUC", "YASKAWA"];

export default function TrustedBy() {
  return (
    <section>
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-10">
        <p className="text-sm font-medium text-body">
          Trusted By Industry Leaders
        </p>
        <div className="flex flex-1 flex-wrap items-center justify-between gap-x-10 gap-y-5">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-xl font-extrabold tracking-wide text-ink/45 transition-colors hover:text-ink/70 sm:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
