
const inputTextArea = document.getElementById("input-text");
const outputTextArea = document.getElementById("output-text");

inputTextArea.addEventListener("focus", function(){
	if(this.value === "Digite seu texto aqui"){
		this.value = "";
	}
});
inputTextArea.addEventListener("blur", function(){
	if(this.value === ""){
		this.value = "Digite seu texto aqui";
	}
});

let grid_code = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function validateText(string){
	 return /[A-ZÀ-Ú-zà-ú]/.test(string);
}


function encryptButton(){
	
	const textToEncrypt = inputTextArea.value;
	if(!validateText(textToEncrypt)){
		const encryptedText = encrypt(textToEncrypt);
		outputTextArea.value = encryptedText;
	}
	
}

function decryptButton(){
	const textToDecrypt = inputTextArea.value;
	const decryptedText = decrypt(textToDecrypt);

	outputTextArea.value = decryptedText;
}

function copyButton(){
	outputTextArea.select();
	document.execCommand("copy");
}

function encrypt(string){
    
    let encryptedString = "";
    for(let i = 0; i < string.length; i++){
	let match = false;
	for(let j = 0; j < grid_code.length; j++){
	    if(string[i] == grid_code[j][0]){
		encryptedString +=  grid_code[j][1];
		match = true;
		break;
	    }
	}
	if(!match){
	    encryptedString += string[i];
	}
    }
    return encryptedString;
}

function decrypt(string){
    let decryptedString = string
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");
    
    return decryptedString;
}

