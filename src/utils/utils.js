export function generateError(xmlPath) {
	return new Error(`Failed to load ${xmlPath} XML file`)
}

export async function readXML(xmlPath, typeOfData) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open("GET", xmlPath, true)

		xhr.onreadystatechange = function () {
			if (
				xhr.readyState === 4 &&
				xhr.status === 200
			) {
				const xmlData = (new DOMParser()).parseFromString(xhr.responseText, typeOfData)

				resolve(xmlData)
			}
		}

		xhr.onerror = () => reject(generateError(xmlPath))

		xhr.send()
	})
}
