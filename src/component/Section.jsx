import React from "react";

function Section() {
  return (
    <section className="welcome">
      <article>
        <main>
          <h2>Ends soon: ₹119 for 3 months of Premium</h2>
          <p>
            Ad-free music listening, offline playback, and more. UPI, debit and
            credit cards accepted. Cancel anytime.
          </p>
        </main>
        <main>
          <p>Offer ends in 1d: 3h: 55m</p>
          <div>
            <a href="">
              <button>Get 3 months for ₹119</button>
            </a>
            <a href="">
              <button>See other plans</button>
            </a>
          </div>
          <small>
            Individual plan only. ₹119/month after.
            <a href=""> Terms and conditions apply </a>. Open only to user who
            haven't already tried Premium. Offer ends 12/31/23.
          </small>
        </main>
      </article>
      <article>
        <div className="premium-img"></div>
      </article>
    </section>
  );
}

export default Section;
