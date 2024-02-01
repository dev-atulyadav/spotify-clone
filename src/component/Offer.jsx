import React from "react";
import Section from "./Section";

export default function Offer() {
  return (
    <section className="offer-sec">
      <article className="offer">
        <h3>The power of Premium</h3>
        <main>
          <div className="feature">
            <span className="feature-img"></span>
            <div>
              <h4>Ad-Free music listening</h4>
              <p>Enjoy uninterrupted music.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-img"></span>
            <div>
              <h4>Offline playback</h4>
              <p>Save your data by listening offline.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-img"></span>
            <div>
              <h4>Play everywhere</h4>
              <p>Listen on your speakers, TV, and other favorite devices.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-img"></span>
            <div>
              <h4>Pay your way</h4>
              <p>Prepay with Paytm, UPI, and more.</p>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
}
