class Conversor {
	recuperarValores(){
		this.decimal = document.getElementById('decimal').value
		this.binario = document.getElementById('binario').value
		

		if(this.decimal == '' && this.binario != ''){ //converter pra decimal
			this.converter(1)
		}else if(this.decimal != '' && this.binario == ''){ //converter pra binario
			this.converter(2)
		}else{
			document.getElementById('decimal').value = ''
			document.getElementById('binario').value = ''
		}
	}

	converter(int){
		if (int == 1) { //binario pra decimal
			var valorArray = this.binario.split('');
			valorArray = valorArray.reverse()

			var arrayBinario = []
			arrayBinario['binario'] = []
			arrayBinario['bit'] = []

			let converterDecimal = []

			let resposta = null


			for (var i = 0; i < valorArray.length; i++) {
				var multiplicar = Math.pow(2, i)

				arrayBinario['binario'].push(valorArray[i])
				arrayBinario['bit'].push(multiplicar)
			}


			for (var i = 0; i < arrayBinario['binario'].length; i++) {

				if(arrayBinario['binario'][i] == 1){
					converterDecimal.push(arrayBinario['bit'][i])
				}
			}

			for (var i = 0; i < converterDecimal.length; i++) {
				resposta += converterDecimal[i]	
			}

			document.getElementById('decimal').value = resposta
			document.getElementById('binario').value = ''


		}else if(int == 2){ //decimal pra binario
			let valor = parseInt(this.decimal)
			var calculo = valor
			var resto = valor
			let binario = []

			do{
				resto = calculo % 2
				calculo = Math.floor(calculo / 2)
				binario.push(resto)
			}while(calculo > 0)

			binario = binario.reverse()
			document.getElementById('binario').value = binario.join('')
			document.getElementById('decimal').value = ''
		}
	}
}

let conversor = new Conversor()