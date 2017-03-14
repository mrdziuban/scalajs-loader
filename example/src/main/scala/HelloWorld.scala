package mrdziuban.scalajsLoaderExample

import org.scalajs.dom.document
import scala.scalajs.js.JSApp

object HelloWorld extends JSApp {
  def main(): Unit = document.getElementById("container").innerHTML = "Hello World"
}
