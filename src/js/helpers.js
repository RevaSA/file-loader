export function getImageFromFile(file) {
    return new Promise(resolve => {
        if (!file.type.includes('image')) {
            return resolve(null)
        }

        const reader = new FileReader()

        reader.onload = ev => resolve(ev.target.result)
        reader.readAsDataURL(file)
    })
}
