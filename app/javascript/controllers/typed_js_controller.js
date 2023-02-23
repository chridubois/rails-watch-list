import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Save any kind of movies", "Enjoy !!!!!!!!!!!"],
      typeSpeed: 10,
      loop: true
    })
  }
}
