import React from "react";

export default function Pricecards() {
  return (
    <section className="cards-sec">
      <article>
        <main>
          <h1>Pick your Premium</h1>
          <p>
            Listen without limits on your phone, speaker, and other devices.
          </p>
          <ul className="pay-patners">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </main>
      </article>
      <article className="card-list">
        <main className="card">
          <div>
            <h4>3 months for ₹119</h4>
            <h4>One-time plans available</h4>
            <h2>Individual</h2>
            <p>₹119/month after offer period</p>
            <p>1 account</p>
          </div>
          <div>
            <p>Ad-free music listening</p>
            <p>Group Session</p>
            <p>Download 10k songs/device on 5 devices</p>
          </div>
          <div>
            <a href="">
              <button>View plans</button>
            </a>
            <p>
              Individual plan only. ₹119/month after.
              <a href="">Terms and conditions apply</a>. Open only to users who
              haven't already tried Premium. Offer ends 12/31/23.
            </p>
          </div>
        </main>
        <main className="card">
          <div>
            <h4>1 month free</h4>
            <h4>One-time plan available</h4>
            <h2>Student</h2>
            <p>₹59/month after offer period </p>
            <p>1 account</p>
          </div>
          <div>
            <p>Discount for eligible students</p>
            <p>Ad-free music listening</p>
            <p>Group Session</p>
            <p>Download 10k songs/device, on 5 devices per account</p>
          </div>
          <div>
            <a href="">
              <button>View plans</button>
            </a>
            <p>
              Spotify Student Discount Offer
              <a href="">Terms and conditions apply</a>. Offer available only to
              students at an accredited higher education institution.
            </p>
          </div>
        </main>
        <main className="card">
          <div>
            <h4>One-time plans available</h4>
            <h2>Mini</h2>
            <p>From ₹7/day</p>
            <p>1 account on mobile only</p>
          </div>
          <div>
            <p>Ad-free music listening on mobile</p>
            <p>Group Session</p>
            <p>Download 30 songs on 1 mobile device</p>
          </div>
          <div>
            <a href="">
              <button>View plans</button>
            </a>
            <p>
              <a href="">Terms and conditions apply.</a>
            </p>
          </div>
        </main>
        <main className="card">
          <div>
            <h4>One-time plans available</h4>
            <h2>Family</h2>
            <p>₹179/month</p>
            <p>Up to 6 accounts</p>
          </div>
          <div>
            <p>For family who live together</p>
            <p>Block explict music</p>
            <p>Ad-free music listening</p>
            <p>Group Session</p>
            <p>Download 10k songs/device on 5 devices</p>
          </div>
          <div>
            <a href="">
              <button>View plans</button>
            </a>
            <p>
              <a href="">Terms and conditions apply.</a>
              For families who reside at the same address.
            </p>
          </div>
        </main>
      </article>
      <article>
        <h1>Two Premium accounts for couples under one roof.</h1>
        <a href="">
          <button>Learn more</button>
        </a>
      </article>
    </section>
  );
}
