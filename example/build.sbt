import sbt._
import Keys._

scalacOptions ++= Seq(
  "-deprecation",
  "-encoding", "UTF-8", // yes, this is 2 args
  "-feature",
  "-unchecked",
  "-Xfatal-warnings",
  "-Xlint",
  "-Yno-adapted-args",
  "-Ywarn-dead-code", // N.B. doesn't work well with the ??? hole
  "-Ywarn-infer-any",
  "-Ywarn-numeric-widen",
  "-Ywarn-unused",
  "-Ywarn-value-discard",
  "-Xfuture",
  "-Ydelambdafy:method",
  "-target:jvm-1.8"
)

lazy val project = Project(
  "scalajs-loader-example",
  file("."),
  settings = Seq(
    organization := "mrdziuban",
    name := "scalajs-loader-example",
    version := "1.0",
    scalaVersion := "2.12.1",
    libraryDependencies ++= Seq("org.scala-js" %%% "scalajs-dom" % "0.9.1")
  )
).enablePlugins(ScalaJSPlugin)
