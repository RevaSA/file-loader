export function getImageFromFile(file) {
    return new Promise(resolve => {
        if (!file.type.includes('image')) {
            return resolve('')
        }

        const reader = new FileReader()

        reader.onload = ev => resolve(ev.target.result)
        reader.readAsDataURL(file)
    })
}

export function bytesToSize(bytes = 0) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))

    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

export function noop() {}
