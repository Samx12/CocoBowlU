const PATHS = {
  home: {
      path: "/",
      template: `
      <center>
      <div class="slider">
        <div class="slide">
          <img src="/images/cocobowl.png" alt="Imagen 1">
        </div>
        <div class="slide">
          <img src="/images/coco3.png" alt="Imagen 2">
        </div>
        <div class="slide">
          <img src="/images/coco2.png" alt="Imagen 3">
        </div>
      </div>
      </center>
      `,
  },
  about: {
      path: "/about",
      template: `
          <h1>👩🏻‍💻 Sobre mi</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
          <img src="https://source.unsplash.com/random/500x400" alt="Random Image">
      `,
  },
  contact: {
      path: "/contact",
      template: `
          <h1>📱 Contacto</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
          <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
      `,
  },
  shop: {
    path: "/shop",
    template: `
        <h1>📱 PROXIMAMENTE TIENDA DIGITAL</h1>
        <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
    `,
},

users: {
  path: "/users",
  template: `
      <h1>📱 CHECA TU USUARIO AQUI</h1>
      <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
  `,
}

}