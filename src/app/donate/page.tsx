import React from 'react';

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-white rounded-2xl shadow-lg p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

const DonatePage = () => {
  return (
    <div className="landing-page min-h-screen bg-[#F7F9FB] py-12 md:py-16 px-2 md:px-0">
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5486F7] leading-tight mb-2 text-left md:text-left">
            Sharing
          </h1>
          <p className="italic text-gray-500 mb-4 text-lg md:text-xl text-left md:text-left">
            Share Your Support With Those Who Need It Most.
          </p>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-0 text-left md:text-left">
            We are not keen on the word "donate" here at ShareTanzania. We prefer to see ourselves as a bridge, a bridge between the hearts of those who might want to share, and those on earth today, who truly need those hearts to share. See it as real-time sharing, sharing that provides love, support and alleviates the problems that the children that surround us, have to face.
          </p>
        </div>

        {/* Donation Form Card */}
        <Card className="flex justify-center items-center min-h-[600px] mb-10">
          <iframe
            src="https://www-sharetanzania-com.filesusr.com/html/8325b4_dc2daec1e9a1a287ba3013ba571362f5.html"
            title="Donate to Share Tanzania"
            name="donate-iframe"
            width="400"
            height="1000"
            className="max-w-full border-0 rounded-md shadow"
            allowFullScreen
          ></iframe>
        </Card>

        {/* Gift Aid Section */}
        <Card className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-2">Gift Aid For UK Tax Payers</h2>
          <p className="text-base md:text-lg mb-2">
            Gift aid gives you and extra 25p for every £1.00 you donate. Gift Aid allows UK charities to claim back the basic rate tax already paid on donations by the donor. This means we can claim back from the government on your behalf 25p for every £1 donated, boosting the value of the donation by a quarter.
          </p>
          <p className="text-base md:text-lg mb-2">
            What do you need to do? You just simply need to be a UK taxpayer and click the (Yes, I want to claim gift aid button) on your donation form.
          </p>
          <p className="text-base md:text-lg">
            For more information please visit{' '}
            <a href="https://www.gov.uk/donating-to-charity/gift-aid" className="text-[#5486F7] underline font-semibold">
              https://www.gov.uk/donating-to-charity/gift-aid
            </a>
          </p>
        </Card>

        {/* Bank Transfer Section */}
        <Card className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-2">Direct Bank Transfers and International Bank Transfers</h2>
          <div className="mb-2">
            <span className="font-bold">Account Holder:</span>
            <div className="ml-2">
              HSBC Bank<br />
              The Creator Share Foundation<br />
              Sort Code: 40-16-15<br />
              Account number: 14328329
            </div>
          </div>
          <div className="mb-2">
            <span className="font-bold">IBAN</span> - GB56HBUK40161514328329<br />
            <span className="font-bold">SWIFT</span> - HBUKGB4103K
          </div>
          <div className="mb-2">
            Bank Address - 1 Centenary Square, Birmingham, B11HQ, United Kingdom
          </div>
        </Card>

        {/* Where Donation Goes Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-6 text-left md:text-left">Where Does Your Donation Go?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="flex items-center justify-center text-center font-semibold text-lg md:text-xl min-h-[100px]">
              Feathers Tale Children's Village
            </Card>
            <Card className="flex items-center justify-center text-center font-semibold text-lg md:text-xl min-h-[100px]">
              Angels Gate Center For Street Involved Children
            </Card>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-6 mb-6">
            <Card className="flex-1 flex items-center justify-center text-center font-semibold text-lg md:text-xl min-h-[100px] max-w-xl mx-auto">
              Uchira Children's Fund
            </Card>
          </div>
          <div className="mt-8">
            <p className="font-bold text-[#5486F7] mb-2 text-lg md:text-xl">Poverty Knows No Race Or Religion</p>
            <p className="text-base md:text-lg mb-2">
              We support all those in need, of all ethnic origins and religious belief systems. To us we are all Gods children, and we all feel the same joys and pains in life.
            </p>
            <p className="text-base md:text-lg">
              If you prefer you can also share a donation using our virgin money giving facility, just click this button to proceed. Thank you for your love and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;