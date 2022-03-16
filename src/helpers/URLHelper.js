class URLHelper {
  static get baseURL() {
    return window.location.origin;
  }
  static get pathname() {
    return window.location.pathname;
  }
  static get href() {
    return window.location.href;
  }
}

export default URLHelper;
