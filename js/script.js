function hitungluas () {
    var alassegitiga = (document.getElementById ('alas').value)
    var tinggisegitiga = (document.getElementById ('tinggi').value)
    var hasil = 0.5*alassegitiga*tinggisegitiga
    document.getElementById('hasilluas').innerText = "="+hasil

}
function hitungkeliling () {
    var sisi1 = (document.getElementById ('sisi1').value)
    var sisi2 = (document.getElementById ('sisi2').value)
    var sisi3 = (document.getElementById ('sisi3').value)
    var hasil1 = (parseFloat (sisi1)+ parseFloat (sisi2)+ parseFloat (sisi3))
    document.getElementById('hasilkeliling').innerText = "="+hasil1
}
function resetkeliling() {
    document.getElementById("form").reset()
    document.getElementById("hasilkeliling").innerText =""
}

function resetluas() {
    document.getElementById("form").reset()
    document.getElementById("hasilluas").innerText=""
}