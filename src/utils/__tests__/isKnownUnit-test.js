import test from "tape"
import isKnownUnit from "../isKnownUnit"

test("isKnownUnit", t => {
  t.notOk(isKnownUnit("pix"))
  t.notOk(isKnownUnit("pixels"))

  t.ok(isKnownUnit("em"))
  t.ok(isKnownUnit("eM"))
  t.ok(isKnownUnit("Em"))
  t.ok(isKnownUnit("EM"))
  t.ok(isKnownUnit("ex"))
  t.ok(isKnownUnit("ch"))
  t.ok(isKnownUnit("rem"))
  t.ok(isKnownUnit("%"))
  t.ok(isKnownUnit("vh"))
  t.ok(isKnownUnit("vw"))
  t.ok(isKnownUnit("vmin"))
  t.ok(isKnownUnit("vmax"))
  t.ok(isKnownUnit("vm"))
  t.ok(isKnownUnit("px"))
  t.ok(isKnownUnit("mm"))
  t.ok(isKnownUnit("cm"))
  t.ok(isKnownUnit("in"))
  t.ok(isKnownUnit("pt"))
  t.ok(isKnownUnit("pc"))
  t.ok(isKnownUnit("q"))
  t.ok(isKnownUnit("s"))
  t.ok(isKnownUnit("ms"))
  t.ok(isKnownUnit("deg"))
  t.ok(isKnownUnit("grad"))
  t.ok(isKnownUnit("turn"))
  t.ok(isKnownUnit("rad"))
  t.ok(isKnownUnit("Hz"))
  t.ok(isKnownUnit("kHz"))
  t.ok(isKnownUnit("dpi"))
  t.ok(isKnownUnit("dpcm"))
  t.ok(isKnownUnit("dppx"))

  t.ok(isKnownUnit("em", { only: "length" }))
  t.ok(isKnownUnit("ex", { only: "length" }))
  t.ok(isKnownUnit("ch", { only: "length" }))
  t.ok(isKnownUnit("rem", { only: "length" }))
  t.ok(isKnownUnit("vh", { only: "length" }))
  t.ok(isKnownUnit("vw", { only: "length" }))
  t.ok(isKnownUnit("vmin", { only: "length" }))
  t.ok(isKnownUnit("vmax", { only: "length" }))
  t.ok(isKnownUnit("vm", { only: "length" }))
  t.ok(isKnownUnit("px", { only: "length" }))
  t.ok(isKnownUnit("mm", { only: "length" }))
  t.ok(isKnownUnit("cm", { only: "length" }))
  t.ok(isKnownUnit("in", { only: "length" }))
  t.ok(isKnownUnit("pt", { only: "length" }))
  t.ok(isKnownUnit("pc", { only: "length" }))
  t.ok(isKnownUnit("q", { only: "length" }))

  t.notOk(isKnownUnit("%", { only: "length" }))
  t.notOk(isKnownUnit("s", { only: "length" }))
  t.notOk(isKnownUnit("ms", { only: "length" }))
  t.notOk(isKnownUnit("deg", { only: "length" }))
  t.notOk(isKnownUnit("grad", { only: "length" }))
  t.notOk(isKnownUnit("turn", { only: "length" }))
  t.notOk(isKnownUnit("rad", { only: "length" }))
  t.notOk(isKnownUnit("Hz", { only: "length" }))
  t.notOk(isKnownUnit("kHz", { only: "length" }))
  t.notOk(isKnownUnit("dpi", { only: "length" }))
  t.notOk(isKnownUnit("dpcm", { only: "length" }))
  t.notOk(isKnownUnit("dppx", { only: "length" }))

  t.end()
})