export const dynamic = 'force-static';
export default function TermsPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-lg text-black mb-6">
            By using our website or services, you agree to comply with our terms:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-black">
            <li>Projects begin upon confirmed quotation and payment schedule.</li>
            <li>All digital assets delivered after full payment.</li>
            <li>Clients are responsible for providing accurate content and assets.</li>
            <li>Blueberry IT Sky reserves the right to feature completed projects in our portfolio.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}