const rewire = require("rewire")
const PostformFile = rewire("../Postform")
const Postform = PostformFile.__get__("Postform")
// @ponicode
describe("Postform.onChange", () => {
    let inst

    beforeEach(() => {
        inst = new Postform()
    })

    test("0", () => {
        inst.onChange(undefined)
    })
})
