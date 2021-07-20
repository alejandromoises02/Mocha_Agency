const esp = `<div id='español' >
<div class='d-none d-md-block '>
<div class='ESP'>
  <!--Menu Header-->
  <header class="animate__animated animate__bounceInRight">
    <nav >
      <img src='multimedia/mocca.svg' alt='Logo Moca Agency' />
      <ul>
        <li>
          <a href='#sobreNosotros'>Sobre Nosotoros</a>
        </li>
        <li>
          <a href='#servicios'>Servicios</a>
        </li>
        <li>
          <a href='#solicitarPresupuesto'>Solicitar Presupuesto</a>
        </li>
      </ul>
    </nav>
  </header>
  <!--Seleccionar idioma/Banner-->

  <div class='banner_landing animate__animated animate__bounceInRight'>
    <div class='lenguage_select'>
      <p class='esp_esp'>ESP</p>
      <p onclick=goEng() class='eng_esp'>ENG</p>
    </div>
    <div class='banner__contacto'>
      <a href='#solicitarPresupuesto'><button>Contáctanos</button></a>
      <a href='#'>
        <img src='multimedia/whatsapp.svg' alt='Contactanos via whatsapp' />
      </a>
    </div>
    <img
      class='banner_contact'
      src='multimedia/backbanner.svg'
      alt='fondo de imagen'
    />
    <div class='banner_adapt'>
      <img
        src='multimedia/adaptados.svg'
        alt='Nos adaptamos al tamaño de tu proyecto'
      />
      <img src='multimedia/cafe.svg' alt='Cafe' />
    </div>
  </div>

  <!--Conocenos-->
  <div class='conocenos animate__animated animate__bounceInRight' id='sobreNosotros'>
    <img src='multimedia/conocenos.svg' alt='conocenos' />
  </div>
  <!--Servicios-->
  <div class='servicios' id='servicios'>
    <img src='multimedia/servicios.svg' alt='servicios' />
  </div>
  <!--Banner Numeros-->
  <div class='servicios'>
    <img src='multimedia/bannerNumeros.svg' alt='Banner Numeros' />
  </div>
  <!--Mapa Servicios-->
  <div class='conocenos'>
    <img src='multimedia/mapa.svg' alt='Mapa Servicios' />
  </div>
  <!--Logos-->
  <div class='multimedia'>
    <img src='multimedia/logos.svg' alt='Logos' />
  </div>
  <!--Solicita presupuesto-->
  <div class='contacto' id='solicitarPresupuesto'>
    <div class='contacto__formulario'>
      <h2>Solicita presupuesto</h2>
      <div>
        <input id="form_nombre" type='text' placeholder='Nombre' />
        <input id="form_email" type='email' placeholder='Correo' required />
        <select id="form_servicios" name='servicios'>
          <option value='¿Cómo podemos ayudarte?'>¿Cómo podemos ayudarte?</option>
          <option value='Asesoria de marca'>Asesoria de marca</option>
          <option value='Diseño Gráfico & Branding'>Diseño Gráfico & Branding</option>
          <option value='Creacion de contenido'>Creacion de contenido</option>
          <option value='Social Media Marketing'>Social Media Marketing</option>
          <option value='Desarollo web personalizado'>Desarollo web personalizado</option>
        </select>
        <textarea id="form_texto"
          name='Texto_Ingresado'
          cols='30'
          rows='6'
          placeholder='Breve descripción de tu compañía'
        ></textarea>
        <button type="submit" onclick=formulario() class="submit" data-toggle="modal" data-target="#exampleModal">Enviar</button>
      </div>
    </div>
    <div class='contacto__contacto'>
      <div class='contacto__email'>
        <img src='multimedia/email.svg' alt='email' />
        <p>info@moccamarketing.com</p>
      </div>
      <p>Suscríbete a nuestro Newsletter:</p>
      <div class='contacto__newsletter'>
        <input type='email' placeholder='E-mail' id="emailNewsletter" required/>
        <button onclick="formulario()" >Suscribirme</button>
      </div>
      <div class='contacto__redes'>
        <div class='redes'>
          <img src='multimedia/linkedin.svg' alt='Linkedin' />
          <img src='multimedia/instagram.svg' alt='Instagram' />
          <img src='multimedia/facebook.svg' alt='Facebook' />
        </div>
        <img src='multimedia/mocca.svg' alt='Logo Mocca' />
      </div>
      <p class='contacto__privacidad'>Políticas de privacidad</p>
    </div>
  </div>
</div>
</div>
<div class='d-block d-md-none d-lg-none d-xl-none'>
<div class='ESP_M'>
  <!--Menu Header-->
  <header class="animate__animated animate__bounceInRight">
  <nav class="navbar navbar-expand-lg">
  <img src="multimedia/mocca.svg" alt="Logo Moca Agency" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img
                src="multimedia/menu_button.svg"
                alt="menu"
                id="menu_button"
              />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#sobreNosotrosM">Sobre Nosotoros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#serviciosM">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#solicitarPresupuestoM">Solicitar Presupuesto</a>
      </li>
    </ul>
  </div>
</nav>
  </header>
  <!--Seleccionar idioma/Banner-->
  
  <div class='banner_landing_MOB animate__animated animate__bounceInRight'>
    <div class='lenguage_select_MOB'>
      <p class='esp_esp_MOB'>ESP</p>
      <p onclick=goEng() class='eng_esp_MOB'>ENG</p>
    </div>
    <div class='banner__contacto_MOB'>
      <a href='#solicitarPresupuestoM'><button>Contáctanos</button></a>
      <a href='#'>
        <img src='multimedia/whatsapp.svg' alt='Contactanos via whatsapp' />
      </a>
    </div>
    <img
      class='banner_contact_MOB'
      src='multimedia/backbanner.svg'
      alt='fondo de imagen'
    />
    <div class='banner_adapt_MOB'>
      <img
        src='multimedia/adaptados.svg'
        alt='Nos adaptamos al tamaño de tu proyecto'
      />
      <img src='multimedia/cafe.svg' alt='Cafe' />
    </div>
  </div>

  <!--Conocenos-->
  <div class='conocenos_MOB animate__animated animate__bounceInRight' id='sobreNosotrosM'>
    <img src='multimedia/conocenosM.svg' alt='conocenosM' />
  </div>
  <!--Servicios-->
  <div class='servicios_MOB' id='serviciosM'>
    <img src='multimedia/serviciosM.svg' alt='servicios' />
  </div>
  <!--Banner Numeros-->
  <div class='servicios_MOB'>
    <img src='multimedia/bannerNumerosM.svg' alt='Banner Numeros' />
  </div>
  <!--Mapa Servicios-->
  <div class='conocenos_MOB'>
    <img src='multimedia/mapaM.svg' alt='Mapa Servicios' />
  </div>
  <!--Logos-->
  <div class='multimedia_MOB'>
    <img src='multimedia/logos.svg' alt='Logos' />
  </div>
  <!--Solicita presupuesto-->
  <div class='contacto_MOB' id='solicitarPresupuestoM'>
    <div class='contacto__formulario_MOB'>
      <h2>Solicita presupuesto</h2>
      <div>
        <input id="form_nombreM" type='text' placeholder='Nombre' />
        <input id="form_emailM" type='email' placeholder='Correo' required />
        <select id="form_serviciosM" name='servicios'>
          <option value='¿Cómo podemos ayudarte?'>¿Cómo podemos ayudarte?</option>
          <option value='Asesoria de marca'>Asesoria de marca</option>
          <option value='Diseño Gráfico & Branding'>Diseño Gráfico & Branding</option>
          <option value='Creacion de contenido'>Creacion de contenido</option>
          <option value='Social Media Marketing'>Social Media Marketing</option>
          <option value='Desarollo web personalizado'>Desarollo web personalizado</option>
        </select>
        <textarea id="form_textoM"
          name='Texto_Ingresado'
          cols='30'
          rows='6'
          placeholder='Breve descripción de tu compañía'
        ></textarea>
        <button type="submit" onclick=formularioM() class="submit" data-toggle="modal" data-target="#exampleModal">Enviar</button>
      </div>
    </div>
    <div class='contacto__contacto_MOB'>
      <div class='contacto__email_MOB'>
        <img src='multimedia/email.svg' alt='email' />
        <p>info@moccamarketing.com</p>
      </div>
      <p>Suscríbete a nuestro Newsletter:</p>
      <div class='contacto__newsletter_MOB'>
        <input type='email' placeholder='E-mail' id="emailNewsletterM" required/>
        <button onclick="formularioM()" >Suscribirme</button>
      </div>
      <div class='contacto__redes_MOB'>
        <div class='redes_MOB'>
          <img src='multimedia/linkedin.svg' alt='Linkedin' />
          <img src='multimedia/instagram.svg' alt='Instagram' />
          <img src='multimedia/facebook.svg' alt='Facebook' />
        </div>
        <img src='multimedia/mocca.svg' alt='Logo Mocca' />
      </div>
      <p class='contacto__privacidad_MOB'>Políticas de privacidad</p>
    </div>
  </div>
</div>
</div>
<!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mocca</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Gracias, en breve nos pondremos en contacto</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
</div>`

const eng = `<div id='ingles'>
<div class='d-none d-md-block'>
<div class='ENG'>
  <!--Menu Header-->
  <header class="animate__animated animate__bounceInRight">
    <nav>
      <img src='multimedia/mocca.svg' alt='Logo Moca Agency' />
      <ul>
        <li>
          <a href='#aboutUs'>About us</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <!--Seleccionar idioma/Banner-->
  
  <div class='banner_landing animate__animated animate__bounceInRight' id='sobreNosotros''>
    <div class='lenguage_select'>
      <p onclick=goEsp() class='esp_eng'>ESP</p>
      <p class='eng_eng'>ENG</p>
    </div>
    <div class='banner__contacto'>
      <a href='#contact'><button>Get in touch</button></a>
      <a href='#'>
        <img src='multimedia/whatsapp.svg' alt='Contactanos via whatsapp' />
      </a>
    </div>
    <img
      class='banner_contact'
      src='multimedia/backbanner.svg'
      alt='fondo de imagen'
    />
    <div class='banner_adapt'>
      <img
        src='multimedia/adaptENG.svg'
        alt='Nos adaptamos al tamaño de tu proyecto'
      />
      <img src='multimedia/cafe.svg' alt='Cafe' />
    </div>
  </div>

  <!--Conocenos-->
  <div class='conocenos animate__animated animate__bounceInRight' id='aboutUs'>
    <img src='multimedia/AboutUs.svg' alt='About Us' />
  </div>
  <!--Servicios-->
  <div class='servicios' id='services'>
    <img src='multimedia/service.svg' alt='services' />
  </div>
  <!--Banner Numeros-->
  <div class='servicios'>
    <img src='multimedia/bannerNumbers.svg' alt='Banner Numbers' />
  </div>
  <!--Mapa Servicios-->
  <div class='conocenos'>
    <img src='multimedia/map.svg' alt='Maps' />
  </div>
  <!--Logos-->
  <div class='multimedia'>
    <img src='multimedia/logos.svg' alt='Logos' />
  </div>
  <!--Solicita presupuesto-->
  <div class='contacto' id='contact'>
    <div class='contacto__formulario'>
      <h2>Request a quote</h2>
      <div>
        <input id="form_nombre" type='text' placeholder='Name' />
        <input id="form_email" type='email' placeholder='E-mail' required />
        <select id="form_servicios" name='servicios'>
          <option value='Asesoria'>How can we help you?</option>
          <option value='Brand consultation'>Brand consultation</option>
          <option value='Creative Graphic Design & Branding'>
            Creative Graphic Design & Branding
          </option>
          <option value='ocial Media Marketing'>Social Media Marketing</option>
          <option value='Content Creation'>Content Creation</option>
          <option value='Custom Web Development'>Custom Web Development</option>
        </select>
        <textarea id="form_texto"
          name='Texto_Ingresado'
          cols='30'
          rows='6'
          placeholder='Brief description of your company'
        ></textarea>
        <button type="submit" onclick=formulario() class="submit" data-toggle="modal" data-target="#exampleModal">Send</button>
      </div>
    </div>
    <div class='contacto__contacto'>
      <div class='contacto__email'>
        <img src='multimedia/email.svg' alt='email' />
        <p>info@moccamarketing.com</p>
      </div>
      <p>Subscribe to our Newsletter:</p>
      <div class='contacto__newsletter'>
        <input type='email' placeholder='E-mail' id="emailNewsletter" required/>
        <button onclick="formulario()" >Subscribe</button>
      </div>
      <div class='contacto__redes'>
        <div class='redes'>
          <img src='multimedia/linkedin.svg' alt='Linkedin' />
          <img src='multimedia/instagram.svg' alt='Instagram' />
          <img src='multimedia/facebook.svg' alt='Facebook' />
        </div>
        <img src='multimedia/mocca.svg' alt='Logo Mocca' />
      </div>
      <p class='contacto__privacidad'>Privacy policies</p>
    </div>
  </div>
</div>
</div>

<div class='d-block d-md-none d-lg-none d-xl-none'>
<div class='ENG_M'>
  <!--Menu Header-->
  <header class="animate__animated animate__bounceInRight">
  <nav class="navbar navbar-expand-lg">
  <img src="multimedia/mocca.svg" alt="Logo Moca Agency" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img
                src="multimedia/menu_button.svg"
                alt="menu"
                id="menu_button"
              />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#AboutUSM">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#servicesM">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contactM">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  </header>
  <!--Seleccionar idioma/Banner-->
  
  <div class='banner_landing_MOB animate__animated animate__bounceInRight'>
    <div class='lenguage_select_MOB'>
      <p onclick=goEsp() class='esp_eng_MOB'>ESP</p>
      <p class='eng_eng_MOB'>ENG</p>
    </div>
    <div class='banner__contacto_MOB'>
      <a href='#contactM'><button>Get in touch</button></a>
      <a href='#'>
        <img src='multimedia/whatsapp.svg' alt='Contactanos via whatsapp' />
      </a>
    </div>
    <img
      class='banner_contact_MOB'
      src='multimedia/backbanner.svg'
      alt='fondo de imagen'
    />
    <div class='banner_adapt_MOB'>
      <img
        src='multimedia/adaptENG.svg'
        alt='Nos adaptamos al tamaño de tu proyecto'
      />
      <img src='multimedia/cafe.svg' alt='Cafe' />
    </div>
  </div>

  <!--Conocenos-->
  <div class='conocenos_MOB animate__animated animate__bounceInRight' id='AboutUSM'>
    <img src='multimedia/AboutUsM.svg' alt='conocenos' />
  </div>
  <!--Servicios-->
  <div class='servicios_MOB' id='servicesM'>
    <img src='multimedia/serviceM.svg' alt='servicios' />
  </div>
  <!--Banner Numeros-->
  <div class='servicios_MOB'>
    <img src='multimedia/bannerNumberM.svg' alt='Banner Numeros' />
  </div>
  <!--Mapa Servicios-->
  <div class='conocenos_MOB'>
    <img src='multimedia/mapM.svg' alt='Mapa Servicios' />
  </div>
  <!--Logos-->
  <div class='multimedia_MOB'>
    <img src='multimedia/logos.svg' alt='Logos' />
  </div>
  <!--Solicita presupuesto-->
  <div class='contacto_MOB' id='contactM'>
    <div class='contacto__formulario_MOB'>
      <h2>Request a quote</h2>
      <div>
        <input id="form_nombreM" type='text' placeholder='Name' />
        <input id="form_emailM" type='email' placeholder='E-mail' required />
        <select id="form_serviciosM" name='servicios'>
          <option value='Asesoria'>How can we help you?</option>
          <option value='Brand consultation'>Brand consultation</option>
          <option value='Creative Graphic Design & Branding'>
            Creative Graphic Design & Branding
          </option>
          <option value='Social Media Marketing'>Social Media Marketing</option>
          <option value='Content Creation'>Content Creation</option>
          <option value='Custom Web Development'>Custom Web Development</option>
        </select>
        <textarea id="form_textoM"
          name='Texto_Ingresado'
          cols='30'
          rows='6'
          placeholder='Brief description of your company'
        ></textarea>
        <button type="submit" onclick=formularioM() class="submit" data-toggle="modal" data-target="#exampleModal">Send</button>
      </div>
    </div>
    <div class='contacto__contacto_MOB'>
      <div class='contacto__email_MOB'>
        <img src='multimedia/email.svg' alt='email' />
        <p>info@moccamarketing.com</p>
      </div>
      <p>Subscribe to our Newsletter:</p>
      <div class='contacto__newsletter_MOB'>
        <input type='email' placeholder='E-mail' id="emailNewsletterM" required/>
        <button onclick="formularioM()" >Subscribe</button>
      </div>
      <div class='contacto__redes_MOB'>
        <div class='redes_MOB'>
          <img src='multimedia/linkedin.svg' alt='Linkedin' />
          <img src='multimedia/instagram.svg' alt='Instagram' />
          <img src='multimedia/facebook.svg' alt='Facebook' />
        </div>
        <img src='multimedia/mocca.svg' alt='Logo Mocca' />
      </div>
      <p class='contacto__privacidad_MOB'>Privacy policies</p>
    </div>
  </div>
</div>
</div>
<!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mocca</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Thank you, we will contact you soon</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
</div>`

const menuMEsp = `<div class="menuMEsp animate__animated animate__bounceInRight id = "menuMEsp">
  <ul>
    <li>
      <a href="#sobreNosotros">Sobre Nosotoros</a>
    </li>
    <li>
      <a href="#servicios">Servicios</a>
    </li>
    <li>
      <a href="#solicitarPresupuesto">Solicitar Presupuesto</a>
    </li>
  </ul>
</div>`