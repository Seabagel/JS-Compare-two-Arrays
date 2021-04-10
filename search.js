let floor5and6 = []
let only5th = []
let only6th = []

floor5th.forEach(i => {
    floor6th.forEach(j => {
        if (i == j) {
            floor5and6.push(i)
        }
    })
})

only5th = floor5th.filter(e => !floor6th.includes(e))
only6th = floor6th.filter(e => !floor5th.includes(e))

document.write("<h3>On 5th and 6th</h3>")
floor5and6.forEach(e => document.write(e + "<br>"))

document.write("<br>")
document.write("<h3>On 5th only</h3>")
only5th.forEach(e => document.write(e + "<br>"))

document.write("<br>")
document.write("<h3>On 6th only</h3>")
only6th.forEach(e => document.write(e + "<br>"))

