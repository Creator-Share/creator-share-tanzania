import React from 'react';

const DonatePage = () => {
  return (
    <div className="p-4 min-h-screen">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Sharing</h1>
        <p className="italic mb-4">Share Your Support With Those Who Need It Most.</p>
        <p className="text-lg">
          We are not keen on the word "donate" here at ShareTanzania. We prefer to see ourselves as a bridge, a bridge between the hearts of those who might want to share, and those on earth today, who truly need those hearts to share. See it as real-time sharing, sharing that provides love, support and alleviates the problems that the children that surround us, have to face.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto min-h-[800px] flex justify-center">
        <iframe
          src="https://www-sharetanzania-com.filesusr.com/html/8325b4_dc2daec1e9a1a287ba3013ba571362f5.html"
          title="Donate to Share Tanzania"
          name="donate-iframe"
          width="400"
          height="1000"
          className="max-w-full border-0 rounded-md shadow"
          allowFullScreen
        ></iframe>
      </div>
        <div className="max-w-4xl mx-auto p-4 space-y-4">
          <h2 className="text-2xl font-bold">Gift Aid For UK Tax Payers</h2>
          <p>
            Gift aid gives you and extra 25p for every £1.00 you donate. Gift Aid allows UK charities to claim back the basic rate tax already paid on donations by the donor. This means we can claim back from the government on your behalf 25p for every £1 donated, boosting the value of the donation by a quarter.
          </p>
          <p>
            What do you need to do? You just simply need to be a UK taxpayer and click the (Yes, I want to claim gift aid button) on your donation form.
          </p>
          <p>
            For more information please visit <a href="https://www.gov.uk/donating-to-charity/gift-aid" className="text-blue-600 underline">https://www.gov.uk/donating-to-charity/gift-aid</a>
          </p>
  
          <h2 className="text-2xl font-bold mt-8">Direct Bank Transfers and International Bank Transfers</h2>
          <p><strong>Account Holder:</strong></p>
          <p>HSBC Bank<br />The Creator Share Foundation<br />Sort Code: 40-16-15<br />Account number: 14328329</p>
          <p><strong>IBAN</strong> - GB56HBUK40161514328329<br /><strong>SWIFT</strong> - HBUKGB4103K</p>
          <p>Bank Address - 1 Centenary Square, Birmingham, B11HQ, United Kingdom</p>
  
          <h2 className="text-2xl font-bold mt-8">Where Does Your Donation Go?</h2>
          <p>Feathers Tale<br />Children's Village<br />Angels Gate Center For Street Involved Children<br />Uchira Children's Fund</p>
          <p><strong>Poverty Knows No Race Or Religion</strong></p>
          <p>
            We support all those in need, of all ethnic origins and religious belief systems. To us we are all Gods children, and we all feel the same joys and pains in life.
          </p>
          <p>
            If you prefer you can also share a donation using our virgin money giving facility, just click this button to proceed. Thank you for your love and support.
          </p>
        </div>
    </div>
  );
};

export default DonatePage;