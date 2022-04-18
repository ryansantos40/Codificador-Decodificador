function Codificar (){
    const text = document.getElementById("input").value
    let string = text
    string = Vowels(string)
    string = string.split(' ')
    string = string.reverse()
    string = ReverseString(string)
    string = string.join(" ")
    document.getElementById("output").value = string

}

function ReverseString(string){
    let Array = []
    for (let i = 0; i<string.length; i++){
        Array[i] = string[i]
        let SplitArray = Array[i].split("")
        let ReverseArray = SplitArray.reverse()
        let JoinArray = ReverseArray.join("")
        Array[i]=JoinArray
    }
    return Array
    
}

function Vowels(string) {
    string = string.replace(/a/g,"&!")
    string = string.replace(/A/g,"-!")
    string = string.replace(/e/g,">!")
    string = string.replace(/E/g,"<!")
    string = string.replace(/i/g,"{!")
    string = string.replace(/I/g,"}!")
    string = string.replace(/o/g,"#!")
    string = string.replace(/O/g,"$!")
    string = string.replace(/u/g,"%!")
    string = string.replace(/U/g,"@!")
    return string
}

function Symbols(string){
    string = string.replace(/&!/g,"a")
    string = string.replace(/-!/g,"A")
    string = string.replace(/>!/g,"e")
    string = string.replace(/<!/g,"E")
    string = string.replace(/{!/g,"i")
    string = string.replace(/}!/g,"I")
    string = string.replace(/#!/g,"o")
    string = string.replace(/$!/g,"O")
    string = string.replace(/%!/g,"u")
    string = string.replace(/@!/g,"U")

    return string
}

function Decodificar(){
    const text = document.getElementById("input").value
    let string = text
    string = string.split(' ')
    string = string.reverse()
    string = ReverseString(string)
    string = string.join(' ')
    string = Symbols(string)
    document.getElementById("output").value = string

}