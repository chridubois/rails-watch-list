import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ['Drama', 'Comic', 'Fantasy', 'Horror'],
      typeSpeed: 150,
      backSpeed: 0,
      smartBackspace: true, // this is a default
      loop: true
    })
  }
}
