export const dynamic = 'force-static';
export default function PrivacyPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-black mb-4">
            We value your privacy. Blueberry IT Sky collects personal information solely to provide better service experiences.
          </p>
          <p className="text-lg text-black mb-4">
            We do not sell, rent, or share your data with third parties without consent.
          </p>
          <p className="text-lg text-black">
            You may contact us at any time to request deletion of your data.
          </p>
        </div>
      </div>
    </main>
  );
}