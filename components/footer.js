class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div style="display: flex; gap: 24px; width: 100%">
            <div class="left-content">
              <h3>Dapatkan promo terbaru hanya di myXL</h3>

              <p style="font-size: 16px; color: #fff">Download sekarang:</p>
              <div style="display: flex; gap: 16px; margin-top: 8px">
                <a
                  href="https://play.google.com/store/apps/details?id=com.stagescycling.stages"
                  ><img
                    alt="Get it on Google Play"
                    src="./public/img/ps.png"
                    style="width: 150px"
                /></a>
                <a href="https://apps.apple.com/app/id1551353775"
                  ><img
                    src="./public/img/as.png"
                    alt="Download on the App Store"
                    style="width: 150px; display: block"
                /></a>
              </div>

              <h3 style="padding-top: 48px; display: block">
                Tetap terhubung dengan kami
              </h3>
              <div style="display: flex; gap: 12px; margin-top: 16px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48Zm-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66Z"
                  />
                </svg>
              </div>
            </div>

            <div style="width: 100%; display: flex; flex: 100%">
              <div class="footer-card">
                <h3>Produk</h3>
                <ul>
                  <li>
                    <img
                      src="https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/e54cd370-04c1-4dfe-b9c0-fe44e0624355.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/cc008afa-60bc-4aba-84fe-5a0bf9aeabde.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/d68871ba-6d30-4627-b8e8-cb2bf936353f.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://web-xlrvmnpr.s3.ap-southeast-1.amazonaws.com/images/post/1e544e4a-79f1-4b38-8f0b-58bc07ba02e6.jpg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div class="footer-card">
                <h3>Services</h3>
                <ul>
                  <li>myXL</li>
                  <li>myRewards</li>
                  <li>Ring Back Tone</li>
                  <li>Carrier Billing</li>
                  <li>Bagi Pulsa</li>
                  <li>Pulsa Siaga</li>
                </ul>
              </div>
              <div class="footer-card">
                <h3>Jelajahi</h3>
                <ul>
                  <li>Promo</li>
                  <li>FUN</li>
                  <li>Registrasi Kartu</li>
                  <li>Pilih Nomor Sendiri</li>
                  <li>Kartu 4G</li>
                  <li>Cek Masa Aktif</li>
                  <li>Bantuan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        style="
          background-color: var(--light-green);
          padding: 20px 0;
          color: white;
        "
      >
        <div class="container">
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <p style="font-weight: 300; letter-spacing: 0.01rem">
              Copyright © 2023 XL Axiata
            </p>
            <p style="font-weight: 600; letter-spacing: 0.01rem">
              Privacy Policy | Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("c-foot", Footer);
