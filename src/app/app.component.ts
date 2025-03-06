import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">LD</div>
        <ul class="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <main>
      <section id="inicio" class="hero">
        <h1>Lucinda Domínguez</h1>
        <p>Desarrolladora Web</p>
      </section>

      <section id="sobre-mi" class="about">
        <h2>Sobre Mí</h2>
        <p>Hola, soy Lucinda Domínguez, una estudiante autodidacta apasionada por el desarrollo web. Me especializo en HTML, CSS y JavaScript, y he trabajado con frameworks como Angular y React con TypeScript en algnos proyectos personales. También tengo conocimientos en C# con Windows Forms y manejo de bases de datos con SQL Server.

Me encanta el orden y disfruto trabajar en un ambiente tranquilo, ya sea en silencio o con música de fondo. La programación es mi pasión, y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.

Si buscas a alguien perseverante, adaptable y con ganas de seguir creciendo en el mundo del desarrollo, ¡estaré encantada de conectar contigo!</p>
      </section>

      <section id="proyectos" class="projects">
        <h2>Mis Proyectos</h2>
        <div class="project-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="assets/todo-app.webp" alt="Proyecto 1">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://github.com/LucindaDev/todo-app-ts" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://todo-app-ts-olive.vercel.app/" target="_blank" class="preview-link">
                    <i class="fas fa-external-link-alt"></i> Preview
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>To Do App - Lista de Tareas con React</h3>
              <p>Aplicación con funciones de guardar, eliminar y filtrar tareas.</p>
              <div class="project-tags">
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <img src="assets/tres-en-raya.webp" alt="Proyecto 2">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://github.com/LucindaDev/Tres-en-raya" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://tres-en-raya2.vercel.app/" target="_blank" class="preview-link">
                    <i class="fas fa-external-link-alt"></i> Preview
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>Tres en Raya - Juego de Tic Tac Toe</h3>
              <p>El clásico juego del gato desarrollado como hobbie.</p>
              <div class="project-tags">
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <img src="assets/calculadora.webp" alt="Proyecto 2">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://github.com/LucindaDev/calculadora-js" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://lucindadev.github.io/calculadora-js/" target="_blank" class="preview-link">
                    <i class="fas fa-external-link-alt"></i> Preview
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>Caculadora</h3>
              <p>Una calculadora simple desarrollada como proyecto personal.</p>
              <div class="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <img src="assets/chatbox.webp" alt="Proyecto 2">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://github.com/tuUsuario/proyecto2" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://lucindadev.github.io/chatbox/" target="_blank" class="preview-link">
                    <i class="fas fa-external-link-alt"></i> Preview
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>Chatbox</h3>
              <p>Un chatbox simple que toma como base visualmente el chat de WhatsApp con un diseño personalizado.</p>
              <div class="project-tags">
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="assets/tarjeta.webp" alt="Proyecto 2">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://github.com/LucindaDev/tarjeta-responsive-giratoria" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://lucindadev.github.io/tarjeta-responsive-giratoria/" target="_blank" class="preview-link">
                    <i class="fas fa-external-link-alt"></i> Preview
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>Tarjeta Responsive Giratoria</h3>
              <p>Una tarjeta giratoria responsive con un diseño personalizado para mostrar información de un usuario en una sola tarjeta junto a algunos proyectos y skills.</p>
              <div class="project-tags">
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" class="contact">
        <h2>Contacto</h2>
        <span>Puedes contactarme a través de mi correo electrónico: <a href="mailto:lucindadsanchez&#64;gmail.com">lucindadsanchez&#64;gmail.com</a></span>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
    </footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Portafolio';
}
