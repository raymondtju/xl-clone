class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="../css/component/navbar.module.css">
      <nav>
        <div class="firstNav">
          <div class="container">
            <ul>
              <li style="font-weight: 600;">Personal</a></li>
              <li><a href="#" style="color: #ffff !important;">Bisnis</a></li>
              <li><a href="#" style="color: #ffff !important;">Perusahaan</a></li>
            </ul>
          </div>
        </div>
        <div class="secNav">
          <div class="container">
            <img src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2019-03/xl-logo.png" alt="logo" width="52">

            <div
              class="hambuger"
            >
              <div
                class="hambuger-child"
              ></div>
              <div
                class="hambuger-child"
              ></div>
              <div
                class="hambuger-child"
              ></div>
            </div>

            <ul>
              <li><a href="#">XL Store</a></li>
              <li><a href="#">Produk</a></li>
              <li><a href="#">FUN</a></li>
              <li><a href="#">Promo</a></li>
              <li><a href="#">Layanan Kartu SIM</a></li>
              <li><a href="#">Bantuan</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("c-nav", Navbar);