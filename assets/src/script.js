class Multimedia {
  constructor(url) {
    const _url = url;
    this.obtenerUrl = () => _url;
  }
  get getUrl() {
    return this.obtenerUrl();
  }
  setInicio() {
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    const _id = id;
    this.obtenerId = () => _id;
  }
  get getId() {
    return this.obtenerId();
  }
  playMultimedia() {
    Videos(this.getUrl, this.getId);
  }
  setInicio(tiempo) {
    const idDOM = document.getElementById(this.getId);
    if (!idDom) return;
    idDom.setAttribute('src', `${this.getUrl}?start=${tiempo}`);
  }
}

const Videos = (() => {
  const insertarVideos = (getUrl, getId) => {
    const idDom = document.getElementById(getId);
    if (!idDom) return;
    idDom.setAttribute('src', getUrl);
  }

  const insertarVideosPublico = (getUrl, getId) => insertarVideos(getUrl, getId);
  return insertarVideosPublico;
})();

const musica = new Reproductor('https://www.youtube.com/embed/qgsO7XnQGGw', 'idMusica');
musica.playMultimedia();

const pelicula = new Reproductor('https://www.youtube.com/embed/wep1-4GWADI', 'idPelicula');
pelicula.playMultimedia();

const serie = new Reproductor('https://www.youtube.com/embed/SWgx7s9nsTw', 'idSerie');
serie.playMultimedia();
